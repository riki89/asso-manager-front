import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ActivityComponent } from './activity/activity.component';
import { CotisationComponent } from './cotisation/cotisation/cotisation.component';
import { MembersComponent } from './members/members.component';

const routes: Routes = [
  {
    path: "members",
    component: MembersComponent
  },
  {
    path: "activity",
    component: ActivityComponent
  },
  {
    path: "cotisation",
    component: CotisationComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
