import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Placa } from './entities/placa.entity';
import { CreatePlacaDto } from './dto/create-placa.dto';
import { UpdatePlacaDto } from './dto/update-placa.dto';

@Injectable()
export class PlacasService {
  constructor(
    @InjectRepository(Placa)
    private readonly placaRepository: Repository<Placa>,
  ) {}

  create(createPlacaDto: CreatePlacaDto) {
    const placa = this.placaRepository.create(createPlacaDto);
    return this.placaRepository.save(placa);
  }

  findAll() {
    return this.placaRepository.find();
  }

  findOne(placa: string) {
    return this.placaRepository.findOne({ where: { placa } });
  }

  remove(placa: string) {
    return this.placaRepository.delete({ placa });
  }
}