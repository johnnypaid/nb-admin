import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PublicModule } from './public/public.module';
import { SecureModule } from './secure/secure.module';
import { CredentialInterceptor } from './interceptors/credential.interceptor';
import { AuthService } from './services/auth.service';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PublicModule,
    SecureModule,
    HttpClientModule,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: CredentialInterceptor,
      multi: true,
    },
    AuthService,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
