import { Module } from '@nestjs/common';
import { AuthService } from '../auth/service/auth.service';
import { UserModule } from '../user/user.module';
import { AuthController } from '../auth/controller/auth.controller';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports: [UserModule, JwtModule],
  providers: [AuthService],
  controllers: [AuthController],
  exports: [AuthService],
})
export class AuthModule {}
