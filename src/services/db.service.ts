import { Sequelize } from "sequelize-typescript";
import { ENV_HOSTNAME, ENV_DATABASE, ENV_USERNAME, ENV_PASSWORD } from "../utils/secrets.util";
import { QueryOptions } from "sequelize";
import { User } from "../models/user.model";

class DBService {
    private _sequelize: Sequelize;

    private constructor() {
        this._sequelize = new Sequelize({
            dialect: "mysql",
            host: ENV_HOSTNAME,
            database: ENV_DATABASE,
            username: ENV_USERNAME,
            password: ENV_PASSWORD,
            logging: true,
        });

        this._sequelize.addModels([
            User
        ]);
    }

    static getInstance(): DBService {
        return new DBService();
    }

    getSequelize(): Sequelize {
        return this._sequelize;
    }

    async rawQuery(sql: string | { query: string, values: any[] }, options?: QueryOptions): Promise<any> {
        return this._sequelize.query(sql, options);
    }
}

export const dbService = DBService.getInstance();
