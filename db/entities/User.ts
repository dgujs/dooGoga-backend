import { Entity, PrimaryGeneratedColumn, Column, OneToOne, OneToMany } from "typeorm";
import { AuthMail } from "./AuthMail";
import { Spot } from "./Spot";

@Entity()
export class User {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    password: string;

    @Column()
    name: string;

    @Column()
    age: number;

    @Column()
    studentNum: number;

    @Column()
    major: number;

    @Column()
    phoneNumber: string;

    @Column({ type: "double precision", default: 0 })
    satisFaction: number;

    // @Column("simple-array")
    // dealing: number[];

    @Column({ type: "int", default: 0})
    dealCount: number;

    @Column({ type: "int", default: 0})
    money: number;

    @OneToOne(type => AuthMail, authmail => authmail.user)
    auth: AuthMail;

    @OneToMany(type => Spot, spot => spot.GoodsKeeper)
    dealingSpot: Spot[];
}
