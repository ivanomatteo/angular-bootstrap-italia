import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule, NgbTooltipModule } from '@ng-bootstrap/ng-bootstrap';
import { BiHeaderComponent } from './cmp/bi-header/bi-header.component';
import { NgbtShowcaseComponent } from './cmp/ngbt-showcase/ngbt-showcase.component';
import { NgbtToastExampleComponent } from './cmp/ngbt-toast-example/ngbt-toast-example.component';
import { NgbtToastContainerComponent } from './cmp/ngbt-toast-container/ngbt-toast-container.component';
import { BiFormExampleComponent } from './cmp/bi-form-example/bi-form-example.component';

@NgModule({
  declarations: [
    AppComponent,
    BiHeaderComponent,
    NgbtShowcaseComponent,
    NgbtToastExampleComponent,
    NgbtToastContainerComponent,
    BiFormExampleComponent
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
