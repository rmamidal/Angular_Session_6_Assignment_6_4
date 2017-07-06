// Importing component and OnInit modules
import { Component, OnInit } from '@angular/core';

// Component Decorator
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})

export class AppComponent implements OnInit {

  /**Public variable */
  firstName: string;
  lastName: string;
  title: string;

  ngOnInit() {
    /** Assign values to the variable after OnInit */
    this.firstName = 'Rajendhar';
    this.lastName = 'Mamidala';
  }

  // Function to create title and bind to title.
  createTitle (first, last) {
    this.title = `User Added with First Name "${first}" and Last Name "${last}"`;
  }
}
