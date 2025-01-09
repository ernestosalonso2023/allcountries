import { Attribute, Component, EventEmitter, inject, Input, OnInit, Output } from '@angular/core';
import { Country } from '../country';
import { HttpClient, HttpEventType, HttpRequest} from '@angular/common/http';
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
  @Output() details:EventEmitter<boolean>=new EventEmitter<boolean>();
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
    this.details.emit(true);
   /* this.http.get<Country[]>('https://restcountries.com/v3.1/name/' + aname)
      .subscribe(data => {
        this.country = data[0];
        this.resultado.emit(this.country);
        this.details.emit(true);
        //alert(JSON.stringify(this.country));*/
        const req = new HttpRequest("GET", 'https://restcountries.com/v3.1/name/' + aname,
              { reportProgress: true, responseType: "json" }
            );
            this.http.request<Country[]>(req).subscribe(event => {
              if (event.type === HttpEventType.DownloadProgress) {
                if (event.total) {
                  //const total: number = event.total;
                 // this.progress = Math.round(100 * event.loaded / total);
                 // console.log(percent);
                }
        
              } else
                if (event.type === HttpEventType.Response && event.body!=null) {
                  this.country = event.body[0];
                  //this.details.emit(true);
                  this.resultado.emit(this.country);
                  console.log(this.country);
                 // this.progress=100;
                }
            });
            /*this.http.get<Country[]>('https://restcountries.com/v3.1/all/?fields=name,capital,population,area,flags')
              .subscribe(data => {
                this.countries = data;
                //console.log(this.countries);
              });*/
          };
  }