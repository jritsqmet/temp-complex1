import { Component } from '@angular/core';

@Component({
  selector: 'app-tabla1',
  templateUrl: './tabla1.component.html',
  styleUrls: ['./tabla1.component.css']
})
export class Tabla1Component {

  
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

}
