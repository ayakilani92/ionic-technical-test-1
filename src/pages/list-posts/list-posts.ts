import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Events } from 'ionic-angular';
import { DataProvider } from '../../providers/data/data';
import { AlertController } from 'ionic-angular';
@IonicPage()
@Component({
  selector: 'page-list-posts',
  templateUrl: 'list-posts.html',
})
export class ListPostsPage {

  posts: any = [];
  isConnected: boolean;

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public data: DataProvider,
    public events: Events,
    public alertCtrl: AlertController) {

    this.events.subscribe('network:subscription', (network) => {
      console.log(network);
      this.isConnected = network;
      if (this.isConnected == false)
        this.showAlert();
    });

  }

  ionViewDidLoad() {
    this.data.getPosts().subscribe(resp => {
      this.posts = resp;
      this.posts.forEach(post => {
        const length = 200;
        post.resumebody = post.body.length > length ? post.body.substring(0, length) + "..." : post.body;
      });
    });
  }

 // go to details post 
  openPost(id) {
    this.navCtrl.push('PostDetailsPage', { key: id });
  }

  //show alert when there is no internet connection.
  showAlert() {
    const alert = this.alertCtrl.create({
      title: 'Ressayer !',
      subTitle: 'Aucune connexion Internet nest disponible!',
      buttons: ['OK']
    });
    alert.present();
  }

}
