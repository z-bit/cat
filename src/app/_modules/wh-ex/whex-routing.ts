import { Routes, RouterModule } from '@angular/router';
import { WhExComponent } from './components/cn_wh-ex.component';


const routes: Routes = [
  // instant loading
  { path: '', component: WhExComponent },

];

export const AppRouting = RouterModule.forChild(routes);
