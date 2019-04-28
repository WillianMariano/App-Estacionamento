import { Component } from '@angular/core';
import { ServicosService } from '../servicos.service';
import { AlertController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  constructor(public service: ServicosService, public alert: AlertController){
  }

  ngOnInit() {
  }

  Verificar(){
    this.service.verifica=this.service.Verifica(this.service.codigo);
    if(this.service.verifica==true){
      this.Pago();
    }
    else{
      this.NPago();
      
    }
  }

  async Pago() {
    const pago = await this.alert.create({
      header: 'Alerta',
      message: 'Ticket pago',
      buttons: ['Fechar']
    });
    await pago.present();
  }

  async NPago() {
    const npago = await this.alert.create({
      header: 'Alerta',
      message: 'Ticket liberado para pagamento',
      buttons: ['Fechar']
    });
    await npago.present();
  }
}
