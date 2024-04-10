import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from '../app/user/model/user.model';
export const databaseConfig: TypeOrmModule = {
  type: 'mysql',
  host: 'localhost',
  port: 3306,
  username: 'root',
  password: '',
  database: 'ms1',
  entities: [User],
  synchronize: true,
};
