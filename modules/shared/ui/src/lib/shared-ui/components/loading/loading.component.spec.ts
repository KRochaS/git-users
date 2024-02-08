import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NgxLoadingModule } from 'ngx-loading';
import { LoadingComponent } from './loading.component';

describe('LoadingComponent', () => {
    let component: LoadingComponent;
    let fixture: ComponentFixture<LoadingComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [LoadingComponent],
            imports: [NgxLoadingModule]
        })
            .compileComponents();

        fixture = TestBed.createComponent(LoadingComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
