import RegistrationDto from "./RegistrationDto";

export default class NewOrganizationDto extends RegistrationDto {
  readonly name: string;
  readonly website: string;
}