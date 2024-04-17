import { Module } from '@nestjs/common';
import { AuthService } from '../auth/service/auth.service';
import { UserModule } from '../user/user.module';
import { JwtModule, JwtModuleOptions } from '@nestjs/jwt';
import { AuthController } from '../auth/controller/auth.controller';
import { jwtConfig } from 'src/config/jwt.config';

/*const jwtModuleOptions: JwtModuleOptions = {
  secret: jwtConstants.secret,
  signOptions: { expiresIn: '60s' },
};*/

@Module({
  imports: [UserModule, JwtModule.registerAsync({useFactory: () => { 
    console.log(process.env.JWT_SECRET)
    return {global: true, secret: process.env.JWT_SECRET, secretOrPrivateKey: process.env.JWT_SECRET, signOptions: {expiresIn: '60s'}}
  }}),],
  providers: [AuthService],
  controllers: [AuthController],
  exports: [AuthService],
})
export class AuthModule {}

