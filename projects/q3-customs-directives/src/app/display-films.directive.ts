import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appDisplayFilms]'
})
export class DisplayFilmsDirective {

  @Input() set appDisplayFilms(condition: boolean){
    if(condition){
      this.vwRef.createEmbeddedView(this.tplRef)
    }else{
      this.vwRef.clear()
    }
  }

  constructor(private tplRef: TemplateRef<any>, private vwRef: ViewContainerRef) { }

}
