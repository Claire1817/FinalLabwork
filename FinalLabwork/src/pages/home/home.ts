import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database-deprecated';
import { FirebaseProvider } from '../../providers/firebase/firebase';

/**
 * Claire Gizard -- 1106363
 * Pierre Munin -- 1106420
 */
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  newItem = '';
  eventList;
  
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
