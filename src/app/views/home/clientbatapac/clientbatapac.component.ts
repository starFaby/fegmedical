import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-clientbatapac',
  templateUrl: './clientbatapac.component.html',
  styleUrls: ['./clientbatapac.component.scss']
})
export class ClientbatapacComponent implements OnInit {
  data = [
    {
      id: 1,
      title: 'Bata de Paciente Standar',
      subtitle: 'fegmedical',
      img: 'https://res.cloudinary.com/dqmbrjl7jfs/image/upload/v1633373564/fegmedical/batapaciente/paciente1_cjfcti.png',
      description: 'Tela Cambrela de 45 gramos - desechable - no esteril',
      estado: 1
    }
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
