import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { basicsCssDirectives } from './shared/directives/basicsCss.directives';
import { AdvanceCssDirective } from './shared/directives/advance-css.directive';
import { AppmoreadvancecssDirective } from './shared/directives/appmoreadvancecss.directive';
import { LowercaseDirective } from './shared/directives/lowercase.directive';
import { ToggleDirective } from './shared/directives/toggle.directive';
import { CreditCardDirective } from './shared/directives/credit-card.directive';

@NgModule({
  declarations: [
    AppComponent,
    basicsCssDirectives,
    AdvanceCssDirective,
    AppmoreadvancecssDirective,
    LowercaseDirective,
    ToggleDirective,
    CreditCardDirective
  ],
  imports: [
    BrowserModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
