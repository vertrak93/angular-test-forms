import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-phone-component',
  templateUrl: './phone-component.component.html',
  styleUrls: ['./phone-component.component.scss']
})
export class PhoneComponentComponent {

  @Input() form!: FormGroup;

}
