import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PaisService } from '../../services/pais.service';
import { switchMap, tap} from 'rxjs/operators';
import { Country } from '../../interfaces/pais.interface';

@Component({
  selector: 'app-ver-pais',
  templateUrl: './ver-pais.component.html',
  styleUrls: ['./ver-pais.component.css']
})
export class VerPaisComponent implements OnInit {

  pais! : Country;

  constructor(private activatedROute: ActivatedRoute, private paisService: PaisService) { // ActivatedRoute permite las herramientas para subcribirse a cualquier cambio de la url
  }

  //OPCION 1 PARA OBSERVABLES
  // ngOnInit(): void {
  //   this.activatedROute.params.subscribe(({id})=>{ //Desctructuracion de params 
  //     this.paisService.getPaisByCode(id).subscribe(pais=>{
  //       console.log(pais);
  //     });
  //   });
  // }

  //OPCION 1 PARA OBSERVABLES con rxj con switcMap retorna otro observable
  ngOnInit(): void {

    this.activatedROute.params.pipe(
      switchMap((params) => this.paisService.getPaisByCode(params.id)),
      tap(resp => console.log(resp))
    ).subscribe(pais =>{
       this.pais = pais;
    });



  }

}
