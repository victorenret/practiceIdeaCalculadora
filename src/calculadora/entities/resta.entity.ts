import { IsNumber, IsOptional } from 'class-validator';
import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity()
export class Resta {
  @PrimaryColumn('uuid')
  id: string;

  @IsNumber()
  @Column()
  n1: number;

  @IsNumber()
  @Column()
  n2: number;

  @IsNumber()
  @IsOptional()
  @Column('numeric', { default: 0 })
  resultado?: number;
}
