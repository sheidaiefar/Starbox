export class User {
  id?: string;
  username?: string;
  password?: string;
  firstName?: string;
  lastName?: string;
  token?: string;
  folders?: Folder[];
}

export class Folder {
  id?: string;
  name?: string;
  genre?: 'Action' | 'Horror' | 'Romance' | 'Adventure';
  releaseDate?: string;
}
