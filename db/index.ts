
import { createConnection } from "typeorm";
import connectionOptions from "./ormConfig";
import { User } from "./entities/User";
import { Spot } from "./entities/Spot"
import { AuthMail } from "./entities/AuthMail"

const dbConnect = () => {
    createConnection(connectionOptions).then(async connection => {

        // const test_user = new User();
        // const test_spot = new Spot();
        // const test_auth = new AuthMail();

        // await connection.manager.save(test_user);

        // await connection.manager.save(test_spot);

        // await connection.manager.save(test_auth);
    }).catch(error => console.log(error));
}

export default dbConnect
