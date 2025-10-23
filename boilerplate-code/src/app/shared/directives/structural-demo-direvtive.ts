import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[showIfTrue]'
})
export class StructuralDemoDirevtive {

  constructor(private viewContainerRef: ViewContainerRef, 
    private ref: TemplateRef<any>) { 

  }

  @Input('showIfTrue') set showIfTrue(condition: boolean) {
    if (condition) {
      this.viewContainerRef.createEmbeddedView(this.ref);
    } else {
      this.viewContainerRef.clear();
    }
  }


}
