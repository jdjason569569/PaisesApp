import { Component, Input, OnInit } from '@angular/core';
import { Country } from '../../interfaces/pais.interface';

@Component({
  selector: 'app-pais-tab-la',
  templateUrl: './pais-tab-la.component.html',
  styleUrls: ['./pais-tab-la.component.css']
})
export class PaisTabLAComponent implements OnInit {

  @Input() paises: Country[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}
