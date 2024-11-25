import { Injectable } from '@nestjs/common';

@Injectable()
export class User {
  id: number;
  name: string;
  email: string;
  password: string;

  constructor(user: Omit<User, 'id'>) {
    Object.assign(this, user);
  }
}
