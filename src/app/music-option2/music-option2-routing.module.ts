import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MusicOption2Page } from './music-option2.page';

const routes: Routes = [
  {
    path: '',
    component: MusicOption2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MusicOption2PageRoutingModule {}
