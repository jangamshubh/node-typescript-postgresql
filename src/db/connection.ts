import * as dotenv from 'dotenv'
dotenv.config();
import { Sequelize } from "sequelize-typescript";
import { User } from '../models/users.model';

const host = process.env.DB_HOST;
if(!host) {
  throw new Error("Database host is empty");
}

const username = process.env.DB_USERNAME;
if(!username) {
  throw new Error("Database username is empty");
}

const password = process.env.DB_PASSWORD;
if(!password) {
  throw new Error("Database user password is empty");
}

const database = process.env.DB_DATABASE;
if(!database) {
  throw new Error("Database name is empty");
}

const connection = new Sequelize({
  dialect: "postgres",
  host: host,
  username: username,
  password: password,
  database: database,
  models: [User],
});

export default connection;