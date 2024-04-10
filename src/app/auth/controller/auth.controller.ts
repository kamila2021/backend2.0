import {
  Controller,
  Post,
  Body,
  HttpStatus,
  HttpCode,
  UseGuards,
  Get,
  Request,
} from '@nestjs/common';
import { AuthService } from '../service/auth.service';
import { Request as ExpressRequest } from 'express';
import { LoginDTO } from '../dto/LoginDTO';

@Controller('auth')
export class AuthController {
  constructor(private readonly _auth: AuthService) { }

  @HttpCode(HttpStatus.OK)
  @Post('login')
  signIn(
    @Body() signInDto: LoginDTO
  ) {
    return this._auth.signIn(signInDto.username, signInDto.password);
  }

  @Get('profile')
  getProfile(@Request() req: ExpressRequest) {
    return req.user;
  }
}
