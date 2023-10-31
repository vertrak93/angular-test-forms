import { Component, Input } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-select-component',
  templateUrl: './select-component.component.html',
  styleUrls: ['./select-component.component.scss']
})
export class SelectComponentComponent {

  @Input() region!: FormGroup;

}
