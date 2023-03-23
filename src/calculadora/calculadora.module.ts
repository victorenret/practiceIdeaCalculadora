import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CalculadoraController } from './calculadora.controller';
import { CalculadoraService } from './calculadora.service';
import { Suma } from './entities/suma.entity';

@Module({
    imports: [
        TypeOrmModule.forFeature([Suma])
        ],
    controllers: [CalculadoraController],
    providers: [CalculadoraService],
    
})
export class CalculadoraModule {
    
}
