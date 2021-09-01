import { Injectable, NgZone } from '@angular/core';
import { NGXLogger, CustomNGXLoggerService, NgxLoggerLevel } from 'ngx-logger';
import { Logger } from 'src/classes/logger';

@Injectable({
  providedIn: 'root'
})
export class NgxLoggerService extends Logger {
  private logger: NGXLogger;

  constructor(customLogger: CustomNGXLoggerService, ngZone: NgZone) {
    super(ngZone);
    this.logger = customLogger.create({ level: this.config.logLevel as unknown as NgxLoggerLevel, serverLoggingUrl: this.config.serverLoggingUrl, serverLogLevel: this.config.serverLogLevel as unknown as NgxLoggerLevel});
   }

   public error(message: any, ...additional: any): void {
    this.logger.error(message, ...additional);
  }
}
