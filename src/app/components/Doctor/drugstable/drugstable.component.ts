import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-drugstable',
  templateUrl: './drugstable.component.html',
  styleUrls: ['./drugstable.component.css']
})
export class DrugstableComponent implements OnInit {

  isDisplay1 = false;
  constructor() { }

  ngOnInit(): void {
  }
  toogleDev1(){
    this.isDisplay1 = !this.isDisplay1;
  }

}
