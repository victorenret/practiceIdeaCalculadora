import { Body, Controller, Get, Param, ParseUUIDPipe, Post} from '@nestjs/common';
import { CalculadoraService } from './calculadora.service';
import { Division, Multiplicacion, Resta, Suma } from './entities';

@Controller('calculadora')
export class CalculadoraController {
  constructor(private calculadoraService: CalculadoraService) {}

  //BD POSTGRES EN DOCKER
  @Post('suma')
  async createSum(@Body() sumaData: Suma): Promise<Suma> {
    const suma = await this.calculadoraService.createSum(sumaData);
    return suma;
  }

  @Post('resta')
  async createRes(@Body() restaData: Resta): Promise<Resta> {
    const resta = await this.calculadoraService.createRes(restaData);
    return resta;
  }

  @Post('multiplicacion')
  async createMulti(
    @Body() multiData: Multiplicacion,
  ): Promise<Multiplicacion> {
    const suma = await this.calculadoraService.createMulti(multiData);
    return suma;
  }

  @Post('division')
  async createDivi(@Body() diviData: Division): Promise<Division> {
    const divi = await this.calculadoraService.createDivi(diviData);
    return divi;
  }

  //OBTENER TODOS LOS REGISTROS DE BASE DE DATOS POSTGRES

  @Get('obsumas')
  async findAllSum(): Promise<Suma[]> {
    const sumas = await this.calculadoraService.findAllSum();
    return sumas;
  }

  @Get('obmultiplicaciones')
  findAllMulti() {
    const multip = this.calculadoraService.findAllMulti();
    return multip;
  }

  @Get('obrestas')
  async findAllRest(): Promise<Resta[]> {
    const restas = await this.calculadoraService.findAllRest();
    return restas;
  }

  @Get('obdivis')
  async findAllDivi(): Promise<Division[]> {
    const divis = await this.calculadoraService.findAllDivis();
    return divis;
  }

  //OBTENER POR ID PARA TODAS LAS OPERACIONES

  @Get("suma/:id")
  async getSumaById(@Param('id', ParseUUIDPipe) id: string): Promise<Suma> {
    return this.calculadoraService.getSumaById(id);
  }

  @Get("resta/:id")
  async getRestaById(@Param('id', ParseUUIDPipe) id: string): Promise<Resta> {
    return this.calculadoraService.getRestaById(id);
  }

  @Get("multiplicacion/:id")
  async getMultiById(@Param('id', ParseUUIDPipe) id: string): Promise<Multiplicacion> {
    return this.calculadoraService.getMultiById(id);
  }

  @Get("division/:id")
  async getDivisById(@Param('id', ParseUUIDPipe) id: string): Promise<Division> {
    return this.calculadoraService.getDivisById(id);
  }


  //OBTENER OPERACIONES EN MEMORIA

  // @Get('obsumas')
  // findAllSum(): number[] {
  //   return this.calculadoraService.findSum();
  // }

  // @Get('obrestas')
  // findAllRes(): number[] {
  //   return this.calculadoraService.findRest();
  // }

  // @Get('obmultiplicaciones')
  // findAllMulti(): number[] {
  //   return this.calculadoraService.findMulti();
  // }

  // @Get('obdivisiones')
  // findAllDiv(): number[] {
  //   return this.calculadoraService.findDiv();
  // }
}
