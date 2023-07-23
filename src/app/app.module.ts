import { AppRoutingModule } from './app-routing.module';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SwiperModule } from 'swiper/angular';
import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { NgbAccordionModule, NgbPaginationModule, NgbAlertModule } from '@ng-bootstrap/ng-bootstrap';
import { NgbProgressbarModule } from '@ng-bootstrap/ng-bootstrap';

// Components
import { AppComponent } from './app.component';
import { HeaderComponent } from './componentes/header/header.component';
import { HomeComponent } from './componentes/home/home.component';
import { AboutComponent } from './componentes/about/about.component';
import { SkillsComponent } from './componentes/skills/skills.component';
import { QualificationComponent } from './componentes/qualification/qualification.component';
import { ServicesComponent } from './componentes/services/services.component';
import { PortfolioComponent } from './componentes/portfolio/portfolio.component';
import { ProjectComponent } from './componentes/project/project.component';
import { ContactComponent } from './componentes/contact/contact.component';
import { FooterComponent } from './componentes/footer/footer.component';
import { PageNotFoundComponent } from './componentes/page-not-found/page-not-found.component';
import { CVComponent } from './componentes/cv/cv.component';
import { LoginComponent } from './componentes/login/login.component';
import { RegisterComponent } from './componentes/register/register.component';
import { DashboardComponent } from './componentes/dashboard/dashboard.component';
import { PersonComponent } from './componentes/modal/person/person.component';
import { ExperienceComponent } from './componentes/modal/experience/experience.component';
import { PortfolioModalComponent } from './componentes/modal/portfolio/portfolio.component';
import { ServicesModalComponent } from './componentes/modal/services/services.component';
import { SkillGroupComponent } from './componentes/modal/skill-group/skill-group.component';
import { SkillComponent } from './componentes/modal/skill/skill.component';
import { StudiesComponent } from './componentes/modal/studies/studies.component';
import { TaskComponent } from './componentes/modal/task/task.component';
import { JobsComponent } from './componentes/modal/job/job.component';
import { EditPersonComponent } from './componentes/modal/person/edit-person.component';
import { EditExperienceComponent } from './componentes/modal/experience/edit-experience.component';
import { NewExperienceComponent } from './componentes/modal/experience/new-experience.component';
import { NewPortfolioComponent } from './componentes/modal/portfolio/new-portfolio.component';
import { EditPortfolioComponent } from './componentes/modal/portfolio/edit-portfolio.component';
import { EditServicesComponent } from './componentes/modal/services/edit-services.component';
import { NewServicesComponent } from './componentes/modal/services/new-services.component';
import { NewSkillComponent } from './componentes/modal/skill/new-skill.component';
import { EditSkillComponent } from './componentes/modal/skill/edit-skill.component';
import { EditSkillGroupComponent } from './componentes/modal/skill-group/edit-skill-group.component';
import { NewSkillGroupComponent } from './componentes/modal/skill-group/new-skill-group.component';
import { NewStudiesComponent } from './componentes/modal/studies/new-studies.component';
import { EditStudiesComponent } from './componentes/modal/studies/edit-studies.component';
import { EditTaskComponent } from './componentes/modal/task/edit-task.component';
import { NewTaskComponent } from './componentes/modal/task/new-task.component';
import { NewJobsComponent } from './componentes/modal/job/new-job.component';
import { EditJobsComponent } from './componentes/modal/job/edit-job.component';
// Services
import { CargarScriptsService } from './services/cargar-scripts.service';
import { AuthService } from './services/auth.service';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideAuth,getAuth } from '@angular/fire/auth';
import { provideStorage,getStorage } from '@angular/fire/storage';
import { NewPersonComponent } from './componentes/modal/person/new-person.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    AboutComponent,
    SkillsComponent,
    QualificationComponent,
    ServicesComponent,
    PortfolioComponent,
    ProjectComponent,
    ContactComponent,
    FooterComponent,
    LoginComponent,
    PageNotFoundComponent,
    CVComponent,
    RegisterComponent,
    DashboardComponent,
    PersonComponent,
    ExperienceComponent,
    ServicesModalComponent,
    PortfolioModalComponent,
    SkillGroupComponent,
    SkillComponent,
    StudiesComponent,
    TaskComponent,
    JobsComponent,
    EditPersonComponent,
    EditExperienceComponent,
    NewExperienceComponent,
    NewPortfolioComponent,
    EditPortfolioComponent,
    EditServicesComponent,
    NewServicesComponent,
    NewSkillComponent,
    EditSkillComponent,
    EditSkillGroupComponent,
    NewSkillGroupComponent,
    NewStudiesComponent,
    EditStudiesComponent,
    EditTaskComponent,
    NewTaskComponent,
    NewJobsComponent,
    EditJobsComponent,
    NewPersonComponent
  ],
  imports: [
    AppRoutingModule,
    NgbAccordionModule,
    NgbPaginationModule,
    NgbProgressbarModule,
    NgbAlertModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    SwiperModule,
    HttpClientModule,
    RouterModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAuth(() => getAuth()),
    provideStorage(() => getStorage())
],
  providers: [
    CargarScriptsService,
  ],
  bootstrap: [AppComponent],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
})
export class AppModule { }
