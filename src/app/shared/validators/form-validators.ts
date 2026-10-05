import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

/**
 * Rechaza valores vacíos o solo espacios ("   ") que `Validators.required` deja pasar.
 */
export const notBlank: ValidatorFn = (control: AbstractControl): ValidationErrors | null => {
  const value = control.value;
  return typeof value === 'string' && value.length > 0 && value.trim().length === 0
    ? { blank: true }
    : null;
};

/**
 * Email más estricto que `Validators.email`, que acepta "a@b" (sin dominio de primer nivel).
 * Exige: algo@dominio.tld sin espacios y con TLD de 2+ letras.
 */
const EMAIL_PATTERN = /^[^\s@]+@[^\s@.]+(\.[^\s@.]+)*\.[A-Za-z]{2,}$/;

export const strictEmail: ValidatorFn = (control: AbstractControl): ValidationErrors | null => {
  const value = control.value;
  if (typeof value !== 'string' || value.length === 0) {
    return null; // vacío lo gestiona `required`
  }
  return EMAIL_PATTERN.test(value.trim()) ? null : { email: true };
};
