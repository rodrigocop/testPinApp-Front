import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Cliente } from 'src/app/models/Cliente';
import { ClienteService } from 'src/app/services/client.service';

@Component({
  selector: 'app-crear-cliente',
  templateUrl: './crear-cliente.component.html',
  styleUrls: ['./crear-cliente.component.css']
})
export class CrearClienteComponent implements OnInit {
  public form: FormGroup;
  public loading = false;
  public titulo = 'Agregar Cliente';

  constructor(private formBuilder: FormBuilder,
              private clienteService: ClienteService,
              private toastr: ToastrService) {
    this.form = this.formBuilder.group({
      nombre: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(16)]],
      apellido: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(16)]],
      fechaNacimiento: ['', Validators.required],
      edad: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(3)]],
    })
   }

  ngOnInit(): void {
  }

  public guardarCliente(valueForm: Cliente):void {
    const cliente: Cliente = valueForm;
    this.loading = true;
    this.clienteService.guardarCliente(cliente).then(() => {
      this.loading = false;
      this.toastr.success('El cliente fue registrado con exito!', 'Cliente registrado')
      this.form.reset();
    }, error => {
      this.loading = false;
      this.toastr.error('Opps.. ocurrio un error', 'Error');
    });
  }

}
