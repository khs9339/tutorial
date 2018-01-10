import { Component, OnInit } from '@angular/core';
import { } from ''
@Component({
  selector: 'app-write',
  templateUrl: './write.component.html',
  styleUrls: ['./write.component.css']
})



export class WriteComponent implements OnInit {
  frm = {
    title: '',
    body: ''
  };

  constructor() { }

  ngOnInit() {
  }



  submit() {
    console.log("sub", this.frm)
  }
}
