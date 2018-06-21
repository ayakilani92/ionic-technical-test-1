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

}

/* export class Post {
  id: number;
  userId: number;
  title: string;
  body: string;
  resumebody:string
}; */