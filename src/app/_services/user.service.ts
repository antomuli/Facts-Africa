import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from '../../environments/environment';
import { User } from '../_models';
import { Buyers } from '../_models/buyers';
import { catchError } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class UserService {
    constructor(private http: HttpClient) { }

    getAll() {
        return this.http.get<User[]>(`${environment.apiUrl}/user/all`);
    }
    getBuyers() {
        return this.http.get<Buyers[]>(`${environment.apiUrl}/user/all`);
    }
    getById(id: number) {
        return this.http.get<User>(`${environment.apiUrl}/user/${id}`);
    }
}