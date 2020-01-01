import { AboutComponent } from './about/about.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IndexComponent } from './home/index/index.component';
import { ContactComponent } from './contact/contact.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { EventDetailComponent } from './event-detail/event-detail.component';


const routes: Routes = [
  { path: 'home', component: IndexComponent},
  { path: '', redirectTo: "/home", pathMatch: "full" },
  { path: 'event/:id', component: EventDetailComponent},
  { path: 'contact', component: ContactComponent },
  { path: 'about-us', component: AboutComponent},
  { path: '**', component: NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
