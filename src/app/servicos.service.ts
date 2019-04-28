import { Injectable } from '@angular/core';
import { ticket } from './ticket';

@Injectable({
  providedIn: 'root'
})
export class ServicosService {

  pagos=[
    {codigo: '1', hrinicial:'09:10',hrfinal:'11:10',valor: 5.00},
    {codigo: '2', hrinicial:'14:05',hrfinal:'16:05',valor: 10.00},
    {codigo: '3', hrinicial:'15:35',hrfinal:'16:30',valor: 5.00}
  ];
  verifica:boolean=true;
  codigo:string='';
  valor:number=0;

  constructor() { }

  Pagos(): ticket[]{
    return this.pagos;
  }

  Add(t: ticket){
    this.pagos.push(t);
  }

  Verifica(codigo:string):boolean{
    let verifica = this.pagos.find(c => c.codigo == codigo)
    if(verifica==null){
      return false;
    }
    else{
      return true;
    }
  }
}
