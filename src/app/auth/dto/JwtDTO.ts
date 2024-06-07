import { IsNotEmpty, IsString } from 'class-validator';

export class JwtDTO {
  @IsString()
  @IsNotEmpty()
  jwt: string;
}
