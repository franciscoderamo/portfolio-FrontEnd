import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './componentes/register/register.component';
import { LoginComponent } from './componentes/login/login.component';
import { CVComponent } from './componentes/cv/cv.component';
import { PageNotFoundComponent } from './componentes/page-not-found/page-not-found.component';
import { canActivate, redirectUnauthorizedTo } from '@angular/fire/auth-guard';
import { DashboardComponent } from './componentes/dashboard/dashboard.component';
import { EditPersonComponent } from './componentes/modal/person/edit-person.component';
import { NewExperienceComponent } from './componentes/modal/experience/new-experience.component';
import { EditExperienceComponent } from './componentes/modal/experience/edit-experience.component';
import { NewSkillGroupComponent } from './componentes/modal/skill-group/new-skill-group.component';
import { EditSkillGroupComponent } from './componentes/modal/skill-group/edit-skill-group.component';
import { NewSkillComponent } from './componentes/modal/skill/new-skill.component';
import { EditSkillComponent } from './componentes/modal/skill/edit-skill.component';
import { NewStudiesComponent } from './componentes/modal/studies/new-studies.component';
import { EditStudiesComponent } from './componentes/modal/studies/edit-studies.component';
import { EditJobsComponent } from './componentes/modal/job/edit-job.component';
import { NewJobsComponent } from './componentes/modal/job/new-job.component';
import { NewServicesComponent } from './componentes/modal/services/new-services.component';
import { EditServicesComponent } from './componentes/modal/services/edit-services.component';
import { NewPortfolioComponent } from './componentes/modal/portfolio/new-portfolio.component';
import { EditPortfolioComponent } from './componentes/modal/portfolio/edit-portfolio.component';
import { NewTaskComponent } from './componentes/modal/task/new-task.component';
import { EditTaskComponent } from './componentes/modal/task/edit-task.component';
import { NewPersonComponent } from './componentes/modal/person/new-person.component';

const routes: Routes = [
  {path: '', component: CVComponent},
  {
    path: 'dashboard',
    component: DashboardComponent,
    ...canActivate(() => redirectUnauthorizedTo(['/login']))
  },
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {
    path: 'new-person',
    component: NewPersonComponent,
    ...canActivate(() => redirectUnauthorizedTo(['/login']))
  },
  {
    path: 'edit-person/:id',
    component: EditPersonComponent,
    ...canActivate(() => redirectUnauthorizedTo(['/login']))
  },
  {
    path: 'new-experience',
    component: NewExperienceComponent,
    ...canActivate(() => redirectUnauthorizedTo(['/login']))
  },
  {
    path: 'edit-experience/:id',
    component: EditExperienceComponent,
    ...canActivate(() => redirectUnauthorizedTo(['/login']))
  },
  {
    path: 'new-skillgroup',
    component: NewSkillGroupComponent,
    ...canActivate(() => redirectUnauthorizedTo(['/login']))
  },
  {
    path: 'edit-skillgroup/:id',
    component: EditSkillGroupComponent,
    ...canActivate(() => redirectUnauthorizedTo(['/login']))
  },
  {
    path: 'new-skill',
    component: NewSkillComponent,
    ...canActivate(() => redirectUnauthorizedTo(['/login']))
  },
  {
    path: 'edit-skill/:id',
    component: EditSkillComponent,
    ...canActivate(() => redirectUnauthorizedTo(['/login']))
  },
  {
    path: 'new-study',
    component: NewStudiesComponent,
    ...canActivate(() => redirectUnauthorizedTo(['/login']))
  },
  {
    path: 'edit-study/:id',
    component: EditStudiesComponent,
    ...canActivate(() => redirectUnauthorizedTo(['/login']))
  },
  {
    path: 'new-job',
    component: NewJobsComponent,
    ...canActivate(() => redirectUnauthorizedTo(['/login']))
  },
  {
    path: 'edit-job/:id',
    component: EditJobsComponent,
    ...canActivate(() => redirectUnauthorizedTo(['/login']))
  },
  {
    path: 'new-service',
    component: NewServicesComponent,
    ...canActivate(() => redirectUnauthorizedTo(['/login']))
  },
  {
    path: 'edit-service/:id',
    component: EditServicesComponent,
    ...canActivate(() => redirectUnauthorizedTo(['/login']))
  },
  {
    path: 'new-portfolio',
    component: NewPortfolioComponent,
    ...canActivate(() => redirectUnauthorizedTo(['/login']))
  },
  {
    path: 'edit-portfolio/:id',
    component: EditPortfolioComponent,
    ...canActivate(() => redirectUnauthorizedTo(['/login']))
  },
  {
    path: 'new-task',
    component: NewTaskComponent,
    ...canActivate(() => redirectUnauthorizedTo(['/login']))
  },
  {
    path: 'edit-task/:id',
    component: EditTaskComponent,
    ...canActivate(() => redirectUnauthorizedTo(['/login']))
  },
  {path: '**', component: PageNotFoundComponent},

];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
