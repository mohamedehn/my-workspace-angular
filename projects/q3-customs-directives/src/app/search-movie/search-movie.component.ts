import { Component } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, ValidationErrors, ValidatorFn } from '@angular/forms';


@Component({
  selector: 'app-search-movie',
  templateUrl: './search-movie.component.html',
  styleUrls: ['./search-movie.component.css']
})
export class SearchMovieComponent {

  filmForm = this.fb.group({
    info: new FormGroup({
      identifier: new FormControl(''),
      title: new FormControl('')},
      [this.isRequiredValidator('identifier', 'title')]
    ),
    type: new FormGroup({
      film: new FormControl(''),
      serie: new FormControl(''),
      episode: new FormControl('')
    }),
    years: new FormControl('', [this.rangeDateValidator()]),
    fiche: new FormGroup({
      full: new FormControl(''),
      small: new FormControl('')
    })
  });

  constructor(private fb: FormBuilder){

  }

  onSubmit() {
    console.log('filmForm envoyé : ', this.filmForm.value);
    
  }

  rangeDateValidator(): ValidatorFn{
    return (control: AbstractControl) : ValidationErrors | null =>{
      const years = control.value
      const date = new Date().getFullYear()
      if(!years || years < 1900 || years > date){
        return {'rangeDate' : true}
      }else{
        return null
      }
    }
  }

  isRequiredValidator(identifier: string, title: string): ValidatorFn{
    return (control: AbstractControl): ValidationErrors | null => {
      const value1 = control.get(identifier)?.value;
      const value2 = control.get(title)?.value;

      if (!value1 && !value2) {
        return { 'isRequired': true };        
      }else {
        return null
      }
    };    
  }
  
}
