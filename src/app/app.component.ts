import { Component, OnInit } from '@angular/core';
import { WorklistService } from './worklist.service';

@Component({
  selector: 'app-app',
  template: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title: string;
  message: string;

  constructor(private service: WorklistService) {
    this.title = '';
    this.message = '';
  }

  ngOnInit() {
    this.title = 'Hello';
    this.service.schedule('田中');
  }
}
