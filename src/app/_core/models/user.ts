export class User {
  id?: string;
  username?: string;
  password?: string;
  firstName?: string;
  lastName?: string;
  token?: string;
  collection?: Collection[];
}

export class Collection {
  id?: string;
  name?: string;
  genre?: 'Action' | 'Horror' | 'Romance' | 'Adventure';
  releaseDate?: string;
}
