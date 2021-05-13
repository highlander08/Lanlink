import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';
export class UserDto {
  @ApiProperty()
  @IsString()
  funcionario: string;

  @ApiProperty()
  @IsString()
  departamento: string;

  @ApiProperty()
  value: number;
}
