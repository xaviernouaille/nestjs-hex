import { Injectable } from '@nestjs/common';
import { CreateUserDto } from 'src/user/application/dto/create-user.dto';
import { User } from 'src/user/domain/entities/User';
import { IUserRepository } from 'src/user/domain/ports/output/user-repository.interface';

@Injectable()
export class UserRepository implements IUserRepository {
  async create(body: CreateUserDto): Promise<User> {
    return new User(body);
  }
  update(): void {
    console.log('Updating user...');
  }
  delete(): void {
    console.log('Deleting user...');
  }
  get(): void {
    console.log('Getting user...');
  }
  getAll(): void {
    console.log('Getting all users...');
  }
}
