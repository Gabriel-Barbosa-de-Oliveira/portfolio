import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-work',
  templateUrl: './my-work.component.html',
  styleUrls: ['./my-work.component.scss']
})
export class MyWorkComponent implements OnInit {

  projects: Array<any> = [
    {
      title: "GoCart",
      image: "../../../../assets/gc-consumidor/consumer.png",
      technologies: [
        "Angular 7",
        "Socket.io",
        "Pusher",
        "Swagger",
        "Html5",
        "Sass"
      ]
    },
    {
      title: "GoCart - Lojista",
      image: "../../../../assets/lojista/lojista.png",
      technologies: [
        "Angular 7",
        "Socket.io",
        "Pusher",
        "Swagger",
        "Html5",
        "Sass"
      ]
    },
    {
      title: "GoCart - Catalogo",
      image: "../../../../assets/catalog/catalog.png",
      technologies: [
        "Angular 7",
        "Swagger",
        "Html5",
        "Sass"
      ]
    },
    {
      title: "Jaco Do Gesso",
      image: "../../../../assets/jaco/jaco.png",
      technologies: [
        ".NET 4.0",
        "Html5",
        "Css3",
        "jQuery",
        "Bootstrap",
        "MySql"
      ]
    },
    {
      title: "Mwa",
      image: "../../../../assets/mwa/mwa.png",
      technologies: [
        ".NET 4.0",
        "Html5",
        "Css3",
        "jQuery",
        "Bootstrap",
        "MySql"
      ]
    },
    {
      title: "Blackstone",
      image: "../../../../assets/bs/bs.png",
      technologies: [
        "Html5",
        "Css3",
        "jQuery",
        "Bootstrap"
      ]
    }
  ]

  constructor() { }

  ngOnInit() {
  }

}
