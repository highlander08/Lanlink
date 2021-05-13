import { ApiProperty } from '@nestjs/swagger';

export class DepartamentoResponse {
  @ApiProperty()
  id: string;

  @ApiProperty()
  departamento: string;

  @ApiProperty()
  created_at: Date;
}
