import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private alertCtrl: AlertControleler) {}

  async showAdd(){
    const alert = await this.alertCtrl.create({
      cssClass: 'my-custon-class',
      header: 'O que você deseja fazer?',
      inputs: [
        {
          name: 'tarefa1',
          type: 'text',
          placeholder: 'Digite o que deseja fazer.',
        },
      ],
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          cssClass: 'secondary',
          handler:() => {
            console.log('Adcicionado com sucesso!');
          },
        },
      ],
    });
  await alert.present();
  }
}
