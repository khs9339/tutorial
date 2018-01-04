import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

/* ************************ **
* Module
** ************************ */
import { AppRouterModule } from './router/app-router.module';


/* ************************ **
* Library Add
** ************************ */
// 메터리얼 
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule, MatCheckboxModule } from '@angular/material';

/* ************************ **
* Layout Component
** ************************ */
import { TopComponent } from './layout/top/top.component';
import { FootComponent } from './layout/foot/foot.component';


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
    WriteComponent,
    TopComponent,
    FootComponent
  ],
  imports: [
    AppRouterModule,

    BrowserModule, 
    FormsModule,
    BrowserAnimationsModule, 
    MatButtonModule, 
    MatCheckboxModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
