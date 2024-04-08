import { ApiProperty } from '@nestjs/swagger';

export class UserInputDto {
  @ApiProperty()
  firstname: string;

  @ApiProperty({ required: false })
  lastname: string;

  @ApiProperty()
  email: string;

  @ApiProperty()
  password: string;

  @ApiProperty({ required: false })
  active: boolean;
}
