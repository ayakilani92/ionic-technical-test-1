import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DataProvider, Post } from '../../providers/data/data';

@IonicPage()
@Component({
  selector: 'page-post-details',
  templateUrl: 'post-details.html',
})
export class PostDetailsPage {

  post: any = {};

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public data: DataProvider) {

    this.data.getPostByID(this.navParams.get('key')).subscribe(data => {
      this.post = data;
      this.data.getCommentOnPost(this.post.id).subscribe(comments => {
        this.post.comments = comments;
        console.log("cooo", this.post.comments)
      })
    })
  }

  ionViewDidLoad() {
  
    
  }

}
