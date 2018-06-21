import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Events } from 'ionic-angular';
import { DataProvider } from '../../providers/data/data';
import { ToastController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-post-details',
  templateUrl: 'post-details.html',
})
export class PostDetailsPage {

  post: any = {};
  isConnected: boolean = false;

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public data: DataProvider,
    public events: Events,
    public toastCtrl: ToastController) {

    this.events.subscribe('network:subscription', (network) => {
      this.isConnected = network;
      if (this.isConnected == false)
        this.toastCtrl.create({
          message: 'You are not connected',
          duration: 3000
        }).present();
    });

  }

  ionViewDidLoad() {
    this.data.getPostByID(this.navParams.get('key')).subscribe(data => {
      this.post = data;
      this.data.getCommentOnPost(this.post.id).subscribe(comments => {
        this.post.comments = comments;
      })
    })
  }

}
