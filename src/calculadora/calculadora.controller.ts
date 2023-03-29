import { Body, Controller, Get, Post } from '@nestjs/common';
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
