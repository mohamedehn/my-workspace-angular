import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, ValidationErrors, ValidatorFn } from '@angular/forms';


@Component({
  selector: 'app-search-movie',
  templateUrl: './search-movie.component.html',
  styleUrls: ['./search-movie.component.css']
})

export class SearchMovieComponent implements OnInit{

  formSubmitted: boolean = false

  filmForm = this.fb.group({
    info: new FormGroup({
      identifier: new FormControl(''),
      title: new FormControl('')},
      [this.isRequiredValidator('identifier', 'title')]
    ),
    type: new FormGroup({
      film: new FormControl(''),
      serie: new FormControl('serie'),
      episode: new FormControl(''),
    }),
    years: new FormControl('', [this.rangeDateValidator(1900, new Date().getFullYear())]),
    fiche: new FormGroup({
      complete: new FormControl(''),
      courte: new FormControl('')
    })
  });

  constructor(private fb: FormBuilder){

  }

  ngOnInit(): void {
    
  }

  onSubmit() {
    console.log('filmForm envoyé : ', this.filmForm.value);
    this.formSubmitted = true;
  }

  rangeDateValidator(minimum: number, maximum: number): ValidatorFn{
    return (control: AbstractControl) : ValidationErrors | null =>{
      const years = control.value
      if(!years || years < minimum || years > maximum){
        return {'min' : {min: minimum, max: maximum}}
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
