import { Injectable } from '@angular/core';
import { Location } from '@angular/common';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { map } from 'rxjs/operators/map';
import { GithubApi, GithubIssue } from '../class/angular';

export interface angularParams {
  title: string;
  body: string;
  id: number;
};

@Injectable()
export class AngularService {
  params = {};
  constructor(private http: HttpClient) {
    console.log("HTTPDAO");
  }

  lists(sort: string, order: string, page: number): Observable<GithubApi> {
    const href = 'https://api.github.com/search/issues';
    const requestUrl = `${href}?q=repo:angular/material2&sort=${sort}&order=${order}&page=${page + 1}`;
    // const requestUrl = 'https://jsonplaceholder.typicode.com/comments';

    console.log('---- ' + requestUrl + ' ----', this.http);
    return this.http.get<GithubApi>(requestUrl);
  }

  save(params: angularParams): Observable<angularParams>{
    const href = 'http://jsonplaceholder.typicode.com/posts';
    // const params = {
    //   "title": "플레이스 홀더 타이틀",
    //   "body": "제이슨플레이스 홀더 봐"
    // }

    return this.http.post<angularParams>(href, params);
    // return this.http.post(href, params)
    //       .subscribe(res => {
    //         console.log(res);
    //       },
    //       err => {
    //         console.log("Error occured");
    //       }
    //     );

    // const req = this.http.post('http://jsonplaceholder.typicode.com/posts', {
    //   title: 'foo',
    //   body: 'bar',
    //   userId: 1
    // }).subscribe(
    //   res => {
    //     console.log(res);
    //   },
    //   err => {
    //     console.log("Error occured");
    // });
  }
}

