import { Injectable } from '@angular/core';


import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {

  constructor(private http:HttpClient) { }


  getSliderData():Observable<any>
  {
    return this.http.get(environment.baseUrl + "MobileMainPage/GetMainSliders")
  }

  getCategorieData(){
    return this.http.get(environment.baseUrl + "Categories/index")
  }

  data= {
    "googleId": "ChIJef3FqvY-WBQRbhlVEGBse6A"
    }
  
    headers = new Headers();
    

  getLocationData():Observable<any>
  {
    return this.http.post(environment.baseUrl + "MobileMainPage/GetHomePage",this.data,{
      headers:{
        lang:'ar'
        
      }
    })
  }

  getMoreData():Observable<any>
  {
    return this.http.post(environment.baseUrl + "MobileMainPage/getVendorOffersData",this.data,{
      headers:{
        lang:'ar'
        
      }
    })
  }

  

}
