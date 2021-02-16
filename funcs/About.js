let aboutObject = {
  slogan: "Productive <br />Creative <br /> Reliable",
  position:
    "Currently, I am a web designer and developer and a mobile app developer, who can work on many diverse projects.",
  mission:
    "I work to create innovative products with excellent aesthetics and functionality based on my deep understanding of the product and its users. Through my works, my clients can easily set up a new business and let their products being discovered by many people.",
  meto:
    "Design is not just what it looks like and feels like. Design is how it works.",
  author: "- Steve Jobs",
  render: function () {
    return `<div class="about-me-box">
            <div class="about-me-content">
              <h2>
               ${this.slogan}
              </h2>
              <p>
                ${this.position}
              </p>
              <p>
                ${this.mission}
              </p>
            </div>
            <div class="about-me-side">
              <p class="meto">
                ${this.meto}
              </p>
              <p>${this.author}</p>
            </div>
          </div>`;
  },
};

const renderAboutSection = (keyword) => {
  let title = document.querySelector(".about-title");
  let box = document.querySelector(".about-cards-box");
  if (keyword === "ability") {
    let renderItem = "";
    let ti = new Title("What I do");
    aboutObjects.map((a) => {
      renderItem += new Card(a.icon, a.title, a.desc).render();
      return renderItem;
    });

    title.innerHTML = ti.render();
    box.innerHTML = renderItem;
  } else if (keyword === "skills") {
    let renderItem = "";
    let ti = new Title("Skill Set");
    skillObjects.map((s) => {
      renderItem += new Skill(s.name, s.img).render();
      return renderItem;
    });

    title.innerHTML = ti.render();
    box.innerHTML = `<div class="skills-box">${renderItem}</div>`;
  } else if (keyword === "about") {
    let ti = new Title("About");
    title.innerHTML = ti.render();
    box.innerHTML = aboutObject.render();
  }
};
