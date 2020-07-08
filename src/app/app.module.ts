import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CoreModule } from './core/core.module';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { StoreRouterConnectingModule } from '@ngrx/router-store';
import { IconNavigationComponent } from './components/icon-navigation/icon-navigation.component';
import { StatusStripComponent } from './components/status-strip/status-strip.component';

@NgModule({
  declarations: [
    AppComponent,
    IconNavigationComponent,
    StatusStripComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ReactiveFormsModule,
    StoreRouterConnectingModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
