import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CalculadoraController } from './calculadora.controller';
import { CalculadoraService } from './calculadora.service';
import { Division } from './entities/division.entity';
import { Multipliacion } from './entities/multiplicacion.entity';
import { Resta } from './entities/resta.entity';
import { Suma } from './entities/suma.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Suma, Resta, Multipliacion, Division])],
  controllers: [CalculadoraController],
  providers: [CalculadoraService],
})
export class CalculadoraModule {}
