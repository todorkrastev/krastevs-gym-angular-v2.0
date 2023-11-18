import { FormControl, ValidationErrors } from "@angular/forms";

export class KrastevsGymValidators {
    static notOnlyWhitesapce(control: FormControl): ValidationErrors | null {
        if ((control.value != null) && (control.value.trim().length === 0)) {
            return { 'notOnlyWhiteSpace': true };
        } else {
            return null;
        }
    }
}
