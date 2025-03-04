// placa.entity.ts
import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn } from 'typeorm';

@Entity('placas')
export class Placa {
@PrimaryGeneratedColumn('uuid')
id: string;

@Column({ type: 'varchar', length: 10, unique: true })
placa: string;

@Column({ type: 'varchar', length: 50 })
marca: string;

@Column({ type: 'int' })
modelo: number;

@Column({ type: 'varchar', length: 30 })
color: string;

@CreateDateColumn({ type: 'timestamp' })
fecha_ingreso: Date;
}
