let aboutObjects = [
  {
    icon: "./images/design.svg",
    title: "Frontend Design",
    desc:
      "HTML/CSS, JavaScript, Accessibility, User Interface Design, CSS Layout / Grids, Responsive Web Design, CSS Animation, Scalable Vector Graphics",
  },

  {
    icon: "./images/backend.svg",
    title: "Backend Development",
    desc:
      "PHP, MySQL, Node.js, Express, MongoDB, Python, Creation of functional APIs, Design of service architecture, Writing re-usable unit test documents",
  },
  {
    icon: "./images/uxui.svg",
    title: "UX UI Design",
    desc:
      "Wireframing, UI Prototyping, Landing Pages, User Flow, Mobile App Design, Web App, User Research, Interaction Design, Visual Communication",
  },
];

class Card {
  constructor(icon, title, desc) {
    this.icon = icon;
    this.title = title;
    this.desc = desc;
  }

  render() {
    return ` <div class="about-card">
            <div class="image-container">
              <img src="${this.icon}" alt="design logo" />
            </div>
            <p class="skill-title">${this.title}</p>
            <p class="feature-desc">
              ${this.desc}
            </p>
          </div>`;
  }
}

class Title {
  constructor(title) {
    this.title = title;
  }

  render() {
    return this.title;
  }
}
