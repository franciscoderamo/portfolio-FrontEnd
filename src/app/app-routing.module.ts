import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { LoginComponent } from './componentes/login/login.component';
import { CVComponent } from './componentes/cv/cv.component';
import { PageNotFoundComponent } from './componentes/page-not-found/page-not-found.component';
import { ProfileComponent } from './componentes/profile/profile.component';

const routes: Routes = [
  {path: '', component: CVComponent},
  {path: 'login', component: LoginComponent},
  {path: 'profile', component: ProfileComponent},//Agregar canActivate: [AuthGuard]} solo es accesible si el usuario esta logueado
  {path: '**', component: PageNotFoundComponent}
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
