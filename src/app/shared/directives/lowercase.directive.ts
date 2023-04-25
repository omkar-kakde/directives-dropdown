import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appLowercase]'
})
export class LowercaseDirective {

  constructor(private eleref: ElementRef) { }

@HostListener('keyup')
onKeyUp(){
  let ele = this.eleref.nativeElement as HTMLInputElement;
  let val = ele.value as string;
  console.log(val);
   this.eleref.nativeElement.value = val.toLocaleLowerCase();

}

}
