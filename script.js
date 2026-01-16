// console.log("JavaScript is working!");

// const projects = [
//   {
//     title: "Portfolio Website",
//     description: "Personal portfolio built with HTML, CSS, and JavaScript.",
//     link: "https://github.com/yourusername/portfolio"
//   },
//   {
//     title: "Machine Learning Project",
//     description: "Classification model using Python and TensorFlow.",
//     link: "https://github.com/yourusername/ml-project"
//   }
// ];

// const container = document.querySelector(".projects-grid");

// projects.forEach(project => {
//   const card = document.createElement("div");
//   card.classList.add("project-card");

//   card.innerHTML = `
//     <h3>${project.title}</h3>
//     <p>${project.description}</p>
//     <a href="${project.link}" target="_blank">View Project →</a>
//   `;

//   container.appendChild(card);
// });


const projects = [
  { title: "Project One", desc: "Description for project one." },
  { title: "Project Two", desc: "Description for project two." },
  { title: "Project Three", desc: "Description for project three." },
  { title: "Project Four", desc: "Description for project four." }
];

const grid = document.querySelector(".projects-grid");
const button = document.getElementById("show-more-button");

const VISIBLE_COUNT = 2;

projects.forEach((project, index) => {
  const card = document.createElement("div");
  card.classList.add("project-card");

  if (index >= VISIBLE_COUNT) {
    card.classList.add("hidden");
  }

  card.innerHTML = `
    <h3>${project.title}</h3>
    <p>${project.desc}</p>
  `;

  grid.appendChild(card);
});

button.addEventListener("click", () => {
  document
    .querySelectorAll(".project-card.hidden")
    .forEach(card => card.classList.remove("hidden"));

  button.style.display = "none";
});
