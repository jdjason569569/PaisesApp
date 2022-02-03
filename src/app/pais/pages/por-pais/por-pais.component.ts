import { Component, OnInit } from '@angular/core';
import { Country } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styleUrls: ['./por-pais.component.css']
})
export class PorPaisComponent implements OnInit {

  termino : string = 'colombia'
  isError: boolean = false;
  paises: Country[] = [];

  constructor(private paisService: PaisService) { }

  ngOnInit(): void {
  }

  buscar(termino: string){
    //console.log('Termino',this.termino)
    this.isError = false;
    this.termino = termino;
    this.paisService.buscarPais(termino).subscribe(paises=>{
      this.paises= paises;
    },(error)=>{
      console.error(error);
      this.isError = true;
    });
  }

  sugerencias(termino: string){
    this.isError = false;
  }

}
