import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';





import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './componentes/nav/nav.component';
import { BannerComponent } from './componentes/banner/banner.component';
import { AboutComponent } from './componentes/about/about.component';
import { SkillsComponent } from './componentes/skills/skills.component';
import { ExperienciaComponent } from './componentes/experiencia/experiencia.component';
import { PortfolioComponent } from './componentes/portfolio/portfolio.component';
import { SocialComponent } from './componentes/social/social.component';
import { EducacionComponent } from './componentes/educacion/educacion.component';
import { FormComponent } from './componentes/form/form.component';
import { FooterComponent } from './componentes/footer/footer.component';
import { LoaderComponent } from './componentes/loader/loader.component';


@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    BannerComponent,
    AboutComponent,
    SkillsComponent,
    ExperienciaComponent,
    PortfolioComponent,
    SocialComponent,
    EducacionComponent,
    FormComponent,
    FooterComponent,
    LoaderComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
