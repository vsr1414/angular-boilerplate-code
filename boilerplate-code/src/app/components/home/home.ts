import { Component } from '@angular/core';
import { Unless } from '../../shared/directives/unless';
import { AttibuteDirective } from '../../shared/directives/attibute-directive';
import { CapitalizePipe } from '../../shared/pipes/capitalize-pipe';
import { Status } from '../../shared/enums/status';
import { NgIf } from '@angular/common';
import { StructuralDemoDirevtive } from '../../shared/directives/structural-demo-direvtive';
import { debounceTime, distinctUntilChanged, Subject } from 'rxjs';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-home',
  imports: [Unless, AttibuteDirective, CapitalizePipe, NgIf, StructuralDemoDirevtive, FormsModule],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {

  status = Status;
  currentStatus:Status = Status.Single;
  searchText: string = '';
  filteredDropdownElements: Array<{ name: string; id: number }>;
  dropdownElements: Array<{ name: string; id: number }>;
  subjectText = new Subject<string>();

  constructor() {
    this.greetUser();
    console.log("constructor")
    this.subjectText
      .pipe(
        debounceTime(1000),        // ✅ Correct syntax
        distinctUntilChanged()
      )
      .subscribe((inputText) => {
        this.performAction(inputText);
      });
    this.dropdownElements = [
      { name: '1 vijay', id: 1 },
      { name: '1 vikram', id: 11 },
      { name: '1 jay', id: 12 },
      { name: '1 jagan', id: 13 },
      { name: '2 vijay simha', id: 2 },
      { name: '3 vijay simha reddy', id: 3 },
      { name: '4 kamidi vijaya simha reddy', id: 4 },
    ];
    this.filteredDropdownElements = this.dropdownElements;
  }

  greetUser(name: string = "vijay" ): void {
    console.log(`Hello, ${name}`);
  }

  onSearchItem() {
    console.log("yeaaaa")
    this.subjectText.next(this.searchText);
  }

  performAction(text: string) {
    console.log("we are here")
    this.filteredDropdownElements = this.dropdownElements.filter((item) =>
      item.name.includes(text)
    );
  }

  selectedItem(event: any) {
    this.searchText = event.target.innerText;
    this.filteredDropdownElements = this.dropdownElements.filter((item) =>
      item.name.includes(this.searchText)
    );
    console.log('Event: ', event.target.innerText);
  }
  
}
