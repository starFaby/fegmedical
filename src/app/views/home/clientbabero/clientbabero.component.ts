import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-clientbabero',
  templateUrl: './clientbabero.component.html',
  styleUrls: ['./clientbabero.component.scss']
})
export class ClientbaberoComponent implements OnInit {
  data = [
    {
      id: 1,
      title: 'Babero',
      subtitle: 'fegmedical',
      img: 'https://res.cloudinary.com/dqmbrjl7jfs/image/upload/v1633373564/fegmedical/babero/babero_h5v0w2.png',
      description: 'Tela Cambrela de 45 gramos - desechable - no esteril',
      estado: 1

    }

  ]
  constructor() { }

  ngOnInit(): void {
  }

}
