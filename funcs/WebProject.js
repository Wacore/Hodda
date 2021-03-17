let projectItems = {
  gamedora: {
    title: "Gamedora",
    desc:
      "Gamedora is a platform that helps gamers who are at a loss for what to play next and provides them an opportunity to share their opinions. Let your voice be heard and help other people find their favorite games.",
    img: "./images/gamedora-m.png",
  },
  vacayelp: {
    title: "VacaYelp",
    desc:
      "VacaYelp is a travel platform that helps travelers make every trip their best trip. Travelers can browse reviews and opinions post by other users and compare low prices on hotels, flights, and cruises.",
    img: "./images/vacayelp-m.png",
  },
  inpex: {
    title: "Inpex",
    desc:
      "Inpex is a platform that helps you access thousands of photos. At the same time, it's also a platform for many gifted photographers to share the most impressive moment with others.",
    img: "./images/inpex-m.png",
  },
};

class Project {
  constructor(title, desc, img) {
    this.title = title;
    this.desc = desc;
    this.img = img;
  }

  getTitle() {
    return this.title;
  }

  getDesc() {
    return this.desc;
  }

  getImg() {
    return `<img src=${this.img} alt="${this.title}" />`;
  }
}

function switchWebProjectSection(keyword) {
  $(".animated-text, .image-content").addClass("active");
  setTimeout(() => {
    $(".animated-text, .image-content").removeClass("active");
    $("#projectTitle").text(item.getTitle());
    $("#projectDesc").text(item.getDesc());
    $("#websitesImage").html(item.getImg());
  }, 500);

  // console.log(projectItems[keyword].title);
  let item = new Project(
    projectItems[keyword].title,
    projectItems[keyword].desc,
    projectItems[keyword].img
  );
}
