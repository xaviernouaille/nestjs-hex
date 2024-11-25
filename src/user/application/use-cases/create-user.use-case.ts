import { Inject, Injectable } from '@nestjs/common';
import { User } from 'src/user/domain/entities/User';
import { ICreateUser } from 'src/user/domain/ports/input/create-user.interface';
import { IUserRepository } from 'src/user/domain/ports/output/user-repository.interface';
import { CreateUserDto } from '../dto/create-user.dto';

@Injectable()
export class CreateUserUseCase implements ICreateUser {
  constructor(
    @Inject('IUserRepository') private readonly userRepository: IUserRepository,
  ) {}

  async execute(body: CreateUserDto): Promise<User> {
    return this.userRepository.create(body);
  }
}
