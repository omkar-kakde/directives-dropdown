import { Directive, ElementRef, OnInit } from "@angular/core";


@Directive({
    selector : '[appBasicCss]'
})
export class   basicsCssDirectives implements OnInit{
   constructor(private er: ElementRef){
     

   }
  ngOnInit(): void {
          console.log(this.er.nativeElement);
        this.er.nativeElement.style.backgroundColor = "orange";
        this.er.nativeElement.style.color = "#fff";
        this.er.nativeElement.style.padding = "10px"


      }
};