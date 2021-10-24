import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PartnerRoutingModule } from './partner-routing.module';
import { PartnerListComponent } from './partner-list/partner-list.component';
import { PartnerAboutComponent } from './partner-about/partner-about.component';
import { PartnerCardsComponent } from './partner-cards/partner-cards.component';


@NgModule({
  declarations: [
    PartnerListComponent,
    PartnerAboutComponent,
    PartnerCardsComponent
  ],
  imports: [
    CommonModule,
    PartnerRoutingModule
  ],
  exports: [
    PartnerListComponent
  ]
})
export class PartnerModule { }
