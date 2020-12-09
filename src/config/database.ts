import dotenv from "dotenv";

dotenv.config({path: ".env"});

export = {
    "username": process.env.USERNAME,
    "password": process.env.PASSWORD,
    "database": process.env.DATABSE,
    "host": process.env.HOST,
    "dialect": process.env.DIALECT
};
