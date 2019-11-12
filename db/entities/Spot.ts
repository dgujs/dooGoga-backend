import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm";
import { User } from "./User";



@Entity()
export class Spot {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    SpotName: string;

    @ManyToOne(type => User, user => user.RegisteredSpot)
    Registrant: User;
}
