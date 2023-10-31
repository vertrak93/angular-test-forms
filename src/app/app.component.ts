import { Component, inject } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  formBuilder:FormBuilder = inject(FormBuilder);
  title = 'components-form';

  form!:FormGroup;

  constructor(){
    this.form = this.formBuilder.group({
      Id: ['',[Validators.required]],
      Name: ['',[Validators.required]],
      Phone: ['', [Validators.required]],
      region: this.formBuilder.group({
        Country: ['', [Validators.required]],
        Zip: ['',[Validators.required]]
      })
    });
  }

  form2: FormGroup = new FormGroup({
    Id: new FormControl('',[Validators.required]),
    Name: new FormControl('',[Validators.required]),
    Phone: new FormControl('',[Validators.required]),
    region: new FormGroup({
      Country: new FormControl('',[Validators.required]),
      Zip: new FormControl('', [Validators.required])
    })
    
  });

  result?:any;

  submit(){
    debugger;
    if(this.form.valid){
      this.result = 'Ok!';
    }
    else{
      this.form.markAllAsTouched();
      this.result = 'Error!';
    }

  }

  get region(): FormGroup{
    return this.form?.get('region') as FormGroup;
  }

}
