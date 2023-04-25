import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appCreditCard]'
})
export class CreditCardDirective {


constructor() { }
 
@HostBinding('style.border')  border! : string;
@HostListener('input', ['$event'])
onInputHandler(eve : Event){
   let inputControl =  eve.target as HTMLInputElement;
   let inputval = inputControl.value.replace(/\s+/g, '')
   console.log(inputval);
   
   if(inputval.length > 16){
     inputval = inputval.substring(0,16)
   }
   console.log(inputval);
   inputControl.value = inputval
   

   // 123456789012345
  let Numbers : Array<string> = [];

for( let i=0; i< inputval.length;i+=4){
         Numbers.push(inputval.substring(i, i+4))
}
inputControl.value = Numbers.join(" ")
// console.log(/[^\d]/.test(inputval));

 this.border = ''

 if(/[^\d]/.test(inputval)){
  this.border = '2px solid red';
  inputControl.nextElementSibling?.classList.remove('d-none')
 }else{
  inputControl.nextElementSibling?.classList.add('d-none')
  this.border= ''
 }
// if()

// }

}
}