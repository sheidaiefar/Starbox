export class User {
  id!: string;
  username?: string;
  password?: string;
  firstName?: string;
  lastName?: string;
  token?: string;
  collection?: Collection[];
  roles: Role[] = [Role.Viewer];
}

export class Collection {
  id?: string;
  name?: string;
  genre?: 'Action' | 'Horror' | 'Romance' | 'Adventure';
  releaseDate?: string;
}

export enum Role {
  Admin = 'admin',
  Viewer = 'viewer',
}
