import {DataTypes} from "sequelize";
import {sequelize} from "../database/database.js";

export const Projects = sequelize.define('projectos',{
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nombre: {
        type: DataTypes.STRING
    },
    password: {
        type: DataTypes.INTEGER
    },
    apellido: {
        type: DataTypes.CHAR
    },
    dni: {
        type: DataTypes.INTEGER
    },
    domicilio: {
        type: DataTypes.STRING
    },
    genero: {
        type: DataTypes.BOOLEAN
    },

},
{
    timestamps: false
});
