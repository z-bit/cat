import { Routes, RouterModule } from '@angular/router';
import { UebenComponent } from './components/cn_ueben.component';

const routes: Routes = [
  { path: '', component: UebenComponent },

];

export const UebenRouting = RouterModule.forChild(routes);
