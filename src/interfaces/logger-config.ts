import { LogLevel } from "src/enums/log-level";

export interface LoggerConfig {
  logLevel: LogLevel;
  serverLogLevel?: LogLevel;
  serverLoggingUrl?: string;
  enableSourceMaps?: boolean;
  disableConsoleLogging?: boolean;
}
