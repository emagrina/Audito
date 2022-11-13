import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomePageComponent} from "@modules/home/pages/home-page/home-page.component";
import {SessionGuard} from "@core/guards/session.guard";

const routes: Routes = [
  {
    path: 'auth',
    loadChildren:() => import(`./modules/auth/auth.module`).then(m => m.AuthModule)
  },
  {
    path: '', // TODO: localhost:4200/
    component: HomePageComponent,
    loadChildren:() => import(`./modules/home/home.module`).then(m => m.HomeModule),
    canActivate: [SessionGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
