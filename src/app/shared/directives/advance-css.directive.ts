import { Directive, ElementRef, HostListener, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appAdvanceCss]'
})
export class AdvanceCssDirective implements OnInit{

  constructor(private eleRef: ElementRef, private renderer : Renderer2) {
          
  
   }
  ngOnInit(): void {
      this.renderer.setStyle(this.eleRef.nativeElement, 'background-color' , 'blue')
      this.renderer.setStyle(this.eleRef.nativeElement, 'color', 'red')
      this.renderer.setStyle(this.eleRef.nativeElement, 'padding', '10px')

  }

   @HostListener('mouseover') onMouseOver(){
     this.renderer.setStyle(this.eleRef.nativeElement, "background-color", "hotpink")
   }

   @HostListener('mouseout') onMouseOut(){
    this.renderer.setStyle(this.eleRef.nativeElement, 'background-color', 'blueviolet')
   }
};


