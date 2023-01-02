import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { MembersComponent } from './members/members.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ActivityComponent } from './activity/activity.component';
import { MembersService } from './services/members.service';
import { ActivityService } from './services/activity.service';
import { CotisationComponent } from './cotisation/cotisation.component';
import { CotisationsService } from './services/cotisations.service';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    MembersComponent,
    ActivityComponent,
    CotisationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [MembersService, ActivityService, CotisationsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
