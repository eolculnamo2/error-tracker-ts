import { ApiProperty } from "@nestjs/swagger";
import { IsString } from "class-validator";

export default class RegistrationDto {
  @ApiProperty({ required: true })
  @IsString()
  readonly email: string;

  @ApiProperty({ required: true })
  @IsString()
  readonly password: string;

  @ApiProperty({ required: true })
  @IsString()
  readonly firstName: string
  
  @ApiProperty({ required: true })
  @IsString()
  readonly lastName: string;
}