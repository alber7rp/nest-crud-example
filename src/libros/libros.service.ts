import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Libro } from '../entity/libro.entity';
import { LibroDto } from './libro-dto.interface';

@Injectable()
export class LibrosService {
    constructor( @InjectRepository(Libro)
    private readonly libroRepository: Repository<Libro>) {}

    async getAll(){
        return await this.libroRepository.find();
    }

    async createLibro(libronuevo : LibroDto){
        const aux = new Libro();
        aux.autor = libronuevo.autor;
        aux.title = libronuevo.title;

        return await this.libroRepository.save(aux);
    }

    async updateLibro(id: number, libroactualizar: LibroDto){
        const libroupdate = await this.libroRepository.findOne(id);

        libroupdate.autor = libroactualizar.autor;
        libroupdate.title = libroactualizar.title;

        return await this.libroRepository.save(libroupdate);

    }

    async deleteLibro(id: number){
        return await this.libroRepository.delete(id);
    }
    
}
