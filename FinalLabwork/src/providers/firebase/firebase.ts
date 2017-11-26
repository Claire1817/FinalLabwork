import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database-deprecated';

/*
  Generated class for the FirebaseProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class FirebaseProvider {

  constructor(public afd: AngularFireDatabase) {
    console.log('Hello FirebaseProvider Provider');
  }

  getEventList() {
    return this.afd.list('/events/');
  }
 
  addItem(name) {
    this.afd.list('/events/').push(name);
  }
 
  removeItem(id) {
    this.afd.list('/events/').remove(id);
  }
}
