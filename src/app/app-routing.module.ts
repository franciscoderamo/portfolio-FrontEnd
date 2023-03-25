import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { RegisterComponent } from './componentes/register/register.component';
import { LoginComponent } from './componentes/login/login.component';
import { CVComponent } from './componentes/cv/cv.component';
import { PageNotFoundComponent } from './componentes/page-not-found/page-not-found.component';
import { ProfileComponent } from './componentes/profile/profile.component';
import { canActivate, redirectUnauthorizedTo } from '@angular/fire/auth-guard';

const routes: Routes = [
  {path: '', pathMatch:'full', redirectTo:'login'},
  {
    path: 'portfolio',
    component: CVComponent,
    ...canActivate(() => redirectUnauthorizedTo(['/register']))
  },
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'profile', component: ProfileComponent},
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
