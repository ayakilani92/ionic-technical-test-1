import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Events, ToastController } from 'ionic-angular';
import { DataProvider } from '../../providers/data/data';
import { Storage } from '@ionic/storage';

@IonicPage()
@Component({
  selector: 'page-list-posts',
  templateUrl: 'list-posts.html',
})
export class ListPostsPage {

  posts: any = [];
  isConnected: boolean = false;

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public data: DataProvider,
    public events: Events,
    public toastCtrl: ToastController,
    private storage: Storage) {

    this.events.subscribe('network:subscription', (network) => {
      this.isConnected = network;
      if (!this.isConnected) {
        this.showToast('You are not connected');
        this.storage.get('listPosts').then((val) => {
          if (val) {
            this.posts = JSON.parse(val);
          }
        })
      }
    });

  }

  ionViewDidLoad() {
    this.data.getPosts().subscribe(resp => {
      this.posts = resp;
      this.posts.forEach(post => {
        const length = 200;
        post.resumebody = post.body.length > length ? post.body.substring(0, length) + "..." : post.body;
      });
      this.storage.set('listPosts', JSON.stringify(this.posts));
    });
  }


  //show toast function
  showToast(message: string) {
    let toast = this.toastCtrl.create({
      message: message,
      duration: 2000
    });
    toast.present();
  }

  // go to details post 
  openPost(id) {
    this.navCtrl.push('PostDetailsPage', { key: id });
  }

}
