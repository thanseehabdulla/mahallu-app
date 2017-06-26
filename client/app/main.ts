import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app.module';
import {enableProdMode} from '@angular/core';
import { environment } from './environment';

const platform = platformBrowserDynamic();
if (environment.production) {
  enableProdMode();
}

platform.bootstrapModule(AppModule);
