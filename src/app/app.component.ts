import { Component, NgModule } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CardcountryComponent } from "./cardcountry/cardcountry.component";
import { CommonModule } from '@angular/common';
import { HttpClient, HttpEventType, HttpHeaders, HttpRequest, HttpStatusCode } from '@angular/common/http';
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
  entrada="";
  title = 'allcountries';
  viewlist = true;
  loaded=false;
  details=false;
  search=false;
  resultadoP = new Country();
  progress=0;
  countries: Country[] | null = [];
  // countryname="";
  constructor(private http: HttpClient) { }

  captaResultado(event: any) {
     this.resultadoP = event; 
     this.viewlist = false; 
     this.search=false;
     this.loaded=true;
     /*alert(this.resultadoP.name.co mmon)*/ 
     
    }
    showCountryDetails(even:any){
      //alert("view details")
      //this.loaded=
      this.details=even;
      //this.search=false;
    }
  ngOnInit() {
    this.getAllCountry();
  }
  getAllCountry() {
    Headers
    const cors=new HttpHeaders({name:["Access-Control-Allow-Origin" , "Access-Control-Allow-Methods", "Access-Control-Allow-Headers"]});
    const req = new HttpRequest("GET", "https://restcountries.com/v3.1/all/?fields=name,capital,population,area,flags",
      { headers:cors,reportProgress: true, responseType: "json", }
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
  getCountryByName(name:string):Country|null{
    var found=false;
    var i=0; 
    var country: Country=new Country();
    if (this.countries!=null){
      while (!found && i<this.countries.length){
       if (this.countries[i].name.common.toUpperCase()==name.toUpperCase()) {
        found=true;
        country=this.countries[i];
      } else {
        i++;
       }
    } 
  }
  if (found) { this.resultadoP=country; 
              this.search=true; 
              this.viewlist=false;
              this.details=false;
              return country 
            }  else
            { alert("No hemos encontrado un país con ese nombre");
               return  null;}
}
}
