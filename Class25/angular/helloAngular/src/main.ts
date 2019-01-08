import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));

  // bootstrap == start some thing
  // css framework bootstrap
  // computer science -- booting up or bootstrap
  // modular in nature, modules (grouping your things in to modules)
  // node_modules in browser (webpack or browserify)
