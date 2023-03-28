import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CalculadoraController } from './calculadora.controller';
import { CalculadoraService } from './calculadora.service';
import { Suma } from './entities/suma.entity';
import { Resta } from './entities/resta.entity';
import { Division } from './entities/division.entity';
import { Multiplicacion } from './entities/multiplicacion.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Suma, Resta, Multiplicacion, Division])],
  controllers: [CalculadoraController],
  providers: [CalculadoraService],
})
export class CalculadoraModule {}
