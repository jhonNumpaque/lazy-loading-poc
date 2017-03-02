import { NgModule } from '@angular/core';
import { PageTwo } from './page-two';
import { DeepLinkModule } from 'ionic-angular';

@NgModule({
  declarations: [
    PageTwo,
  ],
  imports: [
    DeepLinkModule.forChild(PageTwo)
  ]
})
export class PageTwoModule {

}
