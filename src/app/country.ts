export class Country {
    name={
        common:"",
        official:""
    };
    nativeName={
        spa:{official:"",common:""}
    }
    tld:string[]=[]; 
    cca2:string="";
    ccn3:number=0;
    cca3:string="";
    cioc:string=""; 
    independent:boolean=true;
    status:string="";
    unMember:boolean=true;
   // currencies:
    idd={root:"",suffixes:[]}
    capital:string[]=[];
    altSpellings:string[]=["","",""]
    region:string="";
    subregion:string="";
    area:number=0;
    maps={googleMaps:"",OpenStreetMaps:""};
    population:number=0;
    flags={
         png:"",
         svg:"",
         alt:""
    }
    continents:string[]=[];
    coatOfArms= {
        png:"",
        svg:"",
    }
    borders:string[]=[];
}
 /*export class Name {
     common:string="";
     official:string="";
 }*/

