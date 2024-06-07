import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { User } from 'src/app/user/model/user.model';
import { UserService } from 'src/app/user/service/user.service';
import { JwtDTO } from '../dto/JwtDTO';

@Injectable()
export class AuthService {
  constructor(
    private readonly userService: UserService, // Agrega UserRepository como dependencia
    private readonly jwtService: JwtService,
  ) {}

  async signIn(email: string, password: string) {
    const user = await this.userService.validateCredentials(email, password);

    if (!user) {
      throw new UnauthorizedException('Credenciales inválidas');
    }

    const payload = { sub: user.id, email: user.email };
    return {
      token: this.jwtService.sign(payload),
    };
  }

  async validateJwt(
    data: JwtDTO,
  ): Promise<{ userId: number; isAdmin: boolean }> {
    try {
      const decoded = await this.jwtService.verifyAsync(data.jwt);
      console.log(decoded.role);
      return { userId: decoded.sub, isAdmin: decoded.role }; // retorna id y rol en caso de ser válido el token
    } catch (error) {
      console.log('hubo error');
      console.log(data.jwt);
      throw new UnauthorizedException('Invalid token'); // caso token no válido
    }
  }
}
