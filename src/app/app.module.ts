import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

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
import { EditMemberComponent } from './members/edit-member/edit-member.component';
import { MatDialogModule } from '@angular/material/dialog';
import {MatTableModule} from '@angular/material/table';
import {MatCardModule} from '@angular/material/card';
import { ViewMemberComponent } from './members/view-member/view-member.component';
import { ViewTestComponent } from './members/view-test/view-test.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    MembersComponent,
    ActivityComponent,
    CotisationComponent,
    EditMemberComponent,
    ViewMemberComponent,
    ViewTestComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    MatProgressSpinnerModule,
    MatDialogModule,
    MatTableModule,
    MatCardModule
  ],
  providers: [MembersService, ActivityService, CotisationsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
