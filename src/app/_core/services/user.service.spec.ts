import {TestBed} from '@angular/core/testing';
import {UserService} from "./user.service";
import {HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';
import {Role} from "../models/user";
import {environment} from "../../../environments";


describe('UserService', () => {
  let service: UserService;
  let httpMock: HttpTestingController;
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [UserService]
    });
    service = TestBed.inject(UserService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  it('should return a list of users from the API', () => {
    const mockUsers = [{id: 1, name: 'User 1', roles: [Role.Viewer],}, {id: 2, name: 'User 2', roles: [Role.Viewer],}];
    service.getAll().subscribe(users => {
      expect(users).toEqual(mockUsers);
    });

    const req = httpMock.expectOne(`${environment.apiUrl}/userList`);
    expect(req.request.method).toBe('GET');
    req.flush(mockUsers);
  });


  it('should return a collection of items for a user from the API', () => {
    const mockUser = {
      id: 1,
      name: 'User 1',
      roles: [Role.Viewer],
      collection: [{id: 1, name: 'Collection 1', genre: undefined, releaseDate: undefined, owner: 1}, {
        id: 2,
        name: 'Collection 2',
        genre: undefined,
        releaseDate: undefined,
        owner: 1
      }]
    };
    const mockCollection = [{id: 1, name: 'Collection 1', genre: undefined, releaseDate: undefined, owner: 1}, {
      id: 2,
      name: 'Collection 2',
      genre: undefined,
      releaseDate: undefined,
      owner: 1
    }];
    service.getUserCollection(mockUser.id).subscribe(collection => {
      expect(collection).toEqual(mockCollection);
    });

    const req = httpMock.expectOne(`${environment.apiUrl}/collectionList/1`);
    expect(req.request.method).toBe('GET');
    req.flush(mockCollection);
  });

});
