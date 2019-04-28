import { Component } from '@angular/core';
import { ServicosService } from '../servicos.service';
import { ticket } from '../ticket';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  pagos: ticket[];

  constructor(public servico: ServicosService){
    this.pagos = servico.Pagos();
  }
}
