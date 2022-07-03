import { Component, OnInit } from '@angular/core';


import { ActivatedRoute } from '@angular/router';
import { ServicesService } from 'src/app/services.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-restaurant',
  templateUrl: './restaurant.component.html',
  styleUrls: ['./restaurant.component.css']
})
export class RestaurantComponent implements OnInit {

  
  id:any

  

  constructor( private route:ActivatedRoute , private service:ServicesService) { 
    
  }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get("id")

    

  }

}
 