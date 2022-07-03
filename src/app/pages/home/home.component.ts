import { Component, OnInit } from '@angular/core';

import { ServicesService } from 'src/app/services.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public closeBanner : boolean | undefined;


  sliderData:Array<any>=[];
  categoriesData:any=[];

  firstData:Array<any>=[];
  firstTitle:any ='';
  secondData:Array<any>=[];
  secondTitle :any =''
  thirdData:Array<any>=[];
  thirdTitle:any = ''
  forthData:Array<any>=[];
  forthTitle:any = ''
  fifthData:Array<any>=[];
  fifthTitle:any =''

  baseApiPhoto:any = environment.baseApiPhoto
  
  constructor(private _NewsService:ServicesService) {}
  toggleBanner(){
    this.closeBanner = !this.closeBanner;
  }

  ngOnInit(): void {
    this._NewsService.getSliderData().subscribe( res=> {
      this.sliderData = res;
      
    } )


    //categoris
    this._NewsService.getCategorieData().subscribe( res=> {
      this.categoriesData = res;
      
      
      
    } )

    //first data
    
    this._NewsService.getLocationData().subscribe( res=> {
      this.firstTitle = res.GetPercentageForVendors.title
      this.firstData = res.GetPercentageForVendors.data
     
      
      
    } )

    //second data
    this._NewsService.getLocationData().subscribe( res=> {
      this.secondData = res.lastoffers.data
      this.secondTitle = res.lastoffers.title
      
      
    } )
    
    //third data
    this._NewsService.getLocationData().subscribe( res=> {
      this.thirdData = res.MostSellItems.data
      this.thirdTitle = res.MostSellItems.title

      
      
    } )

    // forth

    this._NewsService.getLocationData().subscribe( res=> {
      this.forthData = res.GetNearestBranche.data
      
      this.forthTitle = res.GetNearestBranche.title
         
    } )
    // test
    this._NewsService.getLocationData().subscribe( res=> {
      this.fifthData = res.getMostOrderedBranch.data
      this.fifthTitle = res.getMostOrderedBranch.title
           
    } )






    



  }


  

}
