// Importing component and OnInit modules
import { Component, OnInit, Input } from '@angular/core';
// Component Decorator.
@Component({
    selector: "child-app",
    templateUrl: "./child.component.html"
})

export class ChildComponent implements OnInit {

    @Input() title;

    // Public Variable.
    childTitle: string;

    constructor() {}

    ngOnInit() {
        // Assigning values to variables after ngOnit.
        this.childTitle = this.title;
    }
}
