import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";
import { Spot } from "./Spot";
import { Trade } from "./Trade";

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
    grade: number;

    @Column({ type: "int", default: 0})
    money: number;

    @OneToMany(type => Trade, trade => trade.GoodsKeeper)
    trades: Trade[];

    @OneToMany(type => Spot, spot => spot.Registrant)
    RegisteredSpot: Spot[];
}
