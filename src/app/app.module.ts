import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { IonicApp, IonicModule } from 'ionic-angular';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';

import * as Constants from '../util/constants';

@NgModule({
  declarations: [
    MyApp,
    HomePage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp, {}, {
      links: [
        { loadChildren: '../pages/page-one/page-one.module#PageOneModule', name: 'PageOne' },
        { loadChildren: '../pages/page-two/page-two.module#PageTwoModule', name: 'PageTwo' }
      ]
    })
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    HomePage
  ],
  providers: []
})
export class AppModule {}