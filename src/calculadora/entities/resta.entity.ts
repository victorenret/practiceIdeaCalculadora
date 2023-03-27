import { IsNumber } from 'class-validator';
import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity()
export class Resta {
  @PrimaryColumn()
  id: string;

  @IsNumber()
  @Column()
  n1: number;

  @Column()
  @IsNumber()
  n2: number;

  @Column()
  @IsNumber()
  resultado: number;
}
