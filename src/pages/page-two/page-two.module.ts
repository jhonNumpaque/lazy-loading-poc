import { NgModule } from '@angular/core';
import { PageTwo } from './page-two';
import { DeepLinkedModule } from 'ionic-angular';

@NgModule({
  declarations: [
    PageTwo,
  ],
  imports: [
    DeepLinkedModule.forChild(PageTwo)
  ],
  entryComponents: [
    PageTwo
  ],
  providers: []
})
export class PageTwoModule {

}
