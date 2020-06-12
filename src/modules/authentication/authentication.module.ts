import { Module } from '@nestjs/common';
import AuthenticationController from './authentication.controller';
import AuthenticationService from './authentication.service';
import EncryptionService from 'src/modules/encryption/encryption.service';
import { MongooseModule } from '@nestjs/mongoose';
import { User, UserSchema } from 'src/models/user.schema';

@Module({
  imports: [MongooseModule.forFeature([{ name: User.name, schema: UserSchema }])],
  controllers: [AuthenticationController],
  providers: [AuthenticationService, EncryptionService],
})
export class AuthenticationModule {}