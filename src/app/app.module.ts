import { DatePipe } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Logger } from 'src/classes/logger';
import { NgxLoggerService } from 'src/services/ngx-logger.service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [
    DatePipe,
    {provide: Logger, useClass: NgxLoggerService}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
