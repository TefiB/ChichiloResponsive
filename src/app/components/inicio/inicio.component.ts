import { Component, OnInit } from '@angular/core';
import { PlatilloService } from 'src/app/service/platillo.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {
  platillosAleatorios: any[] = [];

  constructor(private platilloService: PlatilloService) {}

  ngOnInit(): void {
    this.platillosAleatorios = this.obtenerPlatillosAleatorios(4);
  }

  obtenerPlatillosAleatorios(cantidad: number): any[] {
    const platillos = this.platilloService.obtenerPlatillos(); // Utiliza el servicio para obtener los platillos
    const copiaPlatillos = [...platillos];
    const platillosAleatorios = [];

    for (let i = 0; i < cantidad && copiaPlatillos.length > 0; i++) {
      const indiceAleatorio = Math.floor(Math.random() * copiaPlatillos.length);
      const platillo = copiaPlatillos.splice(indiceAleatorio, 1)[0];
      platillosAleatorios.push(platillo);
    }

    return platillosAleatorios;
  }
}
