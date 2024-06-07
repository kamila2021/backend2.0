import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Body,
  Param,
  UseGuards,
  Patch,
} from '@nestjs/common';
import { User } from '../model/user.model';
import { UserService } from '../service/user.service';
import { UpdateUserDTO } from '../dto/UpdateUserDTO';
import { CreateUserDTO } from '../dto/CreateUserDTO';
import { AuthGuard } from 'src/app/auth/guard/auth.guard';
import { Roles } from '../decorators/roles.decorator';
import { RolesGuard } from '../guard/roles.guard';
import { RequestResetPasswordDTO } from '../dto/RequestResetPasswordDTO';
import { ResetPasswordDTO } from '../dto/ResetPasswordDTO';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  /*@Get()
  @Roles('admin')
  @UseGuards(AuthGuard, RolesGuard) // Protect with JWT authentication
  async findAll(): Promise<User[]> {
    return await this.userService.findAllUsers();
  }*/

  @Get(':id')
  @UseGuards(AuthGuard)
  async findOne(@Param('id') id: number): Promise<User> {
    return await this.userService.findUserById(id);
  }

  @Get('email/:email')
  async findByEmail(@Param('email') email: string): Promise<User> {
    return await this.userService.findUserByEmail(email);
  }

  @Post()
  async create(@Body() createUserDto: CreateUserDTO): Promise<User> {
    return await this.userService.createUser(createUserDto);
  }

  @Put('/editar')
  async update(@Body() updateUserDto: UpdateUserDTO
  ): Promise<User> {
    return await this.userService.updateUser(updateUserDto);
  }

  @Delete(':id')
  @UseGuards(AuthGuard) // Require authentication for deletion
  async remove(@Param('id') id: number): Promise<void> {
    return await this.userService.deleteUser(id);
  }

  @Post(':request-reset-password')
  requestResetPassword(
    @Body() requestResetPasswordDto: RequestResetPasswordDTO,
  ) {
    return this.userService.requestResetPassword(requestResetPasswordDto);
  }

  @Post(':reset-password')
  resetPassword(@Body() resetPasswordDto: ResetPasswordDTO){
    return this.userService.resetPassword(resetPasswordDto);
  }



  // Assuming "validate()" in UserService handles authentication/authorization
  // @Post('validate')
  // async validate(): Promise<User | undefined> {
  //   // Implement logic to extract credentials from request (e.g., headers, body)
  //   const credentials = extractCredentialsFromRequest();
  //   return await this.userService.validate(credentials);
  // }
}
