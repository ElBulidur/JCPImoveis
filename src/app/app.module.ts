import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularMaterialModule } from './angular-material.module';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { OwnerListPageComponent } from './owners/pages/owner-list-page/owner-list-page.component';
import { OwnerFormPageComponent } from './owners/pages/owner-form-page/owner-form-page.component';
import { LeadpageHomePageComponent } from './leadpages/pages/leadpage-home-page/leadpage-home-page.component';
import { PropertyFormPageComponent } from './properties/pages/property-form-page/property-form-page.component';
import { PropertyListPageComponent } from './properties/pages/property-list-page/property-list-page.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { HeaderComponent } from './components/header/header.component';
import { MAT_FORM_FIELD_DEFAULT_OPTIONS } from '@angular/material/form-field';


@NgModule({
  declarations: [
    AppComponent,
    OwnerListPageComponent,
    OwnerFormPageComponent,
    LeadpageHomePageComponent,
    PropertyFormPageComponent,
    PropertyListPageComponent,
    HeaderComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AngularMaterialModule,
    HttpClientModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    FormsModule
  ],
  providers: [{provide: MAT_FORM_FIELD_DEFAULT_OPTIONS, useValue: {appearance: 'fill'}}],
  bootstrap: [AppComponent]
})
export class AppModule { }
