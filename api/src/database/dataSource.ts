import 'reflect-metadata';
import { DataSource } from 'typeorm';
import { User } from './entities/users';
import { Guest } from './entities/guests';

export const AppDataSource = new DataSource({
    type: 'mariadb',
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: 'root',
    database: 'wedding_pass',
    synchronize: false,
    logging: true,
   entities: [User, Guest]
});