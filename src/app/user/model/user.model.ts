import { IsEmail, Length, Matches } from 'class-validator';
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: false })
  @Length(2, 20)
  @Matches(/^[A-Za-zÀ]+(?: [A-Za-zÀ]+)?$/)
  firstName: string;

  
  @Column({ nullable: false })
  @Length(2, 20)
  @Matches(/^[A-Za-zÀ]+(?:[- ][A-Za-zÀ]+)(?:[- ][A-Za-zÀ]+)?$/)
  lastName: string;

  @Column({ unique: true, nullable: false })
  @IsEmail()
  email: string;

  @Column({ type: 'date', nullable: false }) // Especifica el tipo de columna como 'date'
  birthday: Date;

  @Column({ nullable: false , length: 255})
  password: string;

  @Column({ type: 'boolean', default: false, nullable: false })//true para admin
  isAdmin: boolean;

  @Column({ type: 'boolean', default: true, nullable: false })//false para inactivo (ya no pertenece a empresa)
  isActive: boolean;

  @Column({ nullable: true})
  resetPasswordToken: string;

  @Column({ unique:true, nullable: true})
  token: string;
}
