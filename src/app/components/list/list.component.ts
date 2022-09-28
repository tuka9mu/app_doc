import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  isDisplay1 = false;
  isDisplay2 = false;
  constructor() { }

  ngOnInit(): void {
  }
  toogleDev1(){
    this.isDisplay1 = !this.isDisplay1;
  }
  toogleDev2(){
    this.isDisplay2 = !this.isDisplay2;
  }

}
