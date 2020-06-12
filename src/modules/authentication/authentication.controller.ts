import { Controller, Post, Body, Response, Request } from "@nestjs/common";
import AuthenticationService from "./authentication.service";
import RegistrationDto from "src/dto/RegistrationDto";
import LoginDto from "src/dto/LoginDto";
import { SetCookies } from '@nestjsplus/cookies';
import AuthConstants from "src/constants/auth-constants";

@Controller("/auth")
export default class AuthenticationController {
  constructor(private readonly authenticationService: AuthenticationService) { }

  @Post("/register")
  async createUser(@Body() registrationDto: RegistrationDto) {
    return await this.authenticationService.registerNewUser(registrationDto);
  }

  @Post("/login")
  @SetCookies()
  login(@Request() req, @Body() loginDto: LoginDto) {
    const cookie1Value = this.authenticationService.generateJwt(loginDto.email, 'organization');
    req._cookies = [
      {
        name: AuthConstants.AUTH_COOKIE,
        value: cookie1Value,
        options: {
          signed: true,
          sameSite: false,
          httpOnly: true,
        },
      },
    ];
    return this.authenticationService.handleLogin(loginDto);
  }
}