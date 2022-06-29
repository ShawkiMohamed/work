import { Component, OnInit } from '@angular/core';

import { ServicesService } from 'src/app/services.service';

@Component({
  selector: 'app-advertisementbanner1',
  templateUrl: './advertisementbanner1.component.html',
  styleUrls: ['./advertisementbanner1.component.css']
})
export class Advertisementbanner1Component implements OnInit {

  sliderData:Array<any>=[];

  constructor(private _NewsService:ServicesService) {

   }

  ngOnInit(): void {

    this._NewsService.getSliderData().subscribe((data : any)=>{
       this.sliderData = data;
      
    })


  }

}
