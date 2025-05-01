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
          { name:"Sierra Leone", url:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2020756.4108567983!2d-11.8374914!3d8.42228685!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xf0106183aabf343%3A0x5369e9cdc72cf719!2sSierra%20Leona!5e0!3m2!1ses-419!2scu!4v1736397598450!5m2!1ses-419!2scu"},
          { name:"Hungary", url:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3299107.575032213!2d19.496922434466786!3d47.23248327478777!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4741837bdf37e4c3%3A0xc4290c1e1010!2zSHVuZ3LDrWE!5e0!3m2!1ses-419!2ses!4v1745960900389!5m2!1ses-419!2ses"},
          { name:"Taiwan", url:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3747121.81958051!2d119.49964994999999!3d23.485750050000004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x346ef3065c07572f%3A0xe711f004bf9c5469!2zVGFpd8Ohbg!5e0!3m2!1ses-419!2ses!4v1745961306993!5m2!1ses-419!2ses"},
          { name:"Tonga", url:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7735054.696705869!2d179.95075259682687!3d-18.80340349112262!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7193b644bb9fd01d%3A0xf36dcccac55ee2a9!2sTonga!5e0!3m2!1ses-419!2ses!4v1745961580395!5m2!1ses-419!2ses"},
          { name:"Greece", url:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13126450.881824328!2d4.992915831352722!3d36.56134771560626!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x135b4ac711716c63%3A0x363a1775dc9a2d1d!2sGrecia!5e0!3m2!1ses-419!2ses!4v1745963084477!5m2!1ses-419!2ses"},
          { name:"Marshall Islands", url:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d8057664.5149838785!2d160.92360802960198!3d9.560182711511278!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x650119b22129ca2b%3A0x8b3e03e8aa09b776!2sIslas%20Marshall!5e0!3m2!1ses-419!2ses!4v1745963983675!5m2!1ses-419!2ses"},
          { name:"Belarus", url:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4848067.24041559!2d22.695844556984422!3d53.60737198588018!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46da2584e2ad4881%3A0xa1d181ec8c10!2sBielorrusia!5e0!3m2!1ses-419!2ses!4v1745964721190!5m2!1ses-419!2ses"},
          { name:"Cuba", url:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7605614.966976402!2d-84.86440389595951!3d21.44185146852205!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88cd49070f7a4cb5%3A0x798cf7529110a41a!2sCuba!5e0!3m2!1ses!2ses!4v1746103095143!5m2!1ses!2ses"}
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
