import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'directives';

  onKeyUp(eve:any){
    console.log(eve.target.value);
    
  }
};

