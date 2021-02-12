let skillObjects = [
  {
    name: "HTML",
    img: "./images/icons/html5.svg",
  },

  {
    name: "CSS",
    img: "./images/icons/css3.svg",
  },

  {
    name: "Javascript",
    img: "./images/icons/javascript.svg",
  },

  {
    name: "PHP",
    img: "./images/icons/php.svg",
  },

  {
    name: "MySQL",
    img: "./images/icons/mysql.svg",
  },

  {
    name: "Node.JS",
    img: "./images/icons/node-dot-js.svg",
  },
  {
    name: "React & React Native",
    img: "./images/icons/react.svg",
  },

  {
    name: "Angular",
    img: "./images/icons/angular.svg",
  },

  {
    name: "Redux",
    img: "./images/icons/redux.svg",
  },

  {
    name: "Python",
    img: "./images/icons/python.svg",
  },

  {
    name: "Sass",
    img: "./images/icons/sass.svg",
  },

  {
    name: "TypeScript",
    img: "./images/icons/typescript.svg",
  },
];

class Skill {
  constructor(name, img) {
    this.name = name;
    this.img = img;
  }

  render() {
    return ` <div class="skill-card">
              <div class="skill-icon-box">
                <img src=${this.img} alt="HTML icon" />
              </div>
              <span>${this.name}</span>
            </div>`;
  }
}
