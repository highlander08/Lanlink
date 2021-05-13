import { ApiProperty } from '@nestjs/swagger';

export class DriveResponse {
  @ApiProperty()
  id: string;

  @ApiProperty()
  funcionario: string;

  @ApiProperty()
  description: string;

  @ApiProperty()
  value: number;
  @ApiProperty()
  created_at: Date;
}
