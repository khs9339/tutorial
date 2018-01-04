import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

/* ************************ **
* Library Add
** ************************ */
// 부트스트랩 


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
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
