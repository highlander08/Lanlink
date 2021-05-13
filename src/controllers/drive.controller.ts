import { Body, Controller, Get, Param, Post, Put } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Departamento } from 'src/models/departamento.model';
import { Repository } from 'typeorm';
//Depart-Dto
@Controller('drive')
export class UserController {
  constructor(
    @InjectRepository(Departamento)
    private userRepo: Repository<Departamento>,
  ) {}
  //definir
  @Put(':id')
  async update(
    @Param('id') id: string,
    @Body() body: Departamento,
  ): Promise<Departamento> {
    await this.userRepo.findOneOrFail(+id);
    this.userRepo.update({ id: +id }, body);
    return this.userRepo.findOneOrFail(+id);
  }
  @Get()
  async index(): Promise<Departamento[]> {
    return this.userRepo.find();
  }
  //criação de drives
  @Post('/drives')
  async store(
    @Body()
    body: Departamento[],
  ): Promise<Departamento[]> {
    const departamento = this.userRepo.create(body);
    return this.userRepo.save(departamento);
  }
}
