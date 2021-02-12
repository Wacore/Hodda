let width = "100%";
let height = "100vh";

var svg = d3
  .select(".hero")
  .append("svg")
  .attr("width", width)
  .attr("height", height);

let x = "74%";
let y = "50%";
let r = 255;

circles = [
  {
    className: "circle",
    cx: "50%",
    cy: "30%",
    r: 86,
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
    r: r + 50,
    fill: "rgb(136,191,196)",
    fillOpacity: 0.29,
  },
  {
    className: "circle",
    cx: "93%",
    cy: "20%",
    r: 60,
    fill: "rgb(217,184,178)",
    fillOpacity: 0.63,
  },
  {
    className: "circle",
    cx: "85%",
    cy: "90%",
    r: 50,
    fill: "rgb(217,215,178)",
    fillOpacity: 0.82,
  },
  {
    className: "circle",
    cx: x,
    cy: y,
    r: r + 100,
    fill: "rgb(136,191,196)",
    fillOpacity: 0.29,
  },
  {
    className: "circle",
    cx: "10%",
    cy: "15%",
    r: 8,
    fill: "rgb(225,28,102)",
    fillOpacity: 1,
  },
  {
    className: "circle",
    cx: "35%",
    cy: "68%",
    r: 5,
    fill: "rgb(225,128,28)",
    fillOpacity: 1,
  },
  {
    className: "circle",
    cx: "5%",
    cy: "87%",
    r: 15,
    fill: "rgb(28,181,225)",
    fillOpacity: 1,
  },
];

const vShapes = [
  {
    href: "./images/v-shape-b.svg",
    x: x,
    y: y,
    width: 450,
    height: 450,
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

svg
  .append("rect")
  .attr("x", 0)
  .attr("y", 0)
  .attr("height", "100vh")
  .attr("width", x)
  .attr("fill", "#eee");

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

vShapes.map((v) => {
  if (v.id) {
    svg
      .append("svg:image")
      .attr("xlink:href", v.href)
      .attr("width", v.width)
      .attr("height", v.height)
      .attr("x", () => {
        return `calc(${x.slice(0, -1)}% - (${v.width}px / 2 ) - 2px)`;
      })
      .attr("y", () => {
        return `calc(${y.slice(0, -1)}% - (${v.height}px / 2) - 50px)`;
      })
      .attr("class", "v-shape")
      .attr("id", v.id);
  } else {
    svg
      .append("svg:image")
      .attr("xlink:href", v.href)
      .attr("width", 70)
      .attr("height", 70)
      .attr("x", v.x)
      .attr("y", v.y)
      .attr("class", "v-shape");
  }
});
