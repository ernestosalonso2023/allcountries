import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CardcountryComponent } from "./cardcountry/cardcountry.component";
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Country } from './country';
import { DetailscountryComponent } from './detailscountry/detailscountry.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CardcountryComponent, CommonModule, DetailscountryComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'allcountries';
  viewlist=true;
  resultadoP=new Country();
  countriesnames=["Spain","Germany","Cuba","Venezuela", "Aruba","Colombia"];
  countries:Country[]=[];
  // countryname="";
  constructor(private http:HttpClient){}

  captaResultado(event:any) { this.resultadoP = event; this.viewlist=false; /*alert(this.resultadoP.name.common)*/}

  ngOnInit()
    {
      this.getAllCountry();
    }
  getAllCountry() {
      this.http.get<Country[]>('https://restcountries.com/v3.1/all/?fields=name,capital,population,area,flags')
        .subscribe(data => {
          this.countries = data;
          //console.log(this.countries);
        });
    }
}
