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
import { CompteRenduService } from './services/compteRendu.service';
import { CompteRenduComponent } from './compteRendu/compteRendu.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    MembersComponent,
    ActivityComponent,
    CompteRenduComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [MembersService, ActivityService, CompteRenduService],
  bootstrap: [AppComponent]
})
export class AppModule { }
