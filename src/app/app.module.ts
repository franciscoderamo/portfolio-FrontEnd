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
import { ProfileComponent } from './componentes/profile/profile.component';
// Services
import { CargarScriptsService } from './servicios/cargar-scripts.service';
import { AuthService } from './servicios/auth.service'

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
    ProfileComponent
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
    RouterModule
],
  providers: [
    CargarScriptsService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
