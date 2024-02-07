import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { InputComponent } from './input.component';

describe('InputComponent', () => {
    let component: InputComponent;
    let fixture: ComponentFixture<InputComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [InputComponent, ReactiveFormsModule,],
        }).compileComponents();

        fixture = TestBed.createComponent(InputComponent);
        component = fixture.componentInstance;
        component.control = new FormControl();
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('should render input element with specified type', () => {
        component.type = 'search';
        fixture.detectChanges();
        const inputElement: HTMLInputElement = fixture.nativeElement.querySelector('input');
        expect(inputElement).toBeTruthy();
        expect(inputElement.type).toBe(component.type);
    });

    it('should set placeholder attribute', () => {
        const placeholder = 'Buscar usuários';
        component.placeholder = placeholder;
        fixture.detectChanges();
        const inputElement: HTMLInputElement = fixture.nativeElement.querySelector('input');
        expect(inputElement.getAttribute('placeholder')).toBe(component.placeholder);
        expect(component.placeholder).toBe(placeholder);
    });

    it('should bind to form control', () => {
        const inputElement: HTMLInputElement = fixture.nativeElement.querySelector('input');
        expect(component.control.value).toBe(null);
        inputElement.value = 'Test Value';
        inputElement.dispatchEvent(new Event('input'));
        expect(component.control.value).toBe('Test Value');
    });
});
