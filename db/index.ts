
import { createConnection } from "typeorm";
import connectionOptions from "./ormConfig";
import { User } from "./entities/User";
import { Spot } from "./entities/Spot"
import { AuthMail } from "./entities/AuthMail"

const dbConnect = () => {
    createConnection(connectionOptions).then(async connection => {
        console.log(" DataBase Connected!");
    }).catch(error => console.log(error));
}

export default dbConnect
