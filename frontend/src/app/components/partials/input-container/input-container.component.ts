import { Component, Input, OnInit } from '@angular/core';  // This Angular component represents an input container for displaying a label and setting the background color.

@Component({
  selector: 'input-container',
  templateUrl: './input-container.component.html',
  styleUrls: ['./input-container.component.css'],
})
export class InputContainerComponent implements OnInit {
  @Input()                                                 // '@Input' Decorators: Allow external values to be passed into this component, including 'label' and 'bgColor'.
  label!: string;
  @Input()
  bgColor = 'white';

  constructor() {}

  ngOnInit(): void {}
}
