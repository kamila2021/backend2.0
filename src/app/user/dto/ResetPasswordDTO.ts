import { IsEmail, IsNotEmpty, IsString, MinLength } from "class-validator";

export class ResetPasswordDTO {

  @IsNotEmpty()
  @IsString()
  resetCode: string;

  @IsNotEmpty()
  @IsString()
  @MinLength(5)
  newPassword: string

  @IsNotEmpty()
  @IsEmail()
  email: string
}