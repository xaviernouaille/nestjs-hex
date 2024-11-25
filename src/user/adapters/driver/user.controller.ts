import { Body, Controller, Inject, Post } from '@nestjs/common';
import { CreateUserDto } from 'src/user/application/dto/create-user.dto';
import { ICreateUser } from 'src/user/domain/ports/input/create-user.interface';

@Controller('user')
export class UserController {
  constructor(
    @Inject('ICreateUser')
    private readonly createUserUseCase: ICreateUser,
  ) {}

  @Post('/')
  async create(@Body() body: CreateUserDto) {
    return this.createUserUseCase.execute(body);
  }
}
