import { ApiProperty } from "@nestjs/swagger";

export default class LoginDto {
  @ApiProperty()
  readonly email: string;
  
  @ApiProperty()
  readonly password: string;
}