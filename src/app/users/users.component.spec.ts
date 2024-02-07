import { HttpClientTestingModule } from '@angular/common/http/testing';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';
import { FormControl } from '@angular/forms';
import { ToastrModule, ToastrService } from 'ngx-toastr';
import { Observable, of } from 'rxjs';
import { mockGetUser, mockGetUsers } from '../mocks/user.mock';
import { UsersService } from '../services/users.service';
import { UsersComponent } from './users.component';



const usersServiceMock: Partial<UsersService> = {
    getUser: jest.fn().mockReturnValue(of(mockGetUser)),
    getUsers: jest.fn().mockReturnValue(of(mockGetUsers))
};

const toastrMock: { error: jest.Mock } = {
    error: jest.fn(),
};


describe('UsersComponent', () => {
    let component: UsersComponent;
    let fixture: ComponentFixture<UsersComponent>;
    const mockUser$ = of(mockGetUser);


    beforeEach(async () => {



        await TestBed.configureTestingModule({
            imports: [UsersComponent, HttpClientTestingModule, ToastrModule.forRoot()],
            providers: [
                { provide: UsersService, useValue: usersServiceMock },
                {
                    provide: UsersComponent, useValue: { user$: mockUser$ },
                },
                { provide: ToastrService, useValue: toastrMock },
            ],
            schemas: [CUSTOM_ELEMENTS_SCHEMA]
        }).compileComponents();

        fixture = TestBed.createComponent(UsersComponent);
        component = fixture.componentInstance;
        component.control = new FormControl();
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });


    it('should call getUsers when text is empty', () => {
        const getUsersSpy = jest.spyOn(component, 'getUsers');

        component.control.setValue('some text');
        expect(getUsersSpy).not.toHaveBeenCalled();

        component.control.setValue('');
        expect(getUsersSpy).toHaveBeenCalledWith(1);
    });

    it('should throw an error message when getUsers has errors', fakeAsync(() => {
        const page = 1;
        (usersServiceMock.getUsers as jest.Mock).mockImplementation(() => {

            return new Observable((observer) => {
                observer.error({ error: { message: 'Error message' } });
            });

        });

        component.getUsers(page);

        tick(400);

        expect(toastrMock.error).toHaveBeenCalledWith(
            'Atualize a página',
            'Ocorreu um erro!'
        );
    }));

    it('should create user$ Observable', fakeAsync(() => {
        const testText = 'test';
        component.control.setValue(testText);

        tick(400);

        expect(usersServiceMock.getUser).toHaveBeenCalledWith(testText);
        expect(component['user$']).toBeDefined();
    }));

    it('should create user$ Observable', fakeAsync(() => {
        const testText = 'test';
        component.control.setValue(testText);

        tick(400);

        expect(usersServiceMock.getUser).toHaveBeenCalledWith(testText);
        expect(component['user$']).toBeDefined();
    }));

    it('should fill users and set isNotFound to false on successful user$ emission', fakeAsync(() => {
        const testText = 'test';


        component.control.setValue(testText);

        tick(400);

        expect(component.user).toEqual(mockGetUser);
        expect(component.isNotFound).toBeFalsy();
    }));

    it('should set isNotFound to true and user to null on error in handleUserRequest', fakeAsync(() => {
        const testText = 'errorCase';

        (usersServiceMock.getUser as jest.Mock).mockImplementation((text: string) => {
            if (text === testText) {
                return new Observable((observer) => {
                    observer.error({ error: { message: 'Not Found' } });
                });
            } else {
                return of(mockGetUser);
            }
        });

        component.control.setValue(testText);

        tick(400);

        expect(component.isNotFound).toBeTruthy();
        expect(component.user).toBeNull();
    }));

    it('should handle error in handleUserRequest', fakeAsync(() => {
        const testText = 'errorCase';
        (usersServiceMock.getUser as jest.Mock).mockImplementation((text: string) => {
            if (text === testText) {
                return new Observable((observer) => {
                    observer.error({ error: { message: 'Error message' } });
                });
            } else {
                return of(mockGetUser);
            }
        });

        component.control.setValue(testText);
        tick(400);

        expect(toastrMock.error).toHaveBeenCalledWith(
            'Ocorreu um erro ao buscar o usuário. Tente novamente',
            'Erro!'
        );
    }));

    it('should call getUsers and update users array onScroll', fakeAsync(() => {

        component.users = mockGetUsers;
        component.page = 0;

        jest.spyOn(component['usersService'], 'getUsers').mockReturnValue(of(mockGetUsers));
        component.onScroll();
        tick(400);

        expect(component['usersService'].getUsers).toHaveBeenCalled();
        expect(component.users).toEqual(mockGetUsers);
    }));

});

