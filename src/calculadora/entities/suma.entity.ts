import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Suma{

    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column('numeric')
    n1: number;

    @Column('numeric',{
        default:0
    })
    n2: number

    @Column('float')
    result: number;
}