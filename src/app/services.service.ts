import { Injectable } from '@angular/core';


import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {

  constructor(private http:HttpClient) { }


  getSliderData():Observable<any>
  {
    return this.http.get("http://satafood.codesroots.com:3000/api/MobileMainPage/GetMainSliders")
  }

  data= {
    "googleId": "ChIJef3FqvY-WBQRbhlVEGBse6A"
    }
    headers = new Headers();
    

  getLocationData():Observable<any>
  {
    return this.http.post("http://satafood.codesroots.com:3000/api/MobileMainPage/GetHomePage",this.data,{
      headers:{
        lang:'ar'
        
      }
    })
  }

  

}
