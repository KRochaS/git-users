import { CommonModule } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { CardComponent, CardListComponent, InputComponent, LoadingModule } from '@git-users/shared-ui';
import { EMPTY, Observable, Subject, catchError, debounceTime, filter, retry, switchMap, takeUntil } from 'rxjs';

import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { User, Users } from '../models/users';
import { UsersService } from '../services/users.service';

@Component({
    selector: 'git-users',
    standalone: true,
    imports: [
        CommonModule,
        CardComponent,
        ReactiveFormsModule,
        InputComponent,
        CardComponent,
        CardListComponent,
        LoadingModule,
        InfiniteScrollModule
    ],
    templateUrl: './users.component.html',
    styleUrl: './users.component.scss',
})
export class UsersComponent implements OnInit, OnDestroy {
    public user: User | null = null;
    public control = new FormControl('', { nonNullable: true });
    private user$!: Observable<User>;
    // private users$!: Observable<Users[]>;
    private destroy$ = new Subject<void>();
    public isNotFound: boolean = false;
    public page = 1;
    public users!: Users[];
    public throttle = 0;
    public distance = 2;

    constructor(private usersService: UsersService) { }

    ngOnInit() {
        // this.users$ = this.usersService.getUsers(this.page);
        this.getUsers(this.page);

        this.user$ = this.control.valueChanges.pipe(
            filter(text => text.length > 1),
            debounceTime(400),
            switchMap(text => {
                return this.usersService.getUser(text).pipe(
                    catchError(error => {
                        if (error.error.message === 'Not Found') {
                            this.isNotFound = true;
                            this.user = null;
                        }
                        return EMPTY;
                    })
                );
            }),
            retry()

        )

        this.control.valueChanges.subscribe((text: string) => {
            this.page = 1;
            if (text === '') {
                this.getUsers(this.page);
            }
        });



        this.user$.pipe(
            takeUntil(this.destroy$),
        ).subscribe({
            next: (user: User) => {
                this.isNotFound = false;
                this.user = user;
            }
        });

    }


    public getUsers(page: number): void {
        this.usersService.getUsers(page).subscribe((users: Users[]) => {
            this.users = users;
            this.user = null;
        });
    }

    onScroll(): void {
        const since = this.users[this.users.length - 1].id;
        this.usersService
            .getUsers(++this.page, since)
            .subscribe((users: Users[]) => {
                this.users.push(...users);
            });
    }

    ngOnDestroy(): void {
        this.destroy$.next();
        this.destroy$.complete();
    }
}
