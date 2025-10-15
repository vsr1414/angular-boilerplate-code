import { Component } from '@angular/core';
import { Unless } from '../../shared/directives/unless';
import { AttibuteDirective } from '../../shared/directives/attibute-directive';
import { CapitalizePipe } from '../../shared/pipes/capitalize-pipe';
import { Status } from '../../shared/enums/status';
import { NgIf } from '@angular/common';


@Component({
  selector: 'app-home',
  imports: [Unless, AttibuteDirective, CapitalizePipe, NgIf],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {

  status = Status;
  currentStatus:Status = Status.Single;

  constructor() { 
    this.greetUser();
  }

  greetUser(name: string = "vijay" ): void {
    console.log(`Hello, ${name}`);
  }
  
}
