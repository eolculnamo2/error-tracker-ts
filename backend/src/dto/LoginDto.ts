import { IsString } from 'class-validator';
import { ApiProperty } from "@nestjs/swagger";

export default class LoginDto {
  @ApiProperty({ required: true })
  @IsString()
  readonly email: string;

  @ApiProperty({ required: true })
  @IsString()
  readonly password: string;
}