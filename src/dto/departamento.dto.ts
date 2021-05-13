import { ApiProperty } from '@nestjs/swagger';

export class DepartamentoDto {
  @ApiProperty({
    type: String,
  })
  departamento: string;
}
