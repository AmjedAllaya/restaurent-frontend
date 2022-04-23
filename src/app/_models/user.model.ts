export interface IUser {
  id?: number;
  email?: string;
  username?: string;
  password?: string;
  role?: string;
}

export class User implements IUser {
  constructor(
    public id?: number,
    public email?: string,
    public username?: string,
    public password?: string,
    public role?: string
  ) {}
}