import { ApiProperty } from "@nestjs/swagger";

export default class RegistrationDto {
  @ApiProperty()
  readonly email: string;

  @ApiProperty()
  readonly password: string;

  @ApiProperty()
  readonly firstName: string
  
  @ApiProperty()
  readonly lastName: string;
}