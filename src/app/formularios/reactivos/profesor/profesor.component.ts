// Importamos el decorador Component desde angular core
import { Component } from '@angular/core';
// Importamos la directiva FormControl
import { FormControl, FormGroup, FormBuilder, Validators, FormArray} from '@angular/forms';

// Declaramos el decorador Component y le seteamos el selector y el template o vista que va a tener asociado
@Component({
	selector: 'app-profesor',
	templateUrl: './profesor.component.html'
})
export class ProfesorComponent {
	// Esta va a ser la clase del componente donde vamos a declarar todas las propiedades y métodos. Exportamos la
	// clase para que pueda ser importada desde otrolugar de la aplicación.

    constructor(private fb:FormBuilder){}


	// Creamos una instancia del FormControl.
	nombreControl = new FormControl('Juan'); // En el constructor inicializamos la instancia. En este caso esta vacía.

	setNombre() {
		this.nombreControl.setValue('Pedro');
	}

	profesorForm = this.fb.group({
		nombre: ['', Validators.required],
		apellido: [''],
		edad:[''],
		direccion: this.fb.group({
			calle: [''],
			numero: ['']
        }),
        telefonos : this.fb.array([this.fb.control('')])
    });
    get telefonos(){
        return this.profesorForm.get('telefonos') as FormArray;
    }
    agregarTelefono(){
        this.telefonos.push(this.fb.control(''));
    }

	submit() {
		debugger;
		this.profesorForm.value;

		this.profesorForm.setValue({
			nombre: 'Diego',
			apellido: 'Maradona',
			edad: 59,
			direccion: {
				calle: 'Perez',
				numero: 49
			}
        });

        this.profesorForm.patchValue({edad: 60});
	}
}