import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit {

  public items: Array<any> = 
  [
    {
      title: "HTML",
      images: [
        {
          src: "../../../../assets/html5.png",
          subtitle: "HTML5"
        },
        {
          src: "../../../../assets/react.png",
          subtitle: "JSX"
        }
      ]
    },
    {
      title: "CSS",
      images: [
        {
          src: "../../../../assets/css3.png",
          subtitle: "CSS3"
        },
        {
          src: "../../../../assets/sass.png",
          subtitle: "SASS"
        },
        {
          src: "../../../../assets/bootstrap.png",
          subtitle: "BOOTSTRAP"
        },
        {
          src: "../../../../assets/materialize.png",
          subtitle: "MATERIALIZE"
        },
        {
          src: "../../../../assets/angular.png",
          subtitle: "ANGULAR MATERIAL"
        }
      ]
    },
    {
      title: "JAVASCRIPT",
      images: [
        {
          src: "../../../../assets/javascript.png",
          subtitle: "JAVASCRIPT"
        },
        {
          src: "../../../../assets/jquery.png",
          subtitle: "JQUERY"
        },
        {
          src: "../../../../assets/nodejs.png",
          subtitle: "NODE JS"
        },
        {
          src: "../../../../assets/ionic.png",
          subtitle: "IONIC"
        },
        {
          src: "../../../../assets/angular.png",
          subtitle: "ANGULAR 2+"
        },
        {
          src: "../../../../assets/react.png",
          subtitle: "REACT"
        }
      ]
    },
    {
      title: "BACK-END",
      images: [
        {
          src: "../../../../assets/csharp.png",
          subtitle: "C#"
        },
        {
          src: "../../../../assets/mongodb.png",
          subtitle: "MONGO DB"
        },
        {
          src: "../../../../assets/mysql.png",
          subtitle: "MYSQL"
        },
        {
          src: "../../../../assets/nodejs.png",
          subtitle: "NODE JS"
        }
      ]
    },
    {
      title: "BUILD TOOLS",
      images: [
        {
          src: "../../../../assets/webpack.png",
          subtitle: "WEBPACK"
        },
        {
          src: "../../../../assets/gulp.png",
          subtitle: "GULP"
        },
        {
          src: "../../../../assets/npm.png",
          subtitle: "NPM SCRIPTS"
        }
      ]
    },
    {
      title: "OTHER",
      images: [
        {
          src: "../../../../assets/github.png",
          subtitle: "GITHUB"
        },
        {
          src: "../../../../assets/photoshop.png",
          subtitle: "PHOTOSHOP"
        },
        {
          src: "../../../../assets/premiere.png",
          subtitle: "PREMIERE"
        },
        {
          src: "../../../../assets/devops.png",
          subtitle: "AZURE DEVOPS"
        },
        {
          src: "../../../../assets/bitbucket.png",
          subtitle: "BITBUCKET"
        }
      ]
    }
  ]

  constructor() { }

  ngOnInit() {
  }

  

}
