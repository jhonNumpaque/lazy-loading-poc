import { NgModule } from '@angular/core';
import { PageOne } from './page-one';
import { DeepLinkedModule } from 'ionic-angular';

@NgModule({
  declarations: [
    PageOne,
  ],
  imports: [
    DeepLinkedModule.forChild(PageOne)
  ],
  entryComponents: [
    PageOne
  ],
  providers: []
})
export class PageOneModule {}
