import { DataSource } from 'typeorm';
import dotenv from 'dotenv';

dotenv.config({ path: './.env' });

export const appDataSource = new DataSource({
  type: 'mysql',
  host: process.env.MYSQL_HOST || 'localhost',
  port: 3306,
  username: process.env.MYSQL_USER || 'root',
  password: process.env.MYSQL_PASSWORD || '12345',
  database: process.env.MYSQL_DATABASE || 'databaseName',
});