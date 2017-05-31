import { Component } from "@angular/core";
require('nativescript-nodeify');
const NeDB = require('nedb');

@Component({
  selector: "my-app",
  template: `
    <ActionBar title="My App"></ActionBar>
    <!-- Your UI components go here -->
  `
})
export class AppComponent {
  // Your TypeScript logic goes here
}
