import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-clienternoenf',
  templateUrl: './clienternoenf.component.html',
  styleUrls: ['./clienternoenf.component.scss']
})
export class ClienternoenfComponent implements OnInit {
  data = [
    {
      id: 1,
      title: 'Terno de enfermero',
      subtitle: 'fegmedical',
      img: 'https://res.cloudinary.com/dqmbrjl7jfs/image/upload/v1633373560/fegmedical/ternoenfermero/ternoEnfermero_fy3xvp.jpg',
      description: 'Tela Cambrela de 45 gramos - desechable - no esteril',
      estado: 1
    },
    {
      id: 2,
      title: 'Pantalon',
      subtitle: 'fegmedical',
      img: 'https://res.cloudinary.com/dqmbrjl7jfs/image/upload/v1633374278/fegmedical/ternoenfermero/pantalonstandar_sdz1xl.jpg',
      description: 'Tela Cambrela de 45 gramos - desechable - no esteril',
      estado: 1
    }

  ]
  constructor() { }

  ngOnInit(): void {
  }

}
