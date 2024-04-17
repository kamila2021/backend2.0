import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from '../app/user/model/user.model';
export const databaseConfig: TypeOrmModule = {
  type: 'mysql',
  host: 'localhost',
  port: 3307,
  username: 'user_crud',
  password: 'root',
  database: 'msuser',
  entities: [User],
  synchronize: true,
};
