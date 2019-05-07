import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Libro {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  autor: string;
}