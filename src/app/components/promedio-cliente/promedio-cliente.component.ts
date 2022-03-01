import { Component, OnInit } from '@angular/core';
import { Cliente } from 'src/app/models/Cliente';
import { ClienteService } from 'src/app/services/client.service';

@Component({
  selector: 'app-promedio-cliente',
  templateUrl: './promedio-cliente.component.html',
  styleUrls: ['./promedio-cliente.component.css']
})
export class PromedioClienteComponent implements OnInit {

  public promedio: number = 0;
  public desviacion: number = 0;

  constructor(private clienteService: ClienteService) { }


  ngOnInit(): void {
    const listadoCliente: Cliente[] = [];
    this.clienteService.getClientes().subscribe(response => {
      response.forEach((element: any) => {
        listadoCliente.push({
          id: element.payload.doc.id,
          ...element.payload.doc.data()
        });
      });
      this.promedio = this.calcularPromedio(listadoCliente);
      this.desviacion = this.calcularDesviacion(this.promedio, listadoCliente);
    });
  }

  calcularDesviacion(promedio: number, listadoCliente: Cliente[]): number {
    let desviacion = 0;
    listadoCliente.forEach(cliente => {
      desviacion += Math.pow(cliente.edad - promedio, 2);
    });
    desviacion = desviacion / listadoCliente.length;
    desviacion = Math.sqrt(desviacion);
    return desviacion;
  }

  calcularPromedio(listadoCliente: Cliente[]): number {
    let promedio = 0;
    listadoCliente.forEach((cliente:Cliente) => {
      promedio += cliente.edad;
    });
    return promedio / listadoCliente.length;
  }

}


