import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { NavComponent } from './nav/nav.component';

import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { IntroComponent } from './home/intro/intro.component';
import { CaseStudyComponent } from './home/case-study/case-study.component';
import { FeaturedComponent } from './home/featured/featured.component';
import { ContactComponent } from './contact/contact.component';
import { IndexComponent } from './home/index/index.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { EventDetailComponent } from './event-detail/event-detail.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AboutComponent } from './about/about.component';
import { ServicesComponent } from './services/services.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NavComponent,
    IntroComponent,
    CaseStudyComponent,
    FeaturedComponent,
    ContactComponent,
    IndexComponent,
    NotFoundComponent,
    EventDetailComponent,
    AboutComponent,
    ServicesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    AngularFontAwesomeModule,
    FormsModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
