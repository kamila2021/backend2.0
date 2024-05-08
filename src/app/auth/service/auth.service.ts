import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { User } from 'src/app/user/model/user.model';
import { UserService } from 'src/app/user/service/user.service';

@Injectable()
export class AuthService {
  constructor(
    private readonly userService: UserService, // Agrega UserRepository como dependencia
    private readonly jwtService: JwtService,
  ) {}

  async signIn(email: string, password: string): Promise<{ access_token: string }> {
    const user = await this.userService.validateCredentials(email, password);
    if (!user) {
      throw new UnauthorizedException('Invalid credentials');
    }
    const payload = { sub: user.id, email: user.email, role: user.isAdmin };
    const access_token = await this.jwtService.signAsync(payload)
    return {
      access_token,
    };
  }

  async validateJwt(jwt: string): Promise<User | undefined> {//PROBAR ESTE PARA EL GET JWT
    const decoded = this.jwtService.decode(jwt);
    return await this.userService.findUserByIdAndEmail(decoded.sub);
  }

}
