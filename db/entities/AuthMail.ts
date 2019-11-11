import { Entity, PrimaryGeneratedColumn, Column, OneToOne } from "typeorm";
import { User } from "./User";

@Entity()
export class AuthMail {

    @PrimaryGeneratedColumn()
    id: number;
    
    @Column()
    UEmail: string;

    @Column()
    auth: boolean;

    @OneToOne(type => User, user => user.auth)
    user: User;
}
