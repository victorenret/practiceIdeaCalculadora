import { IsNotEmpty, IsNumber, IsPositive } from 'class-validator';

export class OperacionesDto {
  @IsNumber()
  @IsNotEmpty()
  @IsPositive()
  num1: number;

  @IsNumber()
  @IsNotEmpty()
  @IsPositive()
  num2: number;
}
