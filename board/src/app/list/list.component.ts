import { Component, AfterViewInit, ViewChild } from '@angular/core';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { merge } from 'rxjs/observable/merge';
import { of as observableOf } from 'rxjs/observable/of';
import { startWith } from 'rxjs/operators/startWith';
import { switchMap } from 'rxjs/operators/switchMap';
import { catchError } from 'rxjs/operators/catchError';
import { map } from 'rxjs/operators/map';
import { log } from 'util';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
 
// log("APP - LIST");
export class ListComponent implements AfterViewInit {
  displayedColumns = ['number', 'created', 'state', 'title'];
  dataBase: HttpDao | null;
  dataSource = new MatTableDataSource();

  resultsLength = 0;
  isLoadingResults= false;
  isRateLimitReached = false;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private http: HttpClient) { 
    console.log("ListComponent");
  }

  ngOnInit() {
  }

  ngAfterViewInit() {
    console.log('ngAfterViewInit');
    this.dataBase = new HttpDao(this.http);

    // If the user changes the sort order, reset back to the first page.
    this.sort.sortChange.subscribe(() => this.paginator.pageIndex = 0);

    merge(this.sort.sortChange, this.paginator.page)
      .pipe(
      startWith({}),
      switchMap(() => {
        console.log('switchMap');
        this.isLoadingResults = true;
        return this.dataBase!.getRepoIssues(
          this.sort.active, this.sort.direction, this.paginator.pageIndex);
      }),
      map(data => {
        // Flip flag to show that loading has finished.
        this.isLoadingResults = false;
        this.isRateLimitReached = false;
        this.resultsLength = data.total_count;

        return data.items;
      }),
      catchError(() => {
        this.isLoadingResults = false;
        // Catch if the GitHub API has reached its rate limit. Return empty data.
        this.isRateLimitReached = true;
        return observableOf([]);
      })
      ).subscribe(data => this.dataSource.data = data);


  }
}

export interface GithubApi{
  items: GithubIssue[];
  total_count: number;
}

export interface GithubIssue{
  created_at: string;
  number; string;
  title: string;
  state: string;
}
export class HttpDao {
  constructor(private http: HttpClient){
    console.log("HTTPDAO");
  }
  getRepoIssues(sort: string, order: string, page: number): Observable<GithubApi> {
    const href = 'https://api.github.com/search/issues';
    const requestUrl = `${href}?q=repo:angular/material2&sort=${sort}&order=${order}&page=${page + 1}`;
    // const requestUrl = 'https://jsonplaceholder.typicode.com/comments';
    return this.http.get<GithubApi>(requestUrl);
  }
}