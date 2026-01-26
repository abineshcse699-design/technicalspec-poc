import { Routes } from '@angular/router';
import { HhhComponent } from './pages/hhh/hhh';
import { SPageComponent } from './pages/s-page/s-page';


export const routes: Routes = [
  { path: '', redirectTo: 'hhh', pathMatch: 'full' },
  { path: 'hhh', component: HhhComponent },
  { path: 's-page', component: SPageComponent }
  
];
