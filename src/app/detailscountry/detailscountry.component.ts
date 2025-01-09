import { Component, Input } from '@angular/core';
import { Country } from '../country';
import { CommonModule, JsonPipe } from '@angular/common';
import { runPostSignalSetFn } from '@angular/core/primitives/signals';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-detailscountry',
  imports: [CommonModule],
  templateUrl: './detailscountry.component.html',
  styleUrl: './detailscountry.component.css'
})
export class DetailscountryComponent {
  [x: string]: any;
  @Input() country = new Country();
  @Input() name = "";
  @Input() area = 0;
  @Input() capital = "";
  @Input() population = 0;
  @Input() flagsvg = "";
  maps = [{ name: "South Georgia", url: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d593982.0245516009!2d-36.9023897!3d-54.44101!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xbecb0d04d60d1019%3A0xde9df3c446380561!2sGeorgia%20del%20Sur!5e0!3m2!1ses!2scu!4v1736392188278!5m2!1ses!2scu" },
          { name:"Grenada", url:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d499050.19918622077!2d-61.59029995!3d12.25980255!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8c381789f4877bd1%3A0x36d8c7015a1f4f8e!2sGranada!5e0!3m2!1ses!2scu!4v1736396447502!5m2!1ses!2scu"},
          { name:"Switzerland", url:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1398041.1378619722!2d8.224118950000001!3d46.8131873!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x478c64ef6f596d61%3A0x5c56b5110fcb7b15!2sSuiza!5e0!3m2!1ses-419!2scu!4v1736397425772!5m2!1ses-419!2scu"},
          { name:"Sierra Leone", url:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2020756.4108567983!2d-11.8374914!3d8.42228685!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xf0106183aabf343%3A0x5369e9cdc72cf719!2sSierra%20Leona!5e0!3m2!1ses-419!2scu!4v1736397598450!5m2!1ses-419!2scu"} 
        ]
  constructor(private sanitizer: DomSanitizer) {
  }


  getUrlMap(name: string) {
    let result: string = "";
    this.maps.forEach(element => {
      if (element.name === name) {
        result = element.url;
      }
    });
    //console.log(result);
    // const x=this.sanitizer.bypassSecurityTrustResourceUrl(result);
    return this.sanitizer.bypassSecurityTrustResourceUrl(result);
  }
}
