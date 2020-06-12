import { Injectable } from "@nestjs/common";
import * as bcrypt from 'bcrypt';
import * as jwt from 'jsonwebtoken';
import EncryptionService from "src/modules/encryption/encryption.service";
import RegistrationDto from "src/dto/RegistrationDto";
import { InjectModel } from "@nestjs/mongoose";
import { User } from "src/models/user.schema";
import { Model } from "mongoose";
import USER_ROLE from "src/enums/user-roles";
import LoginDto from "src/dto/LoginDto";

// todo: 1) user operations and authentication should be two separate modules
// 2) DAOs might be useful

interface IAuthenticationService {
  registerNewUser: (registrationDto: RegistrationDto) => Promise<User>;
  encryptPassword: (password: string) => Promise<string>;
  handleLogin: (loginDto: LoginDto) => Promise<User>;
  confirmPassword: (passwordAttempt: string, encryptedPw: string) => Promise<boolean>;
}

@Injectable()
export default class AuthenticationService implements IAuthenticationService {
  private readonly SALT_ROUNDS: number = 10;
  private readonly MOVE_ME_TO_ENV: string = 'move_this_to_env!!!!';

  constructor(
    @InjectModel(User.name) private userModel: Model<User>, 
    private readonly encryptionService: EncryptionService) {}

  async registerNewUser({email, password, firstName, lastName}: RegistrationDto): Promise<User> {
    const userObj = {
      email,
      password: await this.encryptPassword(password),
      firstName,
      lastName,
      role: USER_ROLE.DEVELOPER,
    }
    const user = await new this.userModel(userObj);
    return user;
  }

  async confirmPassword(passwordAttempt: string, encryptedPw: string): Promise<boolean> {
    return await bcrypt.compare(passwordAttempt, encryptedPw);
  }

  async handleLogin({ email, password}: LoginDto): Promise<User> {
    const user = await this.userModel.findOne({ email }).exec();
    if (!user) {
      throw Error('User not found!');
    }
    const validPw = await this.confirmPassword(password, user.password);
    if (!validPw) {
      throw Error('Password provided is not valid!');
    }
    return user;
  }

  async encryptPassword(password: string): Promise<string> {
    try {
      const encryptedPw = await bcrypt.hash(password, this.SALT_ROUNDS);
      return encryptedPw;
    } catch(e) {
      throw e;
    }
  }

  generateJwt(email: string, organization: string): string {
    const rawToken =  jwt.sign({
      email,
      organization,
    }, this.MOVE_ME_TO_ENV, { expiresIn: '1h' });
    return this.encryptionService.encrypt(rawToken);
  }

  private async readJwt(token: string): Promise<string> {
    try {
      return await jwt.verify(this.encryptionService.decrypt(token), this.MOVE_ME_TO_ENV);
    } catch (e) {
      throw e;
    }
  }
}