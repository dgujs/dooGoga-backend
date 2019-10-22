import "dotenv/config"

import { ConnectionOptions } from "typeorm"

const connectionOptions: ConnectionOptions = {
    type: "postgres",
    database: process.env.DB_NAME || "",
    synchronize: true,
    logging: true,
    entities: ["entities/*.*"],
    host: process.env.DB_ENDPOINT || "localhost",
    port: Number(process.env.DB_PORT),
    username: process.env.DB_USERNAME || "",
    password: process.env.DB_PASSWORD || ""
}

export default connectionOptions