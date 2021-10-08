import { Component, OnInit, ViewChild } from '@angular/core';
import { NgbCarousel, NgbSlideEvent, NgbSlideEventSource } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-carrousel',
  templateUrl: './carrousel.component.html',
  styleUrls: ['./carrousel.component.scss']
})
export class CarrouselComponent implements OnInit {
  arrayDates = [
    {
      id:1,
      nombre:"Bata de Cirujano - Frente",
      img:"https://res.cloudinary.com/dqmbrjl7jfs/image/upload/v1633373561/fegmedical/slide/slide1_yt2y2o.png",
      description:'Tela Desechable de 45 gramos',
      estado:1
    },
    {
      id:2,
      nombre:"Bata de Cirujano - Atras",
      img:"https://res.cloudinary.com/dqmbrjl7jfs/image/upload/v1633373560/fegmedical/slide/slide2_dxr6tw.png",
      description:'Tela Desechable de 45 gramos',
      estado:1
    },
    {
      id:3,
      nombre:"Bata de Paciente - frente",
      img:"https://res.cloudinary.com/dqmbrjl7jfs/image/upload/v1633373559/fegmedical/slide/slide3_fjnakt.png",
      description:'Tela Desechable de 45 gramos',
      estado:1
    },
    {
      id:4,
      nombre:"Bata de Paciente - Atras",
      img:"https://res.cloudinary.com/dqmbrjl7jfs/image/upload/v1633373562/fegmedical/slide/slide4_hakuw6.png",
      description:'Tela Desechable de 45 gramos',
      estado:1
    },
    {
      id:5,
      nombre:"Babero",
      img:"https://res.cloudinary.com/dqmbrjl7jfs/image/upload/v1633373561/fegmedical/slide/slide5_u0ptzf.png",
      description:'Tela Desechable de 45 gramos',
      estado:1
    },
    {
      id:6,
      nombre:"Mascarillas azules",
      img:"https://res.cloudinary.com/dqmbrjl7jfs/image/upload/v1633373559/fegmedical/slide/slide7_iyzhs4.jpg",
      description:'Tela Desechable de 45 gramos',
      estado:1
    },
    {
      id:7,
      nombre:"Mascarillas Negras",
      img:"https://res.cloudinary.com/dqmbrjl7jfs/image/upload/v1633373560/fegmedical/slide/slide6_sckvof.jpg",
      description:'Tela Desechable de 45 gramos',
      estado:1
    }
  ]
  paused = false;
  unpauseOnArrow = false;
  pauseOnIndicator = false;
  pauseOnHover = true;
  pauseOnFocus = true;
  @ViewChild('carousel', {static : true}) carousel: NgbCarousel | any;
  constructor() { }

  ngOnInit(): void {
  }
  togglePaused() {
    if (this.paused) {
      this.carousel.cycle();
    } else {
      this.carousel.pause();
    }
    this.paused = !this.paused;
  }

  onSlide(slideEvent: NgbSlideEvent) {
    if (this.unpauseOnArrow && slideEvent.paused &&
      (slideEvent.source === NgbSlideEventSource.ARROW_LEFT || slideEvent.source === NgbSlideEventSource.ARROW_RIGHT)) {
      this.togglePaused();
    }
    if (this.pauseOnIndicator && !slideEvent.paused && slideEvent.source === NgbSlideEventSource.INDICATOR) {
      this.togglePaused();
    }
  }
}
