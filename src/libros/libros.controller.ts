import { Controller, Get, Post, Body, Put, Res, HttpStatus, Param, Delete } from '@nestjs/common';
import { LibrosService } from './libros.service';
import { create } from 'domain';
import { LibroDto } from './libro-dto.interface';
import { response } from 'express';

@Controller('libros')
export class LibrosController {
    constructor(private readonly librosService: LibrosService){}

    @Get()
    list(@Res() response){
        this.librosService.getAll().then(listLibros => {
            response.status(HttpStatus.OK).json(listLibros);
        });
    }

    @Post()
    create(@Body() libro: LibroDto, @Res() response){
        this.librosService.createLibro(libro).then(libro => {
            response.status(HttpStatus.CREATED).json(libro);
        });
    }

    @Put(':id')
    update(@Body() libro: LibroDto, @Param('id') id: number, @Res() response) {
        this.librosService.updateLibro(id, libro).then(updatelibro => {
            response.status(HttpStatus.OK).json(updatelibro);
        });
    }

    @Delete(':id')
    delete(@Param('id') id: number, @Res() response){
        this.librosService.deleteLibro(id).then( res => {
            response.status(HttpStatus.OK).json(res);
        })
    } 
}
