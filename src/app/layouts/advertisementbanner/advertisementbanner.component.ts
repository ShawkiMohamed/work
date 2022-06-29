import { Component, OnInit } from '@angular/core';


import { ServicesService } from 'src/app/services.service';

@Component({
  selector: 'app-advertisementbanner',
  templateUrl: './advertisementbanner.component.html',
  styleUrls: ['./advertisementbanner.component.css']
})
export class AdvertisementbannerComponent implements OnInit {


  sliderData:Array<any>=[];

  constructor(private _NewsService:ServicesService) {
    _NewsService.getSliderData().subscribe( res=> {
      this.sliderData = res
      
    } )
   }

  ngOnInit(): void {
  }

}
