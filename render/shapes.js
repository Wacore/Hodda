let width = "100%";
let height = "100vh";
let w = window.innerWidth;
let h = window.innerHeight;

var svg = d3
  .select(".hero")
  .append("div")
  .classed("svg-container", true)
  .append("svg")
  .attr("preserveAspectRatio", "xMinYMin meet")
  .attr("viewBox", "0 0 16 9 ")
  .classed("svg-content-responsive", true);

let x = "74%";
let y = "50%";
let r = 2.5;

circles = [
  {
    className: "circle",
    cx: "50%",
    cy: "30%",
    r: 0.8,
    fill: "rgb(183,178,217)",
    fillOpacity: 0.63,
  },
  {
    className: "circle",
    cx: x,
    cy: y,
    r: r,
    fill: "rgb(136,191,196)",
    fillOpacity: 0.29,
  },
  {
    className: "circle",
    cx: x,
    cy: y,
    r: r + 0.5,
    fill: "rgb(136,191,196)",
    fillOpacity: 0.29,
  },
  {
    className: "circle",
    cx: "93%",
    cy: "20%",
    r: 0.6,
    fill: "rgb(217,184,178)",
    fillOpacity: 0.63,
  },
  {
    className: "circle",
    cx: "85%",
    cy: "90%",
    r: 0.5,
    fill: "rgb(217,215,178)",
    fillOpacity: 0.82,
  },
  {
    className: "circle",
    cx: x,
    cy: y,
    r: r + 1,
    fill: "rgb(136,191,196)",
    fillOpacity: 0.29,
  },
  {
    className: "circle",
    cx: "10%",
    cy: "15%",
    r: 0.08,
    fill: "rgb(225,28,102)",
    fillOpacity: 1,
  },
  {
    className: "circle",
    cx: "35%",
    cy: "68%",
    r: 0.05,
    fill: "rgb(225,128,28)",
    fillOpacity: 1,
  },
  {
    className: "circle",
    cx: "5%",
    cy: "87%",
    r: 0.15,
    fill: "rgb(28,181,225)",
    fillOpacity: 1,
  },
];

const vShapes = [
  {
    href: "./images/v-shape-b.svg",
    x: x,
    y: y,
    width: 3.5,
    height: 3.5,
    class: "v-shape",
    id: "vShapeMain",
  },
  {
    href: "./images/v-shape-g.svg",
    x: "80%",
    y: "67%",
    class: "v-shape",
  },
  {
    href: "./images/v-shape-g.svg",
    x: "87%",
    y: "45%",
    class: "v-shape",
  },
  {
    href: "./images/v-shape-g.svg",
    x: "60%",
    y: "35%",
    class: "v-shape",
  },
  {
    href: "./images/v-shape-gy.svg",
    x: "82%",
    y: "30%",
    class: "v-shape",
  },
  {
    href: "./images/v-shape-gy.svg",
    x: "65%",
    y: "73%",
    class: "v-shape",
  },
];

function renderShapes() {
  let ratioX;
  let ratioY;
  if (w >= 784 && w < 1200) {
    svg.attr("viewBox", "0 0 16 12 ");
    ratioX = 16;
    ratioY = 12;
  } else if (w < 783 && w >= 500) {
    svg.attr("viewBox", "0 0 16 13 ");
    ratioX = 16;
    ratioY = 13;
  } else if (w < 500) {
    svg.attr("viewBox", "0 0 16 14 ");
    ratioX = 16;
    ratioY = 14;
  }

  svg
    .append("rect")
    .attr("x", 0)
    .attr("y", 0)
    .attr("height", "100vh")
    .attr("width", x)
    .attr("fill", "#eee");

  renderCircles(circles, svg);
  renderVShapes(vShapes, svg, ratioX, ratioY);
}

renderShapes();

window.onresize = function () {
  location.reload();
};

function renderCircles(circles, svg) {
  circles.map((c) =>
    svg
      .append("circle")
      .attr("cx", c.cx)
      .attr("cy", c.cy)
      .attr("r", c.r)
      .attr("fill", c.fill)
      .attr("fill-opacity", c.fillOpacity)
      .attr("class", c.className)
  );
}

function renderVShapes(vShapes, svg, ratioX = 1, ratioY = 1) {
  y = 25;
  y = `${y * (ratioX / ratioY)}%`;

  vShapes.map((v) => {
    if (v.id) {
      svg
        .append("svg:image")
        .attr("xlink:href", v.href)
        .attr("width", v.width)
        .attr("height", v.height)
        .attr("x", "61.4%")
        .attr("y", y)
        .attr("class", "v-shape")
        .attr("id", v.id);
    } else {
      svg
        .append("svg:image")
        .attr("xlink:href", v.href)
        .attr("width", 1)
        .attr("height", 1)
        .attr("x", v.x)
        .attr("y", v.y)
        .attr("class", "v-shape");
    }
  });
}
