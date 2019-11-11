import { Entity, PrimaryGeneratedColumn, Column, OneToMany, ManyToOne } from "typeorm";
import { User } from "./User";

export enum StatusCase{
    WAITING = "WAITING",
    MATCHED = "MATCHED"
}

@Entity()
export class Spot {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    SpotName: string;

    @Column()
    SpotLocation: string;

    @Column()
    possibleTime: string;

    @Column()
    Goods: string;

    @Column()
    GoodsOwner: number;

    // @Column()
    // GoodsKeeper: number;

    @Column({
        type: "enum",
        enum: StatusCase,
        default: StatusCase.WAITING
    })
    Status: StatusCase;

    @ManyToOne(type => User, user => user.dealingSpot)
    GoodsKeeper: User;
}
