import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appUnless]'
})
export class Unless {

  constructor(private ref: TemplateRef<any>, private viewContainerRef: ViewContainerRef ) { }
  @Input() set appUnless(condition: boolean) {
    if (!condition) {
      this.viewContainerRef.createEmbeddedView(this.ref);
    } else {
      this.viewContainerRef.clear();
    }
  }
}
