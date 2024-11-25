import { CreateUserDto } from 'src/user/application/dto/create-user.dto';

export interface ICreateUser {
  execute(body: CreateUserDto): void;
}
