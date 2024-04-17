// create-user.dto.ts

import { IsDate, IsEmail, IsString } from 'class-validator';

export class CreateUserDTO {
  @IsString()
  readonly firstName: string;

  @IsString()
  readonly lastName: string;

  @IsEmail()
  readonly email: string;

  // @IsDate()
  readonly birthday: Date;//fecha de nacimiento

  @IsString()
  readonly password: string;

  readonly isAdmin: boolean; //verificar esto en controller o service
}
