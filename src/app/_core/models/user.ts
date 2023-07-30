export class User {
  id!: number;
  username?: string;
  password?: string;
  firstName?: string;
  lastName?: string;
  token?: string;
  collection?: Collection[];
  roles: Role[] = [Role.Viewer];
}

export class Collection {
  id?: number;
  name?: string;
  genre?: 'Action' | 'Horror' | 'Romance' | 'Adventure';
  releaseDate?: string;
  owner!:number // user.id
}

export enum Role {
  Admin = 'admin',
  Viewer = 'viewer',
}
