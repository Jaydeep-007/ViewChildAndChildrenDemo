import { Component, ElementRef, QueryList, Renderer2, ViewChild, ViewChildren } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent {

  message : string = "";

  //View Child
  @ViewChild("childalert") alert!: ElementRef

  //View Children
  @ViewChildren("childheading") childheading!: QueryList<any>;

  constructor(private renderer: Renderer2) {

  }

  ngOnInit(): void {

  }

  ngAfterViewInit(): void {
    console.log(this.alert)

    //View Child
    this.renderer.setStyle(this.alert.nativeElement, 'background-color', 'red');

    //ViewChildren
    this.renderer.setStyle(this.childheading.first.nativeElement, 'color', 'blue');
    this.renderer.setStyle(this.childheading.last.nativeElement, 'color', 'white');
  }

  //Child Method
  childMethod()
  {
    this.message = 'Hi, Parent Component Invoke Child Method...';
  }

}
