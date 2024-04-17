import { IsEmail, IsNotEmpty } from "class-validator";

export class resetPasswordDTO {

  @IsEmail()
  @IsNotEmpty()
  email: string;

  token: string;//VER BIEN EL TOKEN DE reset
}