import { NgModule } from '@angular/core';
import { PageOne } from './page-one';
import { DeepLinkModule } from 'ionic-angular';

@NgModule({
  declarations: [
    PageOne,
  ],
  imports: [
    DeepLinkModule.forChild(PageOne)
  ],
  entryComponents: [
    PageOne
  ]
})
export class PageOneModule {}
