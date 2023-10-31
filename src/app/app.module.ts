import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { SelectComponentComponent } from './select-component/select-component.component';
import { PhoneComponentComponent } from './phone-component/phone-component.component';

@NgModule({
  declarations: [
    AppComponent,
    SelectComponentComponent,
    PhoneComponentComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
