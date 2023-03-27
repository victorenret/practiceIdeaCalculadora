import { Body, Controller, Get, Post } from '@nestjs/common';
import { CalculadoraService } from './calculadora.service';
import { Suma } from './entities/suma.entity';

@Controller('calculadora')
export class CalculadoraController {
  constructor(private calculadoraService: CalculadoraService) {}

  // @Post('suma')
  // sumar(@Body() operacionesDto: OperacionesDto) {
  //   return this.calculadoraService.suma(operacionesDto);
  // }

  @Post('suma')
  async createSum(@Body() sumaData: Suma): Promise<Suma> {
    const suma = await this.calculadoraService.createSum(sumaData);
    return suma;
  }

  // @Post('resta')
  // async createRes(@Body() sumaData: Suma): Promise<Suma> {
  //   const suma = await this.calculadoraService.createRes(sumaData);
  //   return suma;
  // }

  // @Post('multiplicacion')
  // async createMulti(@Body() sumaData: Suma): Promise<Suma> {
  //   const suma = await this.calculadoraService.createMulti(sumaData);
  //   return suma;
  // }

  // @Post('division')
  // async createDivi(@Body() sumaData: Suma): Promise<Suma> {
  //   const suma = await this.calculadoraService.createDivi(sumaData);
  //   return suma;
  // }

  @Get('obsumas')
  findAllSum(): number[] {
    return this.calculadoraService.findSum();
  }

  @Get('obrestas')
  findAllRes(): number[] {
    return this.calculadoraService.findRest();
  }

  @Get('obmultiplicaciones')
  findAllMulti(): number[] {
    return this.calculadoraService.findMulti();
  }

  @Get('obdivisiones')
  findAllDiv(): number[] {
    return this.calculadoraService.findDiv();
  }
}
