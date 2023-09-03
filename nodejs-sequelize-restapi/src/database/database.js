import { Sequelize } from "sequelize";

export const sequelize = new Sequelize(
    'projectsdb',
    'postgres',
    '1225',
     {
        host: 'localhost',
        dialect: 'postgres'
     }
    );