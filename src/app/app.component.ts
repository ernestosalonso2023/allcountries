import { Component, NgModule } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CardcountryComponent } from "./cardcountry/cardcountry.component";
import { CommonModule } from '@angular/common';
import { HttpClient, HttpEventType, HttpRequest, HttpStatusCode } from '@angular/common/http';
import { Country } from './country';
import { DetailscountryComponent } from './detailscountry/detailscountry.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CardcountryComponent, CommonModule, FormsModule, DetailscountryComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  //nombre="Ernesto";
 // entrada="mmm";
  title = 'allcountries';
  viewlist = true;
  loaded=false;
  details=false;
  resultadoP = new Country();
  progress=0;
  countries: Country[] | null = [];
  // countryname="";
  constructor(private http: HttpClient) { }

  captaResultado(event: any) {
     this.resultadoP = event; 
     this.viewlist = false; 
     this.loaded=true;
     /*alert(this.resultadoP.name.co mmon)*/ 
     
    }
    showCountryDetails(even:any){
      //alert("view details")
      //this.loaded=
      this.details=even;
    }
  ngOnInit() {
    this.getAllCountry();
  }
  getAllCountry() {
    const req = new HttpRequest("GET", "https://restcountries.com/v3.1/all/?fields=name,capital,population,area,flags",
      { reportProgress: true, responseType: "json", }
    );
    this.http.request<Country[]>(req).subscribe(event => {
      if (event.type === HttpEventType.DownloadProgress) {
        if (event.total) {
          const total: number = event.total;
          this.progress = Math.round(100 * event.loaded / total);
         // console.log(percent);
        }

      } else
        if (event.type === HttpEventType.Response) {
          this.countries = event.body
          this.progress=100;
        }
   });
    /*this.http.get<Country[]>('https://restcountries.com/v3.1/all/?fields=name,capital,population,area,flags')
      .subscribe(data => {
        this.countries = data;
        //console.log(this.countries);
      });*/
  }
  Buscando(){
    //alert(this.entrada);
    //this.nombre=this.entrada;
  }
}
