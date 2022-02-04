import { Component, OnInit } from '@angular/core';
import { Country } from '../../interfaces/pais.interface';
import { CapitalService } from '../../services/capital.service';

@Component({
  selector: 'app-por-capital',
  templateUrl: './por-capital.component.html',
  styleUrls: ['./por-capital.component.css']
})
export class PorCapitalComponent implements OnInit {

  termino : string = 'colombia'
  isError: boolean = false;
  capitales: Country[] = [];

  constructor(private capitalService:CapitalService) { }

  ngOnInit(): void {
  }

  buscar(termino: string){
    //console.log('Termino',this.termino)
    this.isError = false;
    this.termino = termino;
    this.capitalService.buscarCapital(termino).subscribe(capitales=>{
      this.capitales= capitales;
    },(error)=>{
      console.error(error);
      this.isError = true;
    });
  }

  sugerencias(termino: string){
    this.isError = false;
  }

}
