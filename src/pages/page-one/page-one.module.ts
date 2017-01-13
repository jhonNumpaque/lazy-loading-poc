import { NgModule } from '@angular/core';
import { PageOne } from './page-one';
import { IonicModule } from 'ionic-angular';

@NgModule({
  declarations: [
    PageOne,
  ],
  imports: [
    // IonicModule.getShared()
  ],
  entryComponents: [
    PageOne
  ],
  providers: []
})
export class PageOneModule {}

export function getView() {
  return PageOne;
}