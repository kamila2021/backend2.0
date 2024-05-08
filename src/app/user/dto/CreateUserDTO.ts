// create-user.dto.ts

import { IsDate, IsEmail, IsNotEmpty, IsString, Length, Matches, MinLength, isNotEmpty } from 'class-validator';

export class CreateUserDTO {
  @IsString()
  @Length(2, 20)
  //@Matches(/^[A-Za-zÀ]+(?: [A-Za-zÀ]+)?$/)
  @IsNotEmpty()
  readonly firstName: string;

  @IsString()
  @Length(2, 20)
  //@Matches(/^[A-Za-zÀ]+(?:[- ][A-Za-zÀ]+)(?:[- ][A-Za-zÀ]+)?$/)
  @IsNotEmpty()
  readonly lastName: string;

  @IsEmail()//revisar si a este habría que ponerle que fuese unico
  @IsNotEmpty()
  readonly email: string;

  //no usamos is Date porque cambia el formato
  readonly birthday: Date;//fecha de nacimiento

  @IsString()
  @MinLength(5)
  readonly password: string;

  readonly isAdmin: boolean; //ver si este habría que cambiarlo o que onda.
  //ver si hay redundancia al poner por ejemplo isEmail y isnotempty
  
}
