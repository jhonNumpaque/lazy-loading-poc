import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

/*
  Generated class for the PageTwo page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-three',
  templateUrl: './page-three.html'
})
export class PageThree {

  constructor(public navCtrl: NavController) {}

  ionViewDidLoad() {
  }

  goBack() {
    this.navCtrl.pop();
  }

}
