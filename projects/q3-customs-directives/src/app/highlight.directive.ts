import { Directive, ElementRef, HostBinding, HostListener, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective implements OnInit{

  @HostBinding('style.backgroundColor') myBackgroundColor!: string;
  @HostBinding('style.fontSize') myFontSize!: string;

  constructor() { }

  ngOnInit() {
    
  }

  @HostListener ('mouseenter') mouseEnterEvent (eventData: Event){
    this.myBackgroundColor = 'beige';
    this.myFontSize = '30px'
  }

  @HostListener ('mouseleave') mouseLeaveEvent (eventData: Event){
    this.myBackgroundColor = 'transparent';
    this.myFontSize = ''
  }
}
