import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AddEventPage } from './add-event';

/**
 * Claire Gizard -- 1106363
 * Pierre Munin -- 1106420
 */
@NgModule({
  declarations: [
    AddEventPage,
  ],
  imports: [
    IonicPageModule.forChild(AddEventPage),
  ],
})
export class AddEventPageModule {}
