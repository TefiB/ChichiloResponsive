import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class PlatilloService {
  platillos = [
    { nombre: 'Picada antipasto', precio: 10, imagen: './assets/media/Menu/picadaantipasto.jpg', tipo:'Entrada' , descripcion:'Disfruta de una selección exquisita de quesos maduros, embutidos artesanales, aceitunas marinadas y vegetales frescos. Nuestra Picada Antipasto es una explosión de sabores que despertará tus sentidos.'},
    { nombre: 'Rabas a la provenzal', precio: 12, imagen: './assets/media/Menu/rabasalaprovenzal.jpg', tipo:'Mariscos y Pescados' , descripcion:'Calamares tiernos y crujientes, sazonados con ajo fresco, perejil y especias provenzales. '},
    { nombre: 'Gambas al ajillo', precio: 14, imagen: './assets/media/Menu/gambasalajillo.jpg', tipo:'Mariscos y Pescados', descripcion:'Gambas frescas salteadas en aceite de oliva, ajo picado y perejil fresco. Un toque de picante completa esta experiencia mediterránea que resalta la frescura de los ingredientes.'},
    { nombre: 'Ranas a la provenzal', precio: 16, imagen: './assets/media/Menu/ranasalaprovenzal.jpg',tipo:'Mariscos y Pescados' , descripcion:'Sumérgete en la frescura de las ranas acompañadas de una mezcla aromática de ajo fresco, hierbas provenzales y aceite de oliva virgen. '},
    { nombre: 'Polpettone', precio: 16, imagen: './assets/media/Menu/polpettone.jpg' ,tipo:'Carnes  y Pollos', descripcion:'El polpettone, nuestro tributo a la tradición italiana, presenta carne de primera calidad sazonada con ingredientes auténticos como ajo, hierbas frescas y especias cuidadosamente seleccionadas. Cada bocado es una celebración de la riqueza de los sabores italianos.'},
    { nombre: 'Flan con dulce de leche', precio: 16, imagen: './assets/media/Menu/flancondulcedeleche.jpg',tipo:'Postres' , descripcion:'Nuestro flan delicadamente cremoso se combina con el dulce de leche más suave y sedoso. La combinación perfecta de texturas y sabores para terminar tu comida con dulzura.'},
    {nombre:'Arroz con mejillones' ,precio: 20, imagen:'./assets/media/Menu/arrozconmejillones.jpg' ,tipo:'Mariscos y Pescados' , descripcion:'Granos de arroz perfumados cocidos a la perfección y mezclados con mejillones frescos, ajo, hierbas y especias.'},
    {nombre:'Flan con crema' ,precio: 20, imagen:'./assets/media/Menu/flanconcrema.jpg' ,tipo:'Postres' , descripcion:'La textura sedosa del flan se combina con una capa indulgente de crema, creando un postre que deleitará tus sentidos con cada delicado bocado.'},
    {nombre:'Mousse de chocolate' ,precio: 20, imagen:'./assets/media/Menu/moussedechocolate.jpg' ,tipo:'Postres' , descripcion:'Preparado con chocolate negro de calidad excepcional, cada capa de esta delicia se compone de una mezcla suave y aireada de chocolate, crema y yemas de huevo frescas. Coronado con virutas de chocolate y acompañado de un toque de crema batida.'},
    {nombre:'Tiramisu' ,precio: 20, imagen:'./assets/media/Menu/tiramisu.jpg' ,tipo:'Postres' , descripcion:'Capas de bizcocho empapado en café, suavizadas con una crema de mascarpone y espolvoreadas con cacao. Un postre italiano clásico que te transportará a las delicias de Italia con cada cucharada.'},
    {nombre:'Zapallito relleno' ,precio: 20, imagen:'./assets/media/Menu/zapallitorelleno.jpg' ,tipo:'Entrada' , descripcion:'Zapallitos tiernos, rellenos con una mezcla exquisita de carne, arroz y vegetales frescos, horneados a la perfección para una experiencia única de sabor y textura.'},
  ];

  obtenerPlatillos() {
    return this.platillos;
  }
}