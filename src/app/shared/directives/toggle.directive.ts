import { parseHostBindings } from '@angular/compiler';
import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appToggle]'
})
export class ToggleDirective {

  constructor() { }
  // @HostBinding('show') class!:string;
  @HostListener('click', ['$event'])
  onclickhandler(eve : Event){
        console.log("cliked!!!");
        let dropmenu = eve.target as HTMLElement;
        console.log(dropmenu);
        dropmenu.nextElementSibling?.classList.toggle('show')

  }

}
