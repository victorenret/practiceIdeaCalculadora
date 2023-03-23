import { Body, Controller, Get, Post } from '@nestjs/common';
import { OperacionesDto } from './dtos/operaciones.dto';
import { CalculadoraService } from './calculadora.service';

@Controller('calculadora')
export class CalculadoraController {
  constructor(private calculadoraService: CalculadoraService) {}

  @Post('suma')
  sumar(@Body() nums: OperacionesDto) {
    return this.calculadoraService.suma(nums.num1, nums.num2);
  }

  @Post('resta')
  restar(@Body() nums: OperacionesDto) {
    return this.calculadoraService.resta(nums.num1, nums.num2);
  }

  @Post('multiplicacion')
  multiplicar(@Body() nums: OperacionesDto) {
    return this.calculadoraService.multiplicacion(nums.num1, nums.num2);
  }

  @Post('division')
  dividir(@Body() nums: OperacionesDto) {
    return this.calculadoraService.division(nums.num1, nums.num2);
  }

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
