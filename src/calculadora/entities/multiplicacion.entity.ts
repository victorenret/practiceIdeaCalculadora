import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Multipliacion {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column('numeric')
  n1: number;

  @Column('numeric')
  n2: number;

  @Column('numeric')
  result: number;
}
