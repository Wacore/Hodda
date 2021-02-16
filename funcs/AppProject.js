const appItems = {
  home: {
    image: "./images/app-home.png",
    alt: "home screen",
  },
  order: {
    image: "./images/app-order.png",
    alt: "order screen",
  },
  dishDetail: {
    image: "./images/app-dish-detail.png",
    alt: "Dish detail screen",
  },
  preplist: {
    image: "./images/app-preplist.png",
    alt: "preplist screen",
  },
  orderDetail: {
    image: "./images/app-order-detail.png",
    alt: "order detail screen",
  },
};

class AppItem {
  constructor(image, alt) {
    this.image = image;
    this.alt = alt;
  }

  getImage() {
    return ` <img src=${this.image} alt=${this.alt} />`;
  }
}

const swtichAppSection = (keyword) => {
  let item = new AppItem(appItems[keyword].image, appItems[keyword].alt);
  $("#naokiAppImage").html(item.getImage());
  $(" #order, #dishDetail, #orderDetail, #preplist").removeClass("active");
  $(`#${keyword}`).toggleClass("active");
};
