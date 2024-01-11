import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { DirectorModule } from './director/director.module';
import { ActoresModule } from './actores/actores.module';
import { MoviesModule } from './movies/movies.module';
import { DirectorRoutingModule } from './director/director-routing.module';
import { ActorRoutingModule } from './actores/actor-routing-module';
import { MoviesRoutingModule } from './movies/movies-routing.module';
import { HttpErrorInterceptorService } from './interceptors/HttpErrorInterceptorService.service';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReviewModule } from './review/review.module';
import { ReviewRoutingModule } from './review/review-routing.module';

@NgModule({
  declarations: [		
    AppComponent,
    HeaderComponent,
    FooterComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DirectorModule,
    HttpClientModule,
    ActoresModule,
    MoviesModule,
    DirectorRoutingModule,
    ActorRoutingModule,
    MoviesRoutingModule,
    ReviewModule,
    ReviewRoutingModule,
    ToastrModule.forRoot({
      timeOut: 5000,
      positionClass: 'toast-bottom-right',
      preventDuplicates: true,
    }),
    BrowserAnimationsModule
   ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: HttpErrorInterceptorService,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
