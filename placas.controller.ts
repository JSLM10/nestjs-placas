import { Controller, Get, Post, Body, Param, Delete } from '@nestjs/common';
import { PlacasService } from './placas.service';
import { CreatePlacaDto } from './dto/create-placa.dto';

@Controller('placas')
export class PlacasController {
  constructor(private readonly placasService: PlacasService) {}

  @Post()
  create(@Body() createPlacaDto: CreatePlacaDto) {
    return this.placasService.create(createPlacaDto);
  }

  @Get()
  findAll() {
    return this.placasService.findAll();
  }

  @Get(':placa')
  findOne(@Param('placa') placa: string) {
    return this.placasService.findOne(placa);
  }

  @Delete(':placa')
  remove(@Param('placa') placa: string) {
    return this.placasService.remove(placa);
  }
}