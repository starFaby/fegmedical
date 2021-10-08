import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.scss']
})
export class StartComponent implements OnInit {
  data = [
    {
      id: 1,
      title: 'Bata de Cirujano',
      subtitle: 'fegmedical',
      img: 'https://res.cloudinary.com/dqmbrjl7jfs/image/upload/v1633373561/fegmedical/slide/slide1_yt2y2o.png',
      description: 'Bata de cirujano manga larga con puno para uso único de protección y seguridad al medico se usa para procedimientos quirúrgicos y control de fluidos.',
      estado: 1

    },
    {
      id: 2,
      title: 'Tela Cambrela',
      subtitle: 'fegmedical',
      img: 'https://res.cloudinary.com/dqmbrjl7jfs/image/upload/v1633568029/fegmedical/telacambrella_h1ses9.jpg',
      description: 'El textil no tejido también conocido como cambrel o cambrela, es un material formado por fibras unidas al azar, es decir que las fibras no forman hilos y pueden ser orgánicas o sintéticas (plásticas), aunque la mayoría de los productos elaborados con este material tienen fibras sintéticas.',
      estado: 1

    },
    {
      id: 3,
      title: 'Terno de Enfermero',
      subtitle: 'fegmedical',
      img: 'https://res.cloudinary.com/dqmbrjl7jfs/image/upload/v1633373560/fegmedical/ternoenfermero/ternoEnfermero_fy3xvp.jpg',
      description: 'Las túnicas y batas de enfermería pueden tener cuello en V, cuello asimétrico, modelos largos, cortos o en forma de kimonos sin contar la inmensa variedad de colores que se pueden llegar a encontrar hoy en día. Tambien puede formarse de camisa y pantalon',
      estado: 1

    },
    {
      id: 4,
      title: 'babero desechable',
      subtitle: 'fegmedical',
      img: 'https://res.cloudinary.com/dqmbrjl7jfs/image/upload/v1633373564/fegmedical/babero/babero_h5v0w2.png',
      description: 'Un babero desechable es una porción de tejido de celulosa que se utiliza principalmente para evitar que el agua, los alimentos y otras sustancias se derramen sobre la ropa del usuario.',
      estado: 1

    },
    {
      id: 5,
      title: 'Mascarillas',
      subtitle: 'fegmedical',
      img: 'https://res.cloudinary.com/dqmbrjl7jfs/image/upload/v1633373559/fegmedical/mascarillazul/maskBlueMedium_ymvnpv.jpg',
      description: 'Mascarillas para procedimientos médicos (a veces llamadas mascarillas quirúrgicas o mascarillas desechables) Las mascarillas para procedimientos médicos son mascarillas de un solo uso que no están confeccionadas con tela ni están diseñadas para ser lavadas, ya sea a mano o a máquina.',
      estado: 1

    }
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
