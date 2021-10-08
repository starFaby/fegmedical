import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-clientmaskblue',
  templateUrl: './clientmaskblue.component.html',
  styleUrls: ['./clientmaskblue.component.scss']
})
export class ClientmaskblueComponent implements OnInit {
  data = [
    {
      id: 1,
      title: 'Mascarilla azul Grande',
      subtitle: 'fegmedical',
      img: 'https://res.cloudinary.com/dqmbrjl7jfs/image/upload/v1633373557/fegmedical/mascarillazul/maskBlueLarge_toiy8v.jpg',
      description: 'Tela Cambrela de 45 gramos - desechable - no esteril',
      estado: 1

    },
    {
      id: 1,
      title: 'Mascarilla azul Mediana',
      subtitle: 'fegmedical',
      img: 'https://res.cloudinary.com/dqmbrjl7jfs/image/upload/v1633373559/fegmedical/mascarillazul/maskBlueMedium_ymvnpv.jpg',
      description: 'Tela Cambrela de 45 gramos - desechable - no esteril',
      estado: 1

    },
    {
      id: 1,
      title: 'Mascarilla azul Pequeña',
      subtitle: 'fegmedical',
      img: 'https://res.cloudinary.com/dqmbrjl7jfs/image/upload/v1633373558/fegmedical/mascarillazul/maskBlueSmall_b6vyer.jpg',
      description: 'Tela Cambrela de 45 gramos - desechable - no esteril',
      estado: 1

    }

  ]
  constructor() { }

  ngOnInit(): void {
  }

}
