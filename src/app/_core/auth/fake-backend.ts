import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpResponse,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HTTP_INTERCEPTORS,
} from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { delay, materialize, dematerialize } from 'rxjs/operators';
import { AuthenticationService } from '../services/authentication.service';

let users = [
  {
    id: 1,
    firstName: 'Malihe',
    lastName: 'Sheidaiefar',
    username: 'sheyda888',
    password: '123',
    roles: ['admin', 'viewer'],
    collection: [
      {
        name: 'Alice in Wonderland',
        genre: 'Adventure',
        releaseDate: new Date(1 / 1 / 2010),
        owner:1,
      },
      {
        name: 'Talk To Me',
        genre: 'Romance',
        releaseDate: new Date(1 / 1 / 2020),
        owner:1,
      },
    ],
  },
  {
    id: 2,
    firstName: 'Tina',
    lastName: 'Smith',
    username: 'tina',
    password: '123',
    roles: ['viewer'],
    collection: [
      {
        name: 'Inception',
        genre: 'Adventure',
        releaseDate: new Date(1 / 1 / 2011),
        owner:2,
      },
      { name: 'Ax', genre: 'Horror', releaseDate: new Date(1 / 1 / 2000),owner:2, }
    ],
  },
];

@Injectable()
export class FakeBackendInterceptor implements HttpInterceptor {
  public currentUser!: any;

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const { url, method, headers, body } = request;

    return handleRoute();

    function handleRoute() {
      switch (true) {
        case url.endsWith('/users/authenticate') && method === 'POST':
          return authenticate();

        case url.endsWith('/userList') && method === 'GET':
          return userList();

        case url.includes('/collectionList') && method === 'GET':
          const urlArr = url.split('/', 5);
          const id = urlArr.pop();
          return id ? collectionList(+id) : next.handle(request);

        default:
          // pass through any requests not handled above
          return next.handle(request);
      }
    }

    // route functions

    function authenticate() {
      const { username, password } = body;
      const user = users.find(
        (x) => x.username === username && x.password === password
      );
      if (!user) return error('Username or password is incorrect');
      return ok({
        ...basicDetails(user),
        token: 'fake-jwt-token',
      });
    }

    // helper functions

    function ok(body?: any) {
      return of(new HttpResponse({ status: 200, body })).pipe(delay(500)); // delay observable to simulate server api call
    }

    function error(message: string) {
      return throwError(() => ({ error: { message } })).pipe(
        materialize(),
        delay(500),
        dematerialize()
      ); // call materialize and dematerialize to ensure delay even if an error is thrown (https://github.com/Reactive-Extensions/RxJS/issues/648);
    }

    function basicDetails(user: any) {
      const { id, username, firstName, lastName, roles } = user;
      return { id, username, firstName, lastName, roles };
    }

    //business functions
    function userList() {
      return ok(users);
    }

    function collectionList(id: number) {
      const user = users.find((x) => x.id === id);
      return ok(user?.collection);
    }
  }
}

export const fakeBackendProvider = {
  // use fake backend in place of Http service for backend-less development
  provide: HTTP_INTERCEPTORS,
  useClass: FakeBackendInterceptor,
  multi: true,
};
