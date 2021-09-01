import { NgZone } from "@angular/core";
import { LogLevel } from "src/enums/log-level";
import { LoggerConfig } from "src/interfaces/logger-config";

export abstract class Logger {
  protected logLevel: LogLevel = LogLevel.OFF;

  protected config: LoggerConfig = {
    logLevel: LogLevel.ERROR,
    serverLoggingUrl: '/api/logs',
    serverLogLevel: LogLevel.ERROR
  };

  private angularZone: NgZone;

  constructor(angularZone: NgZone) {
    this.angularZone = angularZone;
  }

  public abstract error(message: any, ...additional: any): void;

  public writeInLocalStore() {
    console.warn("Writing into local store");
  }

  public logError(msg: string, e: Error): void {
    this.angularZone.run(() => {
      this.error(msg, e)
      this.writeInLocalStore();
    });
  }
}

