import { Routes, RouterModule } from '@angular/router';
import { WhExComponent } from './components/cn_wh-ex.component';

const routes: Routes = [
  { path: '', component: WhExComponent },

];

export const WhExRouting = RouterModule.forChild(routes);
