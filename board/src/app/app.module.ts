import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


/* ************************ **
* Library Add
** ************************ */
// 부트스트랩 
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


/* ************************ **
* Service Component
** ************************ */
import { AppComponent } from './app.component';
import { ListComponent } from './list/list.component';
import { WriteComponent } from './write/write.component';


@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    WriteComponent
  ],
  imports: [
    BrowserModule,
    NgbModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
