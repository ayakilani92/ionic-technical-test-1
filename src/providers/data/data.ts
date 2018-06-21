import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import * as CONFIG from '../../app/app.constants';
import 'rxjs/add/operator/map'

@Injectable()
export class DataProvider {
  api: any = CONFIG.API;
  constructor(public http: HttpClient) {
    console.log('Hello DataProvider Provider');
  }

  getPosts() {
    return this.http.get(this.api)
      .map(data => {
        console.log(data);
        return data;
      })
  }

  //Return a single post by Id
  getPostByID(id) {
    return this.http.get(this.api + "/" + id)
      .map(data => {
        console.log(data);
        return data;
      });
  }

  getCommentOnPost(id) {
    console.log("iddd", id)
    return this.http.get(this.api + "/" + id + "/" + "comments")
      .map(data => {
        console.log(data);
        return data;
      });
  }



}

export class Post {
  id: number;
  userId: number;
  title: string;
  body: string;
  comments: Array<Comment>;
};
export class Comment {
  postId: number;
  id: number;
  name: string;
  email: string;
  body: string;
}