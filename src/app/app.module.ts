import { AppRoutingModule } from './app-routing.module';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SwiperModule } from 'swiper/angular';
import { NgModule } from '@angular/core';
import { NgbAccordionModule, NgbPaginationModule, NgbAlertModule, NgbProgressbarModule } from '@ng-bootstrap/ng-bootstrap';
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
// Services
import { CargarScriptsService } from './services/cargar-scripts.service';
import { AuthService } from './services/auth.service';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideAuth,getAuth } from '@angular/fire/auth';
import { provideStorage,getStorage } from '@angular/fire/storage';
import { RegisterComponent } from './componentes/register/register.component';
import { DashboardComponent } from './componentes/dashboard/dashboard.component';
import { PersonComponent } from './componentes/modal/person/person.component';
import { ExperienceComponent } from './componentes/modal/experience/experience/experience.component';
import { SkillGroupComponent } from './componentes/modal/skill-group/skill-group/skill-group.component';
import { SkillComponent } from './componentes/modal/skill/skill/skill.component';
import { StudiesComponent } from './componentes/modal/studies/studies/studies.component';
import { TaskComponent } from './componentes/modal/task/task/task.component';
import { WorkedComponent } from './componentes/modal/worked/worked/worked.component';

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
    SkillGroupComponent,
    SkillComponent,
    StudiesComponent,
    TaskComponent,
    WorkedComponent,
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    NgbAccordionModule,
    NgbPaginationModule,
    NgbAlertModule,
    NgbProgressbarModule,
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
  bootstrap: [AppComponent]
})
export class AppModule { }
