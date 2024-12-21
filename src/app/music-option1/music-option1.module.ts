import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MusicOption1PageRoutingModule } from './music-option1-routing.module';

import { MusicOption1Page } from './music-option1.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MusicOption1PageRoutingModule
  ],
  declarations: [MusicOption1Page]
})
export class MusicOption1PageModule {}
