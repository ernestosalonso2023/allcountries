import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CardcountryComponent } from "./cardcountry/cardcountry.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CardcountryComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'allcountries';
}
