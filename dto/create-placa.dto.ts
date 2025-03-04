import { IsString, IsInt, IsNotEmpty, Length } from 'class-validator';

export class CreatePlacaDto {
@IsString()
@IsNotEmpty()
@Length(6, 10)
placa: string;

@IsString()
@IsNotEmpty()
marca: string;

@IsInt()
@IsNotEmpty()
modelo: number;

@IsString()
@IsNotEmpty()
color: string;
}