import { Sequelize } from "sequelize";

export const sequelize = new Sequelize(
    'db',
    'root',
    '13345877',
     {
        host: 'localhost',
        dialect: 'mysql'
     }
    );