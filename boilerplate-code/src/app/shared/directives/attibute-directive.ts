import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appAttibuteDirective]'
})
export class AttibuteDirective {

  constructor(private ref: ElementRef,
    private renderer: Renderer2
   ) { }
   @HostListener('mouseenter') onMouseEnter() {
    this.renderer.setStyle(this.ref.nativeElement, 'color', 'red');
   }

   @HostListener('mouseleave') onMouseLeave() {
    this.renderer.removeStyle(this.ref.nativeElement, 'color');
    // this.renderer.setStyle(this.ref.nativeElement, 'color', 'black');
   }

}
