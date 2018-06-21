import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Events, ToastController } from 'ionic-angular';
import { DataProvider } from '../../providers/data/data';

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
      if (!this.isConnected)
        this.showToast('You are not connected');
    })
  }

  ionViewDidLoad() {
    this.data.getPostByID(this.navParams.get('key')).subscribe(data => {
      this.post = data;
      this.data.getCommentOnPost(this.post.id).subscribe(comments => {
        this.post.comments = comments;
      })
    })
  }

  //show toast function
  showToast(message: string) {
    let toast = this.toastCtrl.create({
      message: message,
      duration: 2000
    });
    toast.present();
  }
  
}
