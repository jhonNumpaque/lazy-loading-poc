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
    IonicModule.forRoot(MyApp, {}, {
      links: [
        { path: '../pages/home/home.module', namedExport: 'HomePageModule', name: 'Home' },
        { path: '../pages/page-one/page-one.module', namedExport: 'PageOneModule', name: 'PageOne' },
        { path: '../pages/page-two/page-two.module', namedExport: 'PageTwoModule', name: 'PageTwo' }
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