import { Component } from '@angular/core';
import { LoadingController, ModalController, NavController } from 'ionic-angular';

//import { PageThree } from '../page-three/page-three';

/*
  Generated class for the PageTwo page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-page-two',
  templateUrl: './page-two.html'
})
export class PageTwo {

  constructor(public loadingController: LoadingController, public modalController: ModalController, public navCtrl: NavController) {}

  ionViewDidLoad() {
  }

  goBack() {
    this.navCtrl.pop();
  }

  showLoader() {
    const viewController = this.loadingController.create({
      duration: 2000
    });

    viewController.present();
  }

  openModal() {
    //const viewController = this.modalController.create('PageThree');
    //viewController.present();


    this.navCtrl.push('PageThree');
  }
}
