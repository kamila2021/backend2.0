import { Module } from '@nestjs/common';
import { UserController } from './controller/user.controller';
import { UserService } from './service/user.service';
import { User } from './model/user.model';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports: [TypeOrmModule.forFeature([User]), Repository, JwtModule],
  controllers: [UserController],
  providers: [UserService, Repository, User],
  exports: [UserService],
})
export class UserModule {}
