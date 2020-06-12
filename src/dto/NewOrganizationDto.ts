import RegistrationDto from "./RegistrationDto";
import { ApiProperty } from "@nestjs/swagger";

export default class NewOrganizationDto extends RegistrationDto {
  @ApiProperty()
  readonly name: string;
  
  @ApiProperty()
  readonly website: string;
}