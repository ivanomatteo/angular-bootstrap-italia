import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule, NgbTooltipModule } from '@ng-bootstrap/ng-bootstrap';
import { BiHeaderComponent } from './cmp/bi-header/bi-header.component';
import { NgbtShowcaseComponent } from './cmp/ngbt-showcase/ngbt-showcase.component';
import { ToastGlobalComponent } from './cmp/toast-global/toast-global.component';
import { ToastContainerComponent } from './cmp/toast-container/toast-container.component';

@NgModule({
  declarations: [
    AppComponent,
    BiHeaderComponent,
    NgbtShowcaseComponent,
    ToastGlobalComponent,
    ToastContainerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    NgbTooltipModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
