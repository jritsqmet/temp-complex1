import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detalle-proyecto',
  templateUrl: './detalle-proyecto.component.html',
  styleUrls: ['./detalle-proyecto.component.css']
})
export class DetalleProyectoComponent {

  
  proyectos = [ 
    {
      id:1, 
      nombre:"proyecto aplicación web1", 
      url:"https://github.com/proyecto1"
    },
    {
      id:2, 
      nombre:"proyecto aplición movil", 
      url:"https://github.com/proyecto2"
    },
    {
      id:3, 
      nombre:"proyecto spring", 
      url:"https://github.com/proyecto3"
    },
    {
      id:4, 
      nombre:"proyecto base de datos", 
      url:"https://github.com/proyecto4"
    },
    {
      id:5, 
      nombre:"proyecto BDD", 
      url:"https://github.com/proyecto5"
    },
    {
      id:6, 
      nombre:"proyecto React NAtive", 
      url:"https://github.com/proyecto6"
    }

   ]

   constructor( private ruta: ActivatedRoute){}

   proyecto: any;

   ngOnInit(){
      this.ruta.params.subscribe( p => {
          //console.log( this.proyectos.find(proyecto => proyecto.id == p['idproyectos'] ) )
          this.proyecto =  this.proyectos.find(proyecto => proyecto.id == p['idproyectos'])
      } 
     )
   }

}
