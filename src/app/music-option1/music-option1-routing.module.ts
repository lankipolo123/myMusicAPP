import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MusicOption1Page } from './music-option1.page';

const routes: Routes = [
  {
    path: '',
    component: MusicOption1Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MusicOption1PageRoutingModule {}
