import { Module } from '@nestjs/common';
import { UserController } from './controller/user.controller';
import { UserService } from './service/user.service';
import { User } from './model/user.model';
import { TypeOrmModule } from '@nestjs/typeorm';
import { JwtService } from '@nestjs/jwt';
import { Repository } from 'typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([User]),Repository],
  controllers: [UserController],
  providers: [JwtService, UserService, Repository, User],
  exports: [UserService],
})
export class UserModule {}
