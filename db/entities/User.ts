import { Entity, PrimaryGeneratedColumn, Column, Double } from "typeorm";

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

    @Column()
    satisFaction: Double;

    @Column("simple-array")
    dealing : number[];

    @Column()
    dealCount: number;

    @Column()
    money : number;
}
