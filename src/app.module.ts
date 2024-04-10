import { Module } from '@nestjs/common';
import { databaseConfig } from './config/database.config';
import { ApiController } from './api.controller';
import { TypeOrmModule } from '@nestjs/typeorm';

import { AuthModule } from './app/auth/auth.module';
import { AuthController } from './app/auth/controller/auth.controller';

import { UserModule } from './app/user/user.module';
import { UserController } from './app/user/controller/user.controller';

import { AuthService } from './app/auth/service/auth.service';
import { UserService } from './app/user/service/user.service';
import { JwtService } from '@nestjs/jwt';
import { User } from './app/user/model/user.model';
import { Repository } from 'typeorm';

@Module({
  imports: [
    TypeOrmModule.forRoot(databaseConfig),
    TypeOrmModule.forFeature([User, Repository]), // Registra UserRepository aquí
    AuthModule,
    UserModule
    ],
  controllers: [ApiController, AuthController, UserController],
  providers: [AuthService, UserService, JwtService, User, Repository], // Asegúrate de incluir UserRepository aquí
})
export class AppModule {}
