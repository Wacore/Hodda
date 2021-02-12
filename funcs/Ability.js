let aboutObjects = [
  {
    icon: "./images/design.svg",
    title: "Frontend Design",
    desc:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptas ipsam possimus ad consectetur! Quia mollitia obcaecati officia vel doloribus, exercitationem suscipit eum ad ut veniam a iusto alias rem placeat.",
  },

  {
    icon: "./images/backend.svg",
    title: "Backend Development",
    desc:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptas ipsam possimus ad consectetur! Quia mollitia obcaecati officia vel doloribus, exercitationem suscipit eum ad ut veniam a iusto alias rem placeat.",
  },
  {
    icon: "./images/uxui.svg",
    title: "UX UI Design",
    desc:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptas ipsam possimus ad consectetur! Quia mollitia obcaecati officia vel doloribus, exercitationem suscipit eum ad ut veniam a iusto alias rem placeat.",
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
    return `<h2 class="about-title">${this.title}</h2>`;
  }
}
