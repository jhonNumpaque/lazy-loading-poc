import { NgModule } from '@angular/core';
import { PageThree } from './page-three';
import { DeepLinkModule } from 'ionic-angular';

@NgModule({
  declarations: [
    PageThree,
  ],
  imports: [
    DeepLinkModule.forChild(PageThree)
  ]
})
export class PageThreeModule {

}
