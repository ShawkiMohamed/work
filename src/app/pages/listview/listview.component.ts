import { Component, OnInit } from '@angular/core';

import { ServicesService } from 'src/app/services.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-listview',
  templateUrl: './listview.component.html',
  styleUrls: ['./listview.component.css']
})
export class ListviewComponent implements OnInit {

  testData:Array<any>=[];
  baseApiPhoto:any = environment.baseApiPhoto

  constructor(private service:ServicesService) { }

  ngOnInit(): void {
    this.service.getMoreData().subscribe((data:any) => {
      this.testData = data
    })
  }

}
