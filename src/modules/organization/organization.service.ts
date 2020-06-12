import { Injectable } from "@nestjs/common";
import AuthenticationService from "../authentication/authentication.service";
import NewOrganizationDto from "src/dto/NewOrganizationDto";
import { InjectModel } from "@nestjs/mongoose";
import { Organization } from "src/models/organization.schema";
import { Model } from "mongoose";
import { User } from "src/models/user.schema";
import USER_ROLE from "src/enums/user-roles";
import OrganizationObject from "src/objects/OrganizationObject";


interface IOrganizationService {
  createNewOrganization: (organizationDto: NewOrganizationDto) => Promise<void>;

}

@Injectable()
export default class OrganizationService {
  constructor(
    @InjectModel(Organization.name) private organizationModel: Model<Organization>,
    @InjectModel(User.name) private userModel: Model<User>, 
    private readonly authenticationService: AuthenticationService
  ) {}

  async createNewOrganization(organizationDto: NewOrganizationDto) {
    // TODO Need a better way to think about this... What happens when user saves but 
    // newOrg fails to save? Would not be suitable for real world scenario.. Could
    // manually delete user, but it does not appear tha this is how mongodb is intended 
    // to be used
    const organization = this.buildOrgSchemaFromDto(organizationDto);
    const newOrg = new this.organizationModel(organization);
    const user = await this.createAdminUser(organizationDto);
    newOrg.users.push(user);
    await newOrg.save();
  }

  async findOrganizationById(id: number): Promise<Organization> {
    return await this.organizationModel.findById(id).exec();
  };

  private buildOrgSchemaFromDto({ name, website }: NewOrganizationDto): OrganizationObject {
    const org = {
      name,
      website,
      users: [],
      errorList: [],
    }
    return org;
  }

  private async createAdminUser({email, password, firstName, lastName }: NewOrganizationDto): Promise<User> {
    const adminUserObj = {
      email,
      password: await this.authenticationService.encryptPassword(password),
      firstName,
      lastName,
      role: USER_ROLE.ADMIN,
    }

    const adminUser = new this.userModel(adminUserObj);
    return await adminUser.save();
  }
}