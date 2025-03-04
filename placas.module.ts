import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PlacasService } from './placas.service';
import { PlacasController } from './placas.controller';
import { Placa } from './entities/placa.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Placa])],
  controllers: [PlacasController],
  providers: [PlacasService],
})
export class PlacasModule {}