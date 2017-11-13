import { Routes, RouterModule } from '@angular/router';
import { InventurComponent } from './components/co_inventur.component';

const routes: Routes = [
  {path: '', component: InventurComponent},

];

export const InventurRouting = RouterModule.forChild(routes);
