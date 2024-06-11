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
  
    // Obtener el rol del usuario (asumiendo que está almacenado en el objeto del usuario)
    const role = user.isAdmin; // Asegúrate de ajustar esto según cómo esté almacenado el rol en el objeto del usuario
  
    // Crear el payload del token incluyendo el rol
    const payload = { sub: user.id, email: user.email, role: role };
  
    // Firmar el token con el payload
    return {
      token: this.jwtService.sign(payload),
    };
  }

  async validateJwt(
    data: JwtDTO,
  ): Promise<{ userId: number; isAdmin: boolean }> {
    try {
      const decoded = await this.jwtService.verifyAsync(data.jwt);
      console.log("decoded: ")
      console.log(decoded);
      
      // Verificamos si el campo 'role' está presente y si su valor es '1'
      const isAdmin = decoded.role;
  
      return { userId: decoded.sub, isAdmin: isAdmin};
    } catch (error) {
      console.log('Hubo un error al validar el token:');
      console.log(data.jwt);
      throw new UnauthorizedException('Token inválido');
    }
  }
  
}
