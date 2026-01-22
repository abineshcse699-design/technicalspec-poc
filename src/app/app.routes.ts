import { Routes } from '@angular/router';
import { Tspec } from './tspec/tspec';
import { MaterialRequiredComponent } from './pages/s-page/s-page';

export const routes: Routes = [

{
  path: '',
  redirectTo: 's-page',
  pathMatch: 'full'
},
  {
    path: 'tspec',
 component:Tspec
  },
  {
    path:'s-page',
    component:MaterialRequiredComponent
  }

];

