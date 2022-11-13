import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import { AppComponent } from './app.component';
import {CookieService} from "ngx-cookie-service";
import {InjectSessionInterceptor} from "@core/interceptors/inject-session.interceptor";

@NgModule({
  declarations: [ // TODO: Declarations, components, routes, pipes
    AppComponent
  ],
  imports: [ // TODO: Only Module imports
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    CookieService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: InjectSessionInterceptor,
      multi: true
    }

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
