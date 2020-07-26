import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-add-property',
  templateUrl: './add-property.component.html',
  styleUrls: ['./add-property.component.scss'],
})
export class AddPropertyComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  onSubmit(Form: NgForm) {
    console.log('form submitted');
    console.log(Form);
  }
}
