import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
   
  username = new FormControl('');
  password = new FormControl('')  

  loginForm:FormGroup= this.builder.group({
    username:this.username,
    password:this.password
  });

  constructor( private builder:FormBuilder) { }

  ngOnInit() {
  }

}
