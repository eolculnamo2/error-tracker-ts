import RegistrationDto from "./RegistrationDto";
import { ApiProperty } from "@nestjs/swagger";
import { IsString } from 'class-validator';

export default class NewOrganizationDto extends RegistrationDto {
  @ApiProperty({ required: true })
  @IsString()
  readonly name: string;
  
  @ApiProperty({ required: true })
  @IsString()
  readonly website: string;
}