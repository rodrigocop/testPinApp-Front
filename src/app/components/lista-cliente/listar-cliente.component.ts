import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Cliente } from 'src/app/models/Cliente';
import { ClienteService } from 'src/app/services/client.service';

@Component({
  selector: 'app-listar-cliente',
  templateUrl: './listar-cliente.component.html',
  styleUrls: ['./listar-cliente.component.css']
})
export class ListarClienteComponent implements OnInit {
  public listCliente: Cliente[] = [];

  constructor(private clienteService: ClienteService, 
              private toastr: ToastrService) { }

  ngOnInit(): void {
    this.getClientes();
  }

  public getClientes(): void {
    this.clienteService.getClientes().subscribe(response => {
      this.listCliente = [];
      response.forEach((element: any) => {
        this.listCliente.push({
          id: element.payload.doc.id,
          ...element.payload.doc.data()
        });
      });
    });
  }
}
