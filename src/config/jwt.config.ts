// import { Injectable } from '@nestjs/common';
// import { JwtService } from '@nestjs/jwt';

// @Injectable()
// export class AuthenticationService {
//   constructor(private jwtService: JwtService) {}

//   async generateToken(userId: string): Promise<string> {
//     const payload = { sub: userId };
//     return this.jwtService.signAsync(payload);
//   }
// }