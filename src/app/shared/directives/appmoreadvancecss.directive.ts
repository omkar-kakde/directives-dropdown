import { Directive, ElementRef, HostBinding, HostListener, Input, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appAppmoreadvancecss]'
})
export class AppmoreadvancecssDirective implements OnInit{
 @Input() hoverColor = "hotpink"

   @HostBinding('style.background') bgColor : string="bluevoilet"
  constructor(private  eleref : ElementRef, private rendrere: Renderer2) { }
  ngOnInit(): void {
  }

  @HostListener('mouseover')
  onMouseOver(){
    // this.rendrere.setStyle(this.eleref.nativeElement, 'background-color', this.hoverColor)
    this.bgColor = this.hoverColor
  }

  @HostListener('mouseout')
  onMouseOut(){
    // this.rendrere.setStyle(this.eleref.nativeElement , 'background-color', 'bluevoilet')
    this.bgColor= 'blueviolet'
  }
};


