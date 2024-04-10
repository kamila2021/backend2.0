// create-user.dto.ts

import { IsDate, IsEmail, IsNumber, IsString } from 'class-validator';

export class UpdateUserDTO {

  @IsNumber()
  readonly id: number;

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
