import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of }         from 'rxjs/Observable/of';
import { Subject }    from 'rxjs/Subject';

import { 
  debounceTime, distinctUntilChanged, switchMap
}                     from 'rxjs/operators';

import { Hero }       from '../class/hero';
import { HeroService } from '../hero.service';


@Component({
  selector: 'app-hero-search',
  templateUrl: './hero-search.component.html',
  styleUrls: ['./hero-search.component.css']
})
export class HeroSearchComponent implements OnInit {

  // Notice the declaration of heroes$ as an Observable
  heroes$: Observable<Hero[]>;
  private searchTerms = new Subject<string>();

  constructor(private heroService: HeroService) { }

  search(term: string): void{
    this.searchTerms.next(term);
  }

  ngOnInit() {
    this.heroes$ = this.searchTerms.pipe(
      // 키입력후 대기 시간
      debounceTime(300),

      // 이전입력정보 무시
      distinctUntilChanged(),

      // 검색키워드가 변경시 새로운 검색 내용 변경  
      switchMap((term: string) => this.heroService.searchHeroes(term)),
    );
  }
}
