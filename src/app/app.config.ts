import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideAnimations } from '@angular/platform-browser/animations';
import { provideRouter } from '@angular/router';
import { LoadingInterceptor } from '@git-users/shared-ui';
import { ToastrModule } from 'ngx-toastr';
import { appRoutes } from './app.routes';


export const appConfig: ApplicationConfig = {
    providers: [
        provideAnimations(),
        importProvidersFrom(
            ToastrModule.forRoot(),
        ),
        provideHttpClient(withInterceptors([LoadingInterceptor])),
        provideRouter(appRoutes)
    ]
};
