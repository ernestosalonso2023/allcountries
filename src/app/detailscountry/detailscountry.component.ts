import { Component, Input } from '@angular/core';
import { Country } from '../country';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-detailscountry',
  imports: [],
  templateUrl: './detailscountry.component.html',
  styleUrl: './detailscountry.component.css'
})
export class DetailscountryComponent {
  @Input() country = new Country();
  @Input() name="";
  @Input() area=0;
  @Input() capital="";
  @Input() population=0;
  @Input() flagsvg="";
}
