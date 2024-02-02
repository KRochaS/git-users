import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User, Users } from '../models/users';

@Injectable({
    providedIn: 'root'
})
export class UsersService {

    constructor(private httpClient: HttpClient) { }

    getUsers(page: number, since: number = 1): Observable<Users[]> {
        return this.httpClient.get<Users[]>(`https://api.github.com/users?per_page=20&page=${page}&since=${since}`);
    }

    getUser(user: string) {
        return this.httpClient.get<User>(`https://api.github.com/users/${user}`);
    }
}
