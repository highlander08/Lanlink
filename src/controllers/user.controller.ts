import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  Param,
  Post,
  Put,
  ValidationPipe,
} from '@nestjs/common';
import { ApiCreatedResponse, ApiOkResponse } from '@nestjs/swagger';
import { InjectRepository } from '@nestjs/typeorm';
import { UserResponse } from 'src/@types/user.response';
import { UserDto } from 'src/dto/user.dto';
import { User } from 'src/models/user.model';
import { Repository } from 'typeorm';
//
@Controller('users')
export class UserController {
  constructor(
    @InjectRepository(User)
    private userRepo: Repository<User>,
  ) {}
  //buscar
  @Get()
  async index(): Promise<User[]> {
    return this.userRepo.find();
  }
  //buscar pelo id
  @ApiOkResponse({
    type: UserResponse,
  })
  @Get(':id')
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  show(@Param('id') id: string): Promise<User> {
    return this.userRepo.findOneOrFail();
  }
  //cria o usario: funcionario + departamento
  @ApiCreatedResponse({
    type: UserResponse,
  })
  @Post('/users')
  async store(
    @Body(
      new ValidationPipe({
        errorHttpStatusCode: 422,
      }),
    )
    body: UserDto,
  ): Promise<User> {
    const user = this.userRepo.create(body);
    return this.userRepo.save(user);
  }

  //editar
  @Put(':id')
  async update(@Param('id') id: string, @Body() body: User): Promise<User> {
    await this.userRepo.findOneOrFail(+id);
    this.userRepo.update({ id: +id }, body);
    return this.userRepo.findOneOrFail(+id);
  }
  //deletar
  @Delete(':id')
  @HttpCode(204)
  async destroy(@Param('id') id: string): Promise<void> {
    await this.userRepo.findOneOrFail(+id);
    this.userRepo.delete(id);
  }
}
