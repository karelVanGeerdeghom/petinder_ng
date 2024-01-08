import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { HttpClientModule, provideHttpClient } from "@angular/common/http";
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { InterceptorProvider } from "./app.provider";

export const appConfig: ApplicationConfig = {
  providers: [
    importProvidersFrom(HttpClientModule),
    InterceptorProvider,
    provideRouter(routes),
    provideHttpClient(),
  ]
};
