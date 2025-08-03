import { ApplicationConfig, provideBrowserGlobalErrorListeners, provideZonelessChangeDetection } from '@angular/core';
import { importProvidersFrom } from '@angular/core';
import { RouterModule } from '@angular/router';
import { provideClientHydration, withEventReplay } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZonelessChangeDetection(),
    importProvidersFrom(AppRoutingModule),
    provideClientHydration(withEventReplay())
  ]
};
