import { NgModule } from '@angular/core';
import { DeepLinkModule } from 'ionic-angular';

import { HomePage } from './home';

@NgModule({
  declarations: [
    HomePage,
  ],
  imports: [
    DeepLinkModule.forChild(HomePage),
  ],
  entryComponents: [
    HomePage
  ]
})
export class HomePageModule {}
