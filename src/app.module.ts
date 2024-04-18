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
import { JwtModule } from '@nestjs/jwt';
import { User } from './app/user/model/user.model';
import { Repository } from 'typeorm';
import { ConfigModule, ConfigService } from '@nestjs/config';
import baseConfig from './config/baseConfig';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [baseConfig],
    }),
    JwtModule.registerAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: async (configService: ConfigService) => {
        return {
          global: true,
          secret: configService.get<string>('JWT_SECRET'),
          signOptions: {
            expiresIn: configService.get<string>('JWT_EXPIRES_IN'),
          },
        };
      },
    }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: async (configService: ConfigService) => {
        return {
          type: 'mysql',
          host: configService.get<string>('DATABASE_HOST') as string,
          port: configService.get<number>('DATABASE_PORT') as number,
          username: configService.get<string>('DATABASE_USER') as string,
          password: configService.get<string>('DATABASE_PASSWORD') as string,
          database: configService.get<string>('DATABASE_NAME') as string,
          synchronize: configService.get<string>('DATABASE_SYNC') === 'true',
          ssl: configService.get<string>('DATABASE_SSL') === 'true',
          entities: [User],
        };
      },
    }),
    TypeOrmModule.forFeature([User, Repository]), // Registra UserRepository aquí
    AuthModule,
    UserModule,
  ],
  controllers: [ApiController, AuthController, UserController],
  providers: [AuthService, UserService, User, Repository], // Asegúrate de incluir UserRepository aquí
})
export class AppModule {}
