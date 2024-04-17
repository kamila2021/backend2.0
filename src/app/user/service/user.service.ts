import { BadRequestException, Injectable, UnauthorizedException } from '@nestjs/common';
import { User } from '../model/user.model';
import { CreateUserDTO } from '../dto/CreateUserDTO';
import { UpdateUserDTO } from '../dto/UpdateUserDTO';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import * as bcrypt from 'bcrypt';
import { findByEmail } from '../utils/findByEmail';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>
  ) { }

  async findAllUsers(): Promise<User[]> {
    try {
      return await this.userRepository.find();
    } catch (error) {
      return error;
    }
  }

  async findUserById(id: number): Promise<User> {
    try {
      const user = await this.userRepository.findOneBy({
        id: id,
      });
      if (!user) {
        throw new Error('Usuario no encontrado');
      }
      return await user;
    } catch (error) {
      return error;
    }
  }

  async findUserByEmail(email: string): Promise<User> {
    try {
      const user = await this.userRepository.findOneBy({
        email: email
      });
      if (user == null) {
        throw new Error('Usuario no encontrado');
      }
      return await user;
    } catch (error) {
      //console.log({error})
      return error;
    }
  }

  async findUserByIdAndEmail(userData: any): Promise<User> {
    const { id, email } = userData;
    try {
      const user = await this.userRepository.findOneBy({
        id: id,
        email: email
      });
      if (user == null) {
        throw new Error('Usuario no encontrado');
      }
      return await user;
    } catch (error) {
      return error;
    }
  }

  async createUser(createUserDto: CreateUserDTO): Promise<User> {
    const existingUser = await findByEmail( this.userRepository, createUserDto.email);
    //console.log(existingUser);
    if (existingUser) {
      throw new BadRequestException('Email en uso. No se puede crear el usuario.');
    }
    const newUser = new User();
    const salt = await bcrypt.genSalt();
    newUser.password = await bcrypt.hash(createUserDto.password,salt);

    newUser.firstName = createUserDto.firstName;
    newUser.lastName = createUserDto.lastName;
    newUser.email = createUserDto.email;
    newUser.birthday = createUserDto.birthday;
    newUser.isAdmin = createUserDto.isAdmin;

    return await this.userRepository.save(newUser);
  }

  async updateUser(updateUserDto: UpdateUserDTO): Promise<User> {
    const user = await this.findUserById(updateUserDto.id!);
    if (!user) {
      throw new Error('Usuario no encontrado');
    }

    const updatedUser = new User();
    updatedUser.id = updateUserDto.id;
    updatedUser.firstName = updateUserDto.firstName;
    updatedUser.lastName = updateUserDto.lastName;
    updatedUser.email = updateUserDto.email;
    updatedUser.birthday = updateUserDto.birthday;
    updatedUser.password = updateUserDto.password;

    return await this.userRepository.save(updatedUser);
  }

  async deleteUser(id: number): Promise<void> {
    const user = await this.findUserById(id);
    if (!user) {
      throw new Error('Usuario no encontrado');
    }
    await this.userRepository.delete(id);
  }

  async validate(email: string, password: string): Promise<User> {
    const user = await this.findUserByEmail(email);

    if (!user) {
      throw new UnauthorizedException('Usuario no encontrado');
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      throw new UnauthorizedException('Credenciales inválidas');
    }
    return user;
  }
}

