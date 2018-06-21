import { Component } from '@angular/core';
import { Platform, Events } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Network } from '@ionic-native/network';


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage: any = 'ListPostsPage';

  constructor(public platform: Platform,
    public statusBar: StatusBar,
    public splashScreen: SplashScreen,
    public events: Events,
    private network: Network) {

    this.initializeApp();

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });

    // watch network for a disconnect
    this.network.onDisconnect().subscribe(() => {
      console.log('network was disconnected :(');
      this.events.publish('network:subscription', 'false');
    });

    // watch network for a connection
    this.network.onConnect().subscribe(() => {
      console.log('network connected :)');
      this.events.publish('network:subscription', 'true');
    });

  }
}


