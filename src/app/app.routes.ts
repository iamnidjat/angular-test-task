import { Routes } from '@angular/router';
import {MainComponent} from "../components/main/main.component";
import {NotFoundComponent} from "../components/not-found/not-found.component";

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'app/main-page',
    pathMatch: 'full',
  },
  {
    path: 'app/main-page',
    component: MainComponent,
  },
  {
    path: '**',
    component: NotFoundComponent,
  }
];
