import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-clientgorro',
  templateUrl: './clientgorro.component.html',
  styleUrls: ['./clientgorro.component.scss']
})
export class ClientgorroComponent implements OnInit {
  data = [
    {
      id: 1,
      title: 'Gorro',
      subtitle: 'fegmedical',
      img: 'https://res.cloudinary.com/dqmbrjl7jfs/image/upload/v1633373563/fegmedical/gorro/gorro_eh0ir4.png',
      description: 'Tela Cambrela de 45 gramos - desechable - no esteril',
      estado: 1

    }

  ]
  constructor() { }

  ngOnInit(): void {
  }

}
