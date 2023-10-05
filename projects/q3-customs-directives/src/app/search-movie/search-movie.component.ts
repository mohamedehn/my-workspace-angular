import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, ValidationErrors, ValidatorFn } from '@angular/forms';


@Component({
  selector: 'app-search-movie',
  templateUrl: './search-movie.component.html',
  styleUrls: ['./search-movie.component.css']
})

export class SearchMovieComponent implements OnInit{

  formSubmitted: boolean = false;


  ficheDetails = [
    { label: 'Courte', value: 'courte' },
    { label: 'Complète', value: 'complete' }
  ];

  typeDetails = [
    { label: 'Film', value: 'film'},
    { label: 'Série', value: 'serie'},
    { label: 'Episode', value: 'episode'},
  ]

  filmForm = this.fb.group({
    info: new FormGroup({
      identifier: new FormControl(''),
      title: new FormControl('')},
      [this.isRequiredValidator('identifier', 'title')]
    ),
    type: new FormGroup({
      details: new FormControl('serie'),
    }),
    years: new FormControl('', [this.rangeDateValidator(1900, new Date().getFullYear())]),
    fiche: new FormGroup({
      details : new FormControl('')
    })
  });

  constructor(private fb: FormBuilder){

  }

  ngOnInit(): void {
    this.filmForm.patchValue({
      fiche: {
        details: 'courte'
      }
    });
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
