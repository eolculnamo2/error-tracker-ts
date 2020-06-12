import { Controller, Post, Body } from "@nestjs/common";
import AuthenticationService from "./authentication.service";
import RegistrationDto from "src/dto/RegistrationDto";
import LoginDto from "src/dto/LoginDto";

@Controller("/auth")
export default class AuthenticationController {
  constructor(private readonly authenticationService: AuthenticationService) { }

  @Post("/register")
  async createUser(@Body() registrationDto: RegistrationDto) {
    return await this.authenticationService.registerNewUser(registrationDto);
  }

  @Post("/login")
  login(@Body() loginDto: LoginDto) {
    return this.authenticationService.handleLogin(loginDto);
  }
}