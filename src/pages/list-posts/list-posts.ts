import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DataProvider } from '../../providers/data/data';

@IonicPage()
@Component({
  selector: 'page-list-posts',
  templateUrl: 'list-posts.html',
})
export class ListPostsPage {

  posts: any = [];

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public data: DataProvider) {

  }

  ionViewDidLoad() {

    this.data.getPosts().subscribe(resp => {
      this.posts = resp;
      this.posts.forEach(post => {
        const length = 200;
        post.resumebody = post.body.length > length ? post.body.substring(0, length) + "..." :post.body;
      });
    });

  }

/**
   *  // go to details post
   * @param id 
   */
  openPost(id) {
    this.navCtrl.push('PostDetailsPage', { key: id });
  }

}
