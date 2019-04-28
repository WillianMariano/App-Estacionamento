import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ServicosService } from '../servicos.service';
import { ticket } from '../ticket';
import { disableBindings } from '@angular/core/src/render3';

@Component({
  selector: 'app-pagar',
  templateUrl: './pagar.page.html',
  styleUrls: ['./pagar.page.scss'],
})
export class PagarPage implements OnInit {

  ticket : ticket;
  inicio;
  final;
  dia=120;//valor 24 horas a 5 reias a hora
  
  constructor(private router: Router, private route: ActivatedRoute, public service: ServicosService) { 
    this.ticket=new ticket();
    this.route.params.subscribe(data =>{this.ticket.codigo = data.codigo;});
  }

  ngOnInit() {
  }

  Valor() {
    let total;
    let entrada = this.inicio.split(":");
    let horaentrada = entrada[0];
    let minutoentrada = entrada[1];
    let saida = this.final.split(":");
    let horasaida = saida[0];
    let minutosaida = saida[1];

    let totalentrada = (horaentrada * 60) + parseInt(minutoentrada);
    let totalsaida = (horasaida * 60) + parseInt(minutosaida);

    if(totalsaida > totalentrada){
      total = totalsaida - totalentrada;
      total = total / 60;
      if(!Number.isInteger(total)){
        let X = Math.round(total);
        if(X > total){
          total = Math.round(total);   
        }else{
          total = X + 1; 
        }
      }
      this.service.valor=total*5;
    }
    else{
      total = totalentrada - totalsaida;
      total = total / 60;
      if(!Number.isInteger(total)){
        let X = Math.round(total);
        if(X > total){
          total = Math.round(total);   
        }else{
          total = X + 1; 
        }
      }
      this.service.valor=total*5;
      this.service.valor=this.service.valor+this.dia;
    }
  }

  Pagar(){
    if(this.service.valor != 0){
        this.ticket.hrinicial=this.inicio;
        this.ticket.hrfinal=this.final;
        this.ticket.valor=this.service.valor;
        this.service.Add(this.ticket);
        this.service.verifica=true;
        this.service.codigo='';
        this.service.valor=0;
        this.router.navigate(['/tabs/tab1']);
    }
  }

  Return(){
    this.service.verifica=true;
    this.service.codigo='';
    this.router.navigate(['/tabs/tab1']);
  }
}
