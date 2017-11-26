import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database-deprecated';
import { FirebaseProvider } from '../../providers/firebase/firebase';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  newItem = '';
  eventList: FirebaseListObservable<any[]>;
  
   constructor(public navCtrl: NavController, public firebaseProvider: FirebaseProvider) {
     this.eventList = this.firebaseProvider.getEventList();
     console.log(this.eventList);
   }
  
   addEventPage() {
     this.navCtrl.push('AddEventPage');
   }
  
   removeItem(id) {
     this.firebaseProvider.removeItem(id);
   }

}
