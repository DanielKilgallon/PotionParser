import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent implements OnInit {
  ingredientsCount: number;

  constructor() { }

  ngOnInit(): void {
  }

  clear(): void {
    // this.location.back();
  }
}
