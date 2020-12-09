import dotenv from "dotenv";

dotenv.config({path: ".env"});

export const PORT = process.env.PORT;

export const ENV_HOSTNAME = process.env.HOST;
export const ENV_USERNAME = process.env.USERNAME;
export const ENV_PASSWORD = process.env.PASSWORD;
export const ENV_DATABASE = process.env.DATABSE;
