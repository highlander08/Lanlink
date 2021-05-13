import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UserDto } from 'src/dto/user.dto';
import { User } from 'src/models/user.model';
import { Repository } from 'typeorm';
//
@Controller('departamento')
export class UserController {
  constructor(
    @InjectRepository(User)
    private userRepo: Repository<User>,
  ) {}

  //cria o usario:  departamento
  @Post('/departamentos')
  async store(
    @Body()
    body: UserDto,
  ): Promise<User> {
    const user = this.userRepo.create(body);
    return this.userRepo.save(user);
  }
  //pesquisar departamento criado
  @Get(':id')
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  show(@Param('id') id: string): Promise<User> {
    return this.userRepo.findOneOrFail();
  }
}
