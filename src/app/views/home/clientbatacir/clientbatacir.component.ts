import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-clientbatacir',
  templateUrl: './clientbatacir.component.html',
  styleUrls: ['./clientbatacir.component.scss']
})
export class ClientbatacirComponent implements OnInit {
  data = [
    {
      id: 1,
      title: 'Bata de Cirujano Standar',
      subtitle: 'fegmedical',
      img: 'https://res.cloudinary.com/dqmbrjl7jfs/image/upload/v1633373565/fegmedical/batacirujano/cirujano1_hkp8qn.png',
      description: 'Tela Cambrela de 45 gramos - desechable - no esteril',
      estado: 1
    }
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
