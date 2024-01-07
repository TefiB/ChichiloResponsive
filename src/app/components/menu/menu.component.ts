import { Component, OnInit } from '@angular/core';
import { PlatilloService } from 'src/app/service/platillo.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  platillos: any[] = [];
  categorias: string[] = [];

  constructor(private platilloService: PlatilloService) {}

  ngOnInit(): void {
    this.platillos = this.platilloService.obtenerPlatillos();
    this.categorias = this.obtenerCategorias();
  }

  obtenerCategorias(): string[] {
    return [...new Set(this.platillos.map(platillo => platillo.tipo))];
  }

  platillosPorCategoria(categoria: string): any[] {
    return this.platillos.filter(platillo => platillo.tipo === categoria);
  }

  

  platilloSeleccionado: any; 

  mostrarDetalle(platillo: any): void {
      this.platilloSeleccionado = platillo;
  }

  cerrarDetalle(): void {
      this.platilloSeleccionado = null;
  }
}