import { Entity, PrimaryGeneratedColumn, Column, OneToOne, JoinColumn } from "typeorm";
import { User } from "./User";

@Entity()
export class AuthMail {

    @PrimaryGeneratedColumn()
    id: number;
    
    @Column()
    UEmail: string;

    @Column()
    auth: boolean;

    @OneToOne(type => User)
    @JoinColumn()
    user: User;
}
