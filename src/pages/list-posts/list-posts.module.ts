import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ListPostsPage } from './list-posts';

@NgModule({
  declarations: [
    ListPostsPage,
  ],
  imports: [
    IonicPageModule.forChild(ListPostsPage),
  ],
})
export class ListPostsPageModule {}
