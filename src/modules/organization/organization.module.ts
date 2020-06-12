import { Module } from '@nestjs/common';
import OrganizationController from './organization.controller';
import OrganizationService from './organization.service';
import AuthenticationService from '../authentication/authentication.service';
import { MongooseModule } from '@nestjs/mongoose';
import { Organization, OrganizationSchema } from 'src/models/organization.schema';
import { User, UserSchema } from 'src/models/user.schema';
import EncryptionService from '../encryption/encryption.service';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Organization.name, schema: OrganizationSchema }]),
    MongooseModule.forFeature([{ name: User.name, schema: UserSchema }])
  ],
  controllers: [OrganizationController],
  providers: [OrganizationService, AuthenticationService, EncryptionService],
})
export class OrganizationModule {}