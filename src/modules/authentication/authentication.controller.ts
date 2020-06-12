import { Controller, Post, Body, Response, Request } from "@nestjs/common";
import AuthenticationService from "./authentication.service";
import RegistrationDto from "src/dto/RegistrationDto";
import LoginDto from "src/dto/LoginDto";
import { SetCookies } from '@nestjsplus/cookies';

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
        name: 'errors_auth_cookie',
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