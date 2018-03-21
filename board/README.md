# Bbs

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.6.3.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

---

# Board 게시판 
```bash
- FrameWork : Angular5
- CssFrameWorck : Bootsrap
```


## Meterial 설치 방법
> 설치 가이드
> 1) 라이브러리 설치
> \- **npm install --save @angular/material @angular/cdk**
> \- **npm install --save @angular/animations** (애니메이션 효과)
> \- **npm install --save hammerjs** (mat-slide-toggle, mat-slider, matTooltip  (의존성) 

> 2) App.module 추가
> \- import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
> \- import {MatButtonModule, MatCheckboxModule} from '@angular/material';
> \- @NgModule({
	  imports: [BrowserAnimationsModule, MatButtonModule, MatCheckboxModule]
	});

> 3) 테마 설치 (styles.css)
> \- @import "~@angular/material/prebuilt-themes/indigo-pink.css";

> 4) hammerjs 추가(src/main.ts)
> \- import 'hammerjs';

> 5) Meterial Icons (index.html)
> \- &lt;link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet"&gt;
> \- [아이콘 가이드](https://google.github.io/material-design-icons/)

### Meterial 모듈 소개
| 모듈 | 기능 |
| - | - |
| MatAutocompleteModule | |
| MatButtonModule | |
| MatButtonToggleModule | |
| MatCardModule | |
| MatCheckboxModule | |
| MatChipsModule | |
| MatDatepickerModule | |
| MatDialogModule | |
| MatExpansionModule | |
| MatGridListModule | |
| MatIconModule | |
| MatInputModule | |
| MatListModule | rowHeight: fit / 100px / 2:1 |
| | gutterSize: px |
| MatMenuModule | |
| MatNativeDateModule | |
| MatPaginatorModule | |
| MatProgressBarModule | |
| MatProgressSpinnerModule | |
| MatRadioModule | |
| MatRippleModule | |
| MatSelectModule | |
| MatSidenavModule | |
| MatSliderModule | |
| MatSlideToggleModule | |
| MatSnackBarModule | |
| MatSortModule | |
| MatTableModule | |
| MatTabsModule | |
| MatToolbarModule | |
| MatTooltipModule | |
| MatStepperModule | |

```
참고
 - 홈페이지 : https://material.angular.io/guide/getting-started
```
---

## Bootsrap(4.x.x) 설치 방법
***(부트스트랩이 별기능이 없어서 취소함.)***
**Requires: Angular5 이상**

> App.module.ts
> - import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
> - imports: [NgbModule, ...]
```
참고
 - https://ng-bootstrap.github.io/#/getting-started
```



