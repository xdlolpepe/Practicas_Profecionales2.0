import {DataTypes} from "sequelize";
import {sequelize} from "../database/database.js";

export const Projects = sequelize.define('projects',{
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: DataTypes.STRING
    },
    apellido:{
        type: DataTypes.STRING
    },
    dni:{
        type: DataTypes.INTEGER
    },
    direccion:{
        type: DataTypes.STRING
    },
    password: {
        type: DataTypes.INTEGER
    },
    genero:{
        type: DataTypes.BOOLEAN
    },
    


},
{
    timestamps: true
});
