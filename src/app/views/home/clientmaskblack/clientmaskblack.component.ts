import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-clientmaskblack',
  templateUrl: './clientmaskblack.component.html',
  styleUrls: ['./clientmaskblack.component.scss']
})
export class ClientmaskblackComponent implements OnInit {
  data = [
    {
      id: 1,
      title: 'Mascarilla Negra Grande',
      subtitle: 'fegmedical',
      img: 'https://res.cloudinary.com/dqmbrjl7jfs/image/upload/v1633373564/fegmedical/mascarillanegra/maskBlackLarge_khoofl.jpg',
      description: 'Tela Cambrela de 45 gramos - desechable - no esteril',
      estado: 1

    },
    {
      id: 2,
      title: 'Mascarilla Negra Mediana',
      subtitle: 'fegmedical',
      img: 'https://res.cloudinary.com/dqmbrjl7jfs/image/upload/v1633373564/fegmedical/mascarillanegra/maskBlackMedium_lerziq.jpg',
      description: 'Tela Cambrela de 45 gramos - desechable - no esteril',
      estado: 1

    },
    {
      id: 3,
      title: 'Mascarilla Negra Pequeña',
      subtitle: 'fegmedical',
      img: 'https://res.cloudinary.com/dqmbrjl7jfs/image/upload/v1633373565/fegmedical/mascarillanegra/maskBlackSmall_gxvpe4.jpg',
      description: 'Tela Cambrela de 45 gramos - desechable - no esteril',
      estado: 1

    }

  ]
  constructor() { }

  ngOnInit(): void {
  }

}
