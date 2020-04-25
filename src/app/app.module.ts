import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { PetRegisterComponent } from './pet/pet-register/pet-register.component';
import { PetAdoptComponent } from './pet/pet-adopt/pet-adopt.component';
import { PetLostComponent } from './pet/pet-lost/pet-lost.component';
import { PetFoundComponent } from './pet/pet-found/pet-found.component';
import { ContactUsComponent } from './home/contact-us/contact-us.component';
import { AboutUsComponent } from './home/about-us/about-us.component';
import { DayCareComponent } from './recommendation/day-care/day-care.component';
import { GroomingCenterComponent } from './recommendation/grooming-center/grooming-center.component';
import { VetCareComponent } from './recommendation/vet-care/vet-care.component';
import { AmimalShelterComponent } from './home/amimal-shelter/amimal-shelter.component';
import { VolunteerComponent } from './home/volunteer/volunteer.component';
import { WelcomeComponent } from './home/welcome/welcome.component';
import { MenuComponent } from './home/menu/menu.component';


@NgModule({
  declarations: [
    AppComponent,
    PetRegisterComponent,
    PetAdoptComponent,
    PetLostComponent,
    PetFoundComponent,
    ContactUsComponent,
    AboutUsComponent,
    DayCareComponent,
    GroomingCenterComponent,
    VetCareComponent,
    AmimalShelterComponent,
    VolunteerComponent,
    WelcomeComponent,
    MenuComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      { path: 'Welcome', component: WelcomeComponent },

      { path: 'PetRegister', component: PetRegisterComponent },
      { path: 'PetAdopt', component: PetAdoptComponent },
      { path: 'PetLost', component: PetLostComponent },
      { path: 'PetFound', component: PetFoundComponent },

      { path: 'ContactUs', component: ContactUsComponent },
      { path: 'AboutUs', component: AboutUsComponent },

      { path: 'DayCare', component: DayCareComponent },
      { path: 'GroomingCenter', component: GroomingCenterComponent },
      { path: 'VetCare', component: VetCareComponent },

      { path: 'AmimalShelter', component:     AmimalShelterComponent },
      { path: 'Volunteer', component: VolunteerComponent },

      { path: '', redirectTo: 'Welcome', pathMatch: 'full' },
      { path: '**', redirectTo: 'Welcome', pathMatch: 'full' }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
