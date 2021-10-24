import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './about-us/about-us.component';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ServiceComponent } from './service/service.component';

const routes: Routes = [{
  path:'', component: HomeComponent,
},
{
  path:'service', component:ServiceComponent,
},
{
  path:'about-us', component:AboutUsComponent,
},
{
  path:'**', component:NotFoundComponent,
},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
