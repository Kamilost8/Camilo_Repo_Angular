import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PartnerAboutComponent } from './partner-about/partner-about.component';
import { PartnerCardsComponent } from './partner-cards/partner-cards.component';
import { PartnerListComponent } from './partner-list/partner-list.component';

const routes: Routes = [{
  path:'partner', component: PartnerListComponent,
  children:[
    {path: 'about', component: PartnerAboutComponent},
    {path: 'cards', component: PartnerCardsComponent},
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PartnerRoutingModule { }
