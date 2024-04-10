import { Module } from '@nestjs/common';
import { AuthService } from '../auth/service/auth.service';
import { UserModule } from '../user/user.module';
import { JwtModule, JwtModuleOptions } from '@nestjs/jwt';
import { AuthController } from '../auth/controller/auth.controller';
import { jwtConstants } from '../../utils/constants';

const jwtModuleOptions: JwtModuleOptions = {
  secret: jwtConstants.secret,
  signOptions: { expiresIn: '60s' },
};

@Module({
  imports: [UserModule, JwtModule.register(jwtModuleOptions)],
  providers: [
    AuthService,
    {
      provide: 'JWT_SECRET',
      useValue: jwtConstants.secret,
    },
  ],
  controllers: [AuthController],
  exports: [AuthService],
})
export class AuthModule {}

