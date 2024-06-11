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
  HttpCode,
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

  @Get('list')
  @UseGuards(AuthGuard)
  async findAllUsers(): Promise<User[]> {
    try {
      return await this.userService.findAllUsers();
    } catch (error) {
      // Manejar errores aquí si es necesario
      throw new Error('Error al obtener todos los usuarios');
    }
  }

  @Get('email')
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
  @Post('find')
  async findUserByIdAndEmail(@Body() userData: { id: number, email: string }): Promise<User> {
    try {
      const user = await this.userService.findUserByIdAndEmail(userData);
      if (!user) {
        throw new Error('Usuario no encontrado');
      }
      return user;
    } catch (error) {
      throw new Error('Error al buscar usuario por ID y correo electrónico');
    }
  



  // Assuming "validate()" in UserService handles authentication/authorization
  // @Post('validate')
  // async validate(): Promise<User | undefined> {
  //   // Implement logic to extract credentials from request (e.g., headers, body)
  //   const credentials = extractCredentialsFromRequest();
  //   return await this.userService.validate(credentials);
  // }
}
}
