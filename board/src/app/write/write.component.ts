import { Component, OnInit } from '@angular/core';
import { AngularService } from '../service/angular.service';

@Component({
  selector: 'app-write',
  templateUrl: './write.component.html',
  styleUrls: ['./write.component.css']
})



export class WriteComponent implements OnInit {
  isSpinner= false;
  frm = {
    title: '',
    body: ''
  };

  constructor(
    private angularService: AngularService
  ) { }

  ngOnInit() {
  }



  submit(): void {
    this.isSpinner = true;
    this.angularService.save(this.frm)
          .subscribe(res => {
            this.isSpinner = false;
          },
          err => {
            console.log("Error occured");
          }
        );
  }
}
