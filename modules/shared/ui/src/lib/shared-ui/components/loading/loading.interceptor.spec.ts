import { HttpInterceptorFn } from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';

import { LoadingInterceptor } from './loading.interceptor';
import { LoadingService } from './loading.service';




describe('LoadingInterceptor', () => {
    const interceptor: HttpInterceptorFn = LoadingInterceptor;
    let loadingServiceMock: LoadingService;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [HttpClientTestingModule],
            providers: [
                LoadingInterceptor,
                { provide: LoadingService, useValue: loadingServiceMock },
            ],
        });


    });

    it('should be created', () => {
        expect(interceptor).toBeTruthy();
    });
});
