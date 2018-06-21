import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Events } from 'ionic-angular';
import { DataProvider } from '../../providers/data/data';
import { ToastController } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { Network } from '@ionic-native/network';

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
    private storage: Storage,
    private network: Network) {

    this.events.subscribe('network:subscription', (network) => {
      this.isConnected = network;
      if (this.isConnected == false) {
        this.toastCtrl.create({
          message: 'You are not connected',
          duration: 3000
        }).present();
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


  displayNetworkUpdate(connectionState: string) {
    let networkType = this.network.type;

    this.toastCtrl.create({
      message: 'You are now ${connectionState} via ${networkType}',
      duration: 3000
    }).present();
  }

  ionViewDidEnter() {
    this.network.onConnect().subscribe(() => {
      console.log('network connected :)')
      /*    this.displayNetworkUpdate(data.type); */
    }, error => console.error(error));
    this.network.onDisconnect().subscribe(() => {
      console.log('network was disconnected :(');
      /*   this.displayNetworkUpdate(data.type); */
    }, error => console.error(error));
  }

  // go to details post 
  openPost(id) {
    this.navCtrl.push('PostDetailsPage', { key: id });
  }


}
