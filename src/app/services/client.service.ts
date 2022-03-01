import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable, Subject } from 'rxjs';
import { Cliente } from '../models/Cliente';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {


  constructor(private firestore: AngularFirestore) { }

  guardarCliente(cliente: Cliente): Promise<any> {
    return this.firestore.collection('cliente').add(cliente);
  }

  getClientes():Observable<any>  {
    return this.firestore.collection('cliente', ref => ref.orderBy('edad', 'asc')).snapshotChanges();  
  }
}


