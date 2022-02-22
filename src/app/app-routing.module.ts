import { PropertyFormPageComponent } from './properties/pages/property-form-page/property-form-page.component';
import { PropertyListPageComponent } from './properties/pages/property-list-page/property-list-page.component';
import { LeadpageHomePageComponent } from './leadpages/pages/leadpage-home-page/leadpage-home-page.component';
import { OwnerFormPageComponent } from './owners/pages/owner-form-page/owner-form-page.component';
import { OwnerListPageComponent } from './owners/pages/owner-list-page/owner-list-page.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: LeadpageHomePageComponent,
  },
  {
    path: 'owners',
    component: OwnerListPageComponent,
  },
  {
    path: 'owners/new',
    component: OwnerFormPageComponent,
  },
  {
    path: 'owners/edit/:id',
    component: OwnerFormPageComponent,
  },
  {
    path: 'properties',
    component: PropertyListPageComponent,
  },
  {
    path: 'properties/new',
    component: PropertyFormPageComponent,
  },
  {
    path: 'properties/edit/:id',
    component: PropertyFormPageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
