import { Component, OnInit } from '@angular/core';

import { ServicesService } from 'src/app/services.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public closeBanner : boolean | undefined;


  sliderData:Array<any>=[];
  firstData:Array<any>=[];
  firstTitle:any ='';
  secondData:Array<any>=[];
  secondTitle :any =''
  thirdData:Array<any>=[];
  thirdTitle:any = ''
  forthData:Array<any>=[];
  forthTitle:any = ''
  
  constructor(private _NewsService:ServicesService) {

    _NewsService.getSliderData().subscribe( res=> {
      this.sliderData = res;
      
      
    } )

    //first data
    
    _NewsService.getLocationData().subscribe( res=> {
      this.firstTitle = res.GetPercentageForVendors.title
      this.firstData = res.GetPercentageForVendors.data
      
      
    } )

    //second data
    _NewsService.getLocationData().subscribe( res=> {
      this.secondData = res.lastoffers.data
      this.secondTitle = res.lastoffers.title
      
      
    } )
    
    //third data
    _NewsService.getLocationData().subscribe( res=> {
      this.thirdData = res.MostSellItems.data
      this.thirdTitle = res.MostSellItems.title

      
      
    } )

    // forth

    _NewsService.getLocationData().subscribe( res=> {
      this.forthData = res.GetNearestBranche.data
      
      this.forthTitle = res.GetNearestBranche.title
      console.log("forth")
      console.log(this.forthTitle)
      
      
    } )

   }
  toggleBanner(){
    this.closeBanner = !this.closeBanner;
  }

  ngOnInit(): void {
  }

}
