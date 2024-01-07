import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class PlatilloService {
  platillos = [
    { nombre: 'Picada antipasto', precio: 10, imagen: './assets/media/Menu/picadaantipasto.jpg', tipo:'Entrada' , descripcion:'Esto es la descripcion sabsbsbssegegseb db dbsdb svjbsvkSvj vavbaiv injkdbsdj vsyvsh'},
    { nombre: 'Rabas a la provenzal', precio: 12, imagen: './assets/media/Menu/rabasalaprovenzal.jpg', tipo:'Mariscos y Pescados' , descripcion:'Esto es la descripcion'},
    { nombre: 'Gambas al ajillo', precio: 14, imagen: './assets/media/Menu/gambasalajillo.jpg', tipo:'Mariscos y Pescados', descripcion:'Esto es la descripcion'},
    { nombre: 'Ranas a la provenzal', precio: 16, imagen: './assets/media/Menu/ranasalaprovenzal.jpg',tipo:'Mariscos y Pescados' , descripcion:'Esto es la descripcion'},
    { nombre: 'Polpettone', precio: 16, imagen: './assets/media/Menu/polpettone.jpg' ,tipo:'Carnes  y Pollos', descripcion:'Esto es la descripcion'},
    { nombre: 'Flan con dulce de leche', precio: 16, imagen: './assets/media/Menu/flancondulcedeleche.jpg',tipo:'Postres' , descripcion:'Esto es la descripcion'},


    { nombre: 'Ranas a la provenzal', precio: 16, imagen: './assets/media/Menu/ranasalaprovenzal.jpg',tipo:'Mariscos y Pescados' , descripcion:'Esto es la descripcion'},
    { nombre: 'Ranas a la provenzal', precio: 16, imagen: './assets/media/Menu/ranasalaprovenzal.jpg',tipo:'Mariscos y Pescados' , descripcion:'Esto es la descripcion'},
  ];

  obtenerPlatillos() {
    return this.platillos;
  }
}