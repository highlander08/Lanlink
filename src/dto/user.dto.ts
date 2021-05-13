import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';
export class UserDto {
  @ApiProperty({
    type: String,
    description: 'highlander',
  })
  @IsString()
  funcionario: string;

  @ApiProperty()
  @IsString()
  departamento: string;
}
