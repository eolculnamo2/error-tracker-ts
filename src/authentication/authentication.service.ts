import { Injectable } from "@nestjs/common";
import * as bcrypt from 'bcrypt';
import * as jwt from 'jsonwebtoken';
import EncryptionService from "src/encryption/encryption.service";

interface IAuthenticationService {
  encryptPassword: (password: string) => Promise<string>;
  confirmPassword: (passwordAttempt: string, encryptedPw: string) => Promise<boolean>;
}

@Injectable()
export default class AuthenticationService implements IAuthenticationService {
  private readonly SALT_ROUNDS: number = 10;

  constructor(private readonly encryptionService: EncryptionService) {}

  async encryptPassword(password: string): Promise<string> {
    try {
      const encryptedPw = await bcrypt.hash(password, this.SALT_ROUNDS);
      return encryptedPw;
    } catch(e) {
      throw e;
    }
  }

  async confirmPassword(passwordAttempt: string, encryptedPw: string): Promise<boolean> {
    return await bcrypt.compare(passwordAttempt, encryptedPw);
  }

  handleLogin() {
    return this.encryptionService.encrypt("test");
  }
}