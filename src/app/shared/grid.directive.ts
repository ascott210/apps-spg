import { Directive, ElementRef, AfterViewInit } from '@angular/core';

@Directive({
  selector: '[appGrid]',
})
export class GridDirective implements AfterViewInit {
  constructor(private el: ElementRef) {}

  ngAfterViewInit() {
    this.addGrid();
  }

  private addGrid() {
    this.el.nativeElement.childNodes[0].classList.add('grid-table');
    let numNodes = this.el.nativeElement.childNodes[0].childNodes.length;
    for (let i = 0; i < numNodes - 1; i++) {
      this.el.nativeElement.childNodes[0].childNodes[i].childNodes.forEach(
        (node) => {
          node.classList.add('grid-data');
        }
      );
    }
  }
}
