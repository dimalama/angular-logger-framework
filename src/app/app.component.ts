import { Component } from '@angular/core';
import { Logger } from 'src/classes/logger';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'logger-framework-v2';

  constructor(private logger: Logger) {}

  ngOnInit() {
    // @ts-ignore
    window['logger'] = this.logger;

    this.logger.error('Angular YO ERROR!!!!');

    // @ts-ignore
    window.logger.logError('Window JS YO ERROR!!!!');

  }
}
