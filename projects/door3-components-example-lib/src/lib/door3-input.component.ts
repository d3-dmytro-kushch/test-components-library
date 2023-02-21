import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'door3-input',
  template: '<p class="text-red">door3-input component works!</p>',
  styles: [':host .text-red { color: red }']
})
export class Door3InputComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
