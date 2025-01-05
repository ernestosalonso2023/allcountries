import { Attribute, Component, EventEmitter, inject, Input, OnInit, Output } from '@angular/core';
import { Country } from '../country';
import { HttpClient} from '@angular/common/http';
import { JsonPipe, NgFor } from '@angular/common';

@Component({
  selector: 'app-cardcountry',
  imports: [],
  templateUrl: './cardcountry.component.html',
  styleUrl: './cardcountry.component.css'
})
export class CardcountryComponent implements OnInit {

  country = new Country();
  @Input() name="";
  @Input() area=0;
  @Input() capital="";
  @Input() population=0;
  @Input() flagsvg="";
  @Output() resultado:EventEmitter<Country>=new EventEmitter<Country>();
  constructor(private http: HttpClient) {  }

  ngOnInit() {
    this.country.name.common=this.name;
    this.country.capital[0]=this.capital;
    this.country.population=this.population;
    this.country.area=this.area;
    this.country.flags.svg=this.flagsvg;

   // this.getCountryByName(this.countryname);
  }
  getCountryByName(aname: string) {
    this.http.get<Country[]>('https://restcountries.com/v3.1/name/' + aname)
      .subscribe(data => {
        this.country = data[0];
        this.resultado.emit(this.country);
        //alert(JSON.stringify(this.country));
      });
  }
}