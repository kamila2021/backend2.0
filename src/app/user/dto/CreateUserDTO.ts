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
  readonly birthday: Date;

  @IsString()
  readonly password: string;
}
