import { Module } from '@nestjs/common';
import { CalculadoraController } from './calculadora/calculadora.controller';
import { CalculadoraService } from './calculadora/calculadora.service';

@Module({
  imports: [],
  controllers: [CalculadoraController],
  providers: [CalculadoraService],
})
export class AppModule {}
