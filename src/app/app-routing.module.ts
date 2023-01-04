import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ActivityComponent } from './activity/activity.component';
import { CompteRenduComponent } from './compteRendu/compteRendu.component';
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
    path: "compterendu",
    component: CompteRenduComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
