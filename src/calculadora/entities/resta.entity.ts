import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Resta {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column('numeric')
  n1: number;

  @Column('numeric')
  n2: number;

  @Column('float')
  result: number;
}
