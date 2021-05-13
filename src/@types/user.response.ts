import { ApiProperty } from '@nestjs/swagger';

export class UserResponse {
  @ApiProperty()
  id: string;

  @ApiProperty()
  funcionario: string;

  @ApiProperty()
  departamento: string;
  @ApiProperty()
  created_at: Date;
}
