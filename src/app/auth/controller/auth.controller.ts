import {
  Controller,
  Post,
  Body,
  HttpStatus,
  HttpCode,
  Get,
  Request,
  UseGuards,
  UnauthorizedException,
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
  
  @Get('profile')
  async getProfile(@Request() req: any) {
    try {
      const token = req.headers.authorization.split(' ')[1]; // Extrae el token JWT del encabezado de la solicitud
      const user = await this._auth.validateJwt({ jwt: token }); // Valida el token utilizando tu servicio de autenticación personalizado
      console.log(user); // Aquí puedes verificar los datos del usuario

      // Utiliza el ID del usuario para buscar y devolver su perfil
      return this.userService.findUserById(user.userId); // Devuelve los datos del usuario
    } catch (error) {
      throw new UnauthorizedException('Token no válido'); // Si el token no es válido, lanza una excepción de no autorizado
    }
  }

  @Post()
  verifyToken(@Body() jwt: JwtDTO) {
    return this._auth.validateJwt(jwt);
  }
}