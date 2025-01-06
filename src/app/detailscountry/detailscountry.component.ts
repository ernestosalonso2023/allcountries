import { Component, Input } from '@angular/core';
import { Country } from '../country';
import { CommonModule, JsonPipe } from '@angular/common';

@Component({
  selector: 'app-detailscountry',
  imports: [CommonModule],
  templateUrl: './detailscountry.component.html',
  styleUrl: './detailscountry.component.css'
})
export class DetailscountryComponent {
[x: string]: any;
  @Input() country = new Country();
  @Input() name="";
  @Input() area=0;
  @Input() capital="";
  @Input() population=0;
  @Input() flagsvg="";
}
