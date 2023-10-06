import { AbstractControl, ValidationErrors } from '@angular/forms';


export function emailValidator(control: AbstractControl): ValidationErrors | null {
    const emailValue = control.value as string;
  
    // Utilisation d'un regex pour valider le format de l'email
    const emailRegex = /^[\w-]+(\.[\w-]+)*@[\w-]+(\.[\w-]+)+$/;
    const isValidEmailFormat = emailRegex.test(emailValue);
  
    // On vérifie si l'email se termine par "wilder.school"
    const endsWithWilderSchool = emailValue.endsWith('wilder.school');
  
    if (!isValidEmailFormat) {
      return { 'invalidEmailFormat': true };
    }
  
    if (!endsWithWilderSchool) {
      return { 'emailNotEndingWithWilderSchool': true };
    }
  
    return null;
  }