import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { LoadingInterceptor } from '@git-users/shared-ui';
import { appRoutes } from './app.routes';

export const appConfig: ApplicationConfig = {
    providers: [provideRouter(appRoutes), provideHttpClient(withInterceptors([
        LoadingInterceptor
    ]))],
};
