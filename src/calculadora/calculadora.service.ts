import { Injectable, NotFoundException, ParseUUIDPipe } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { FindOneOptions, Repository } from 'typeorm';
import { v4 as uuidv4, validate as isUUID } from 'uuid';
import { Suma, Resta, Multiplicacion, Division } from './entities';

@Injectable()
export class CalculadoraService {
  // private readonly resultSumas: number[] = [];
  // private readonly resultRestas: number[] = [];
  // private readonly resultMulti: number[] = [];
  // private readonly resultDivi: number[] = [];

  constructor(
    @InjectRepository(Suma)
    private sumaRepository: Repository<Suma>,
    @InjectRepository(Resta)
    private restaRepository: Repository<Resta>,
    @InjectRepository(Multiplicacion)
    private multiRepository: Repository<Multiplicacion>,
    @InjectRepository(Division)
    private diviRepository: Repository<Division>,
  ) {}

  //CONECTANDOSE A UNA BASE DE DATOS POSTGRES EN DOCKER
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

    await this.restaRepository
      .createQueryBuilder()
      .insert()
      .into(Resta)
      .values([
        { id: id, n1: restaData.n1, n2: restaData.n2, resultado: resultado },
      ])
      .execute();

    return resta;
  }

  async createMulti(multiData: Multiplicacion): Promise<Multiplicacion> {
    const multi = new Multiplicacion();

    const id = uuidv4();
    const resultado = multiData.n1 * multiData.n2;

    multi.n1 = multiData.n1;
    multi.n2 = multiData.n2;
    multi.resultado = resultado;

    await this.multiRepository
      .createQueryBuilder()
      .insert()
      .into(Multiplicacion)
      .values([
        { id: id, n1: multiData.n1, n2: multiData.n2, resultado: resultado },
      ])
      .execute();

    return multi;
  }

  async createDivi(diviData: Division): Promise<Division> {
    const divi = new Division();

    const id = uuidv4();
    const resultado = diviData.n1 / diviData.n2;

    divi.n1 = diviData.n1;
    divi.n2 = diviData.n2;
    divi.resultado = resultado;

    await this.diviRepository
      .createQueryBuilder()
      .insert()
      .into(Division)
      .values([
        { id: id, n1: diviData.n1, n2: diviData.n2, resultado: resultado },
      ])
      .execute();

    return divi;
  }

  //OBTENIENDO TODOS LOS DATOS DE LA BD POSTGRES

  async findAllSum(): Promise<Suma[]> {
    return await this.sumaRepository.find();
  }

  async findAllMulti(): Promise<Multiplicacion[]> {
    return await this.multiRepository.find();
  }

  async findAllRest(): Promise<Resta[]> {
    return await this.restaRepository.find();
  }

  async findAllDivis(): Promise<Division[]> {
    return await this.diviRepository.find();
  }

  //OBTENIENDO POR ID TODAS LAS OPERACIONES

  async getSumaById(id: string): Promise<Suma> {
    const suma = await this.sumaRepository.findOne({ where: { id } });
    if (!suma) {
      throw new NotFoundException(`La suma con id ${id} no existe.`);
    }
    return suma;
  }

  async getRestaById(id: string): Promise<Resta> {
    const resta = await this.restaRepository.findOne({ where: { id } });
    if (!resta) {
      throw new NotFoundException(`La resta con id ${id} no existe.`);
    }
    return resta;
  }

  async getMultiById(id: string): Promise<Multiplicacion> {
    const multi = await this.multiRepository.findOne({ where: { id } });
    if (!multi) {
      throw new NotFoundException(`La multiplicacion con id ${id} no existe.`);
    }
    return multi;
  }

  async getDivisById(id: string): Promise<Division> {
    const divis = await this.diviRepository.findOne({ where: { id } });
    if (!divis) {
      throw new NotFoundException(`La division con id ${id} no existe.`);
    }
    return divis;
  }
  
  //PARA TRABAJAR CON DATOS EN MEMORIA

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

  // findSum(): number[] {
  //   return this.resultSumas;
  // }

  // findRest(): number[] {
  //   return this.resultRestas;
  // }

  // findMulti(): number[] {
  //   return this.resultMulti;
  // }

  // findDiv(): number[] {
  //   return this.resultDivi;
  // }
}
