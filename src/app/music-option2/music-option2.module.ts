import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MusicOption2PageRoutingModule } from './music-option2-routing.module';

import { MusicOption2Page } from './music-option2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MusicOption2PageRoutingModule
  ],
  declarations: [MusicOption2Page]
})
export class MusicOption2PageModule {}
