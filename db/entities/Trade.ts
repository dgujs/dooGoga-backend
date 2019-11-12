import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm";
import { User } from "./User";

export enum StatusCase{
    WAITING = "WAITING",
    MATCHED = "MATCHED",
    CANCELED = "CANCELED",
    FINISHED = "FINISHED",
}

@Entity()
export class Trade {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    SpotName: string;

    @Column()
    price: number;

    @Column()
    startTime: string;

    @Column()
    endTime: string;

    @Column()
    Goods: string;

    @Column({
        type: "enum",
        enum: StatusCase,
        default: StatusCase.WAITING
    })
    Status: StatusCase;

    @Column()
    GoodsOwner: number;

    @ManyToOne(type => User, user => user.trades)
    GoodsKeeper: User;

    @Column({ type: "double precision", default: 0 })
    OwnerGrade: number;

    @Column({ type: "double precision", default: 0 })
    KeeperGrade: number;
}