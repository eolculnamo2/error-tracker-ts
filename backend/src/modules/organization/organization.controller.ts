import { Controller, Post, Body } from "@nestjs/common";
import NewOrganizationDto from "src/dto/NewOrganizationDto";
import OrganizationService from "./organization.service";

@Controller('/org')
export default class OrganizationController {
  constructor(private readonly organizationService: OrganizationService) {}
 
  @Post()
  async createOrganization(@Body() newOrganizationDto: NewOrganizationDto) {
    await this.organizationService.createNewOrganization(newOrganizationDto);
  }
}