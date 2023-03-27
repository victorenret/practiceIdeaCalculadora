import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Suma } from './entities/suma.entity';
import { v4 as uuidv4 } from 'uuid';
import { Resta } from './entities/resta.entity';

@Injectable()
export class CalculadoraService {
  private readonly resultSumas: number[] = [];
  private readonly resultRestas: number[] = [];
  private readonly resultMulti: number[] = [];
  private readonly resultDivi: number[] = [];

  constructor(
    @InjectRepository(Suma)
    private sumaRepository: Repository<Suma>,
    @InjectRepository(Suma)
    private restaRepository: Repository<Resta>,
  ) {}

  async createSum(sumaData: Suma): Promise<Suma> {
    const suma = new Suma();

    const id = uuidv4();
    const resultado = sumaData.n1 + sumaData.n2;

    suma.n1 = sumaData.n1;
    suma.n2 = sumaData.n2;
    suma.resultado = resultado;

    await this.sumaRepository
      .createQueryBuilder()
      .insert()
      .into(Suma)
      .values([
        { id: id, n1: sumaData.n1, n2: sumaData.n2, resultado: resultado },
      ])
      .execute();

    return suma;
  }

  async createRes(restaData: Resta): Promise<Resta> {
    const resta = new Resta();

    const id = uuidv4();
    const resultado = restaData.n1 - restaData.n2;

    resta.n1 = restaData.n1;
    resta.n2 = restaData.n2;
    resta.resultado = resultado;

    await this.sumaRepository
      .createQueryBuilder()
      .insert()
      .into(Resta)
      .values([
        { id: id, n1: restaData.n1, n2: restaData.n2, resultado: resultado },
      ])
      .execute();

    return resta;
  }

  // suma(n1: number, n2: number): string {
  //   const resultado = n1 + n2;
  //   this.resultSumas.push(resultado);
  //   return `Ingresada la suma ${n1} + ${n2} al Arreglo. \nConsulta con el metodo GET por ellos`;
  // }

  // resta(n1: number, n2: number): string {
  //   const resultado = n1 - n2;
  //   this.resultRestas.push(resultado);
  //   return `Ingresada la resta ${n1} - ${n2} al Arreglo. \nConsulta con el metodo GET por ellos`;
  // }

  // multiplicacion(n1: number, n2: number): string {
  //   const resultado = n1 * n2;
  //   this.resultMulti.push(resultado);
  //   return `Ingresada la multiplicacion ${n1} * ${n2} al Arreglo. \nConsulta con el metodo GET por ellos`;
  // }

  // division(n1: number, n2: number): string {
  //   const resultado = n1 / n2;
  //   this.resultDivi.push(resultado);
  //   return `Ingresada la division ${n1} / ${n2} al Arreglo. \nConsulta con el metodo GET por ellos`;
  // }

  findSum(): number[] {
    return this.resultSumas;
  }

  findRest(): number[] {
    return this.resultRestas;
  }

  findMulti(): number[] {
    return this.resultMulti;
  }

  findDiv(): number[] {
    return this.resultDivi;
  }
}
