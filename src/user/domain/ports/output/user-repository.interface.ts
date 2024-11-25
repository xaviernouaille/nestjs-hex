import { CreateUserDto } from 'src/user/application/dto/create-user.dto';
import { User } from '../../entities/User';

export interface IUserRepository {
  create(body: CreateUserDto): Promise<User>;
  update(): void;
  delete(): void;
  get(): void;
  getAll(): void;
}
