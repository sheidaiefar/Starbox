import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Collection, User } from '../models/user';
import { environment } from 'src/environments';

@Injectable({ providedIn: 'root' })
export class UserService {
  constructor(private http: HttpClient) {}

  getAll() {
    return this.http.get<User[]>(`${environment.apiUrl}/userList`);
  }

  getUserCollection(id: number) {
    return this.http.get<Collection[] | null>(
      `${environment.apiUrl}/collectionList/${id}`
    );
  }
}
