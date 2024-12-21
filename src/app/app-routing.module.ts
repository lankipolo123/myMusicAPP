import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'music-option1',
    pathMatch: 'full'
  },

  {
    path: 'music-option1',
    loadChildren: () => import('./music-option1/music-option1.module').then( m => m.MusicOption1PageModule)
  },
  {
    path: 'music-option2',
    loadChildren: () => import('./music-option2/music-option2.module').then( m => m.MusicOption2PageModule)
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}