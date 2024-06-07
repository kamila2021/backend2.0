import {
  Controller,
  Post,
  Body,
  HttpStatus,
  HttpCode,
  Get,
  Request,
  UseGuards,
} from '@nestjs/common';
import { AuthService } from '../service/auth.service';
import { LoginDTO } from '../dto/LoginDTO';
import { UserService } from 'src/app/user/service/user.service';
import { AuthGuard } from '../guard/auth.guard';
import { JwtDTO } from '../dto/JwtDTO';

@Controller('auth')
export class AuthController {
  constructor(
    private readonly _auth: AuthService,
    private readonly userService: UserService,
  ) {}

  @HttpCode(HttpStatus.CREATED)
  @Post('login')
  async signIn(@Body() signInDto: LoginDTO) {
    const token = await this._auth.signIn(signInDto.email, signInDto.password);
    return { token }; // Devuelve el token
  }
  @UseGuards(AuthGuard)
  @Get('profile')
  async getProfile(@Request() req: any) {
    const userId = req.user.sub; // Obtener el ID de usuario del token
    return this.userService.findUserById(userId); // Devuelve los datos del usuario
  }
  @Post()
  verifyToken(@Body() jwt: JwtDTO) {
    return this._auth.validateJwt(jwt);
  }
}