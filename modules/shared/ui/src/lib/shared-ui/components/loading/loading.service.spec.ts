import { TestBed } from '@angular/core/testing';

import { LoadingService } from './loading.service';

describe('LoadingService', () => {
    let service: LoadingService;

    beforeEach(() => {
        TestBed.configureTestingModule({});
        service = TestBed.inject(LoadingService);
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });


    it('should show loading', () => {
        let isLoading: boolean | undefined;

        service.isLoading.subscribe((value) => {
            isLoading = value;
        });

        service.show();

        expect(isLoading).toBe(true);
    });

    it('should hide loading', () => {
        let isLoading: boolean | undefined;

        service.isLoading.subscribe((value) => {
            isLoading = value;
        });


        service.hide();
        expect(isLoading).toBe(false);
    });
});
