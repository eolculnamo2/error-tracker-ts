import { Module } from '@nestjs/common';
import AuthenticationController from './authentication.controller';
import AuthenticationService from './authentication.service';
import EncryptionService from 'src/encryption/encryption.service';

@Module({
  imports: [],
  controllers: [AuthenticationController],
  providers: [AuthenticationService, EncryptionService],
})
export class AuthenticationModule {}