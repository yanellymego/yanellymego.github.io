const projects = [
  { 
    title: "Willow and Finch",
    image: "Images/willow-and-finch.png",
    tags: ["Swift"], 
    desc: "Willow and Finch is a prototype IOS application that models a reading and library application like Barnes & Noble or Project Gutenberg.", 
    github_link: "https://github.com/tifle/WillowAndFinch"
  },
  { 
    title: "Bookstore Database", 
    image: "https://opengraph.githubassets.com/1/yanellymego/bookstore-database",
    tags: ["Python", "SQL"],
    desc: "A Streamlit-based web interface that allows employees and customers to manage books, memberships, and purchase history.",
    github_link: "https://github.com/yanellymego/bookstore-database"
  },
  { 
    title: "The Waiting Game", 
    image: "https://opengraph.githubassets.com/1/yanellymego/The-Waiting-Game",
    tags: ["C++"],
    desc: "An application that simulates the management of student and faculty records within an academic system. The program models advisor–advisee relationships and organizes records using a custom lazy binary search tree for efficient searching and sorted traversal.",
    github_link: "https://github.com/yanellymego/The-Waiting-Game"
  },
  { 
    title: "Not-So Super Mario Bros", 
    image: "https://opengraph.githubassets.com/1/yanellymego/Not-So-Super-Mario-Bros",
    tags: ["C++"],
    desc: "A text-based simulation of a Mario-style game world fully driven by input files that define world parameters and level layouts. Running the program produces a complete gameplay log, allowing you to observe Mario’s journey from start to finish.",
    github_link: "https://github.com/yanellymego/Not-So-Super-Mario-Bros"
  },
  { 
    title: "LSTM Text Classification Model—<em>The Yellow Wallpaper</em>", 
    image: "",
    tags: ["Python"],
    desc: "This project implements a data-driven LSTM model in Python using TensorFlow to perform predictive language modeling. It includes a scalable text preprocessing pipeline that cleans, tokenizes, and sequences over 10,000 words, with model training optimized through batch processing, validation sets, and multiple epochs.",
    // github_link: ""
  },
  { 
    title: "Music App", 
    image: "https://opengraph.githubassets.com/1/yanellymego/Music-App",
    tags: ["Java"],
    desc: "This program is a simulation of a basic music streaming platform, allowing users to interact with music content via a simple console menu, supporting actions like account creation, playlist management, and content export.",
    github_link: "https://github.com/yanellymego/Music-App"
  },
  { 
  title: "Portfolio Website",
    image: "Images/portfolio-website.png",
    tags: ["HTML", "CSS", "JavaScript"], 
    desc: "A portfolio website dedicated to showcasing my projects through a simple, user-friendly interface.",
    direct_link: "yanellymego.github.io",
    github_link: "https://github.com/yanellymego/yanellymego.github.io" 
  },
];

const grid = document.querySelector(".projects-grid");
const showMoreButton = document.getElementById("show-more-button");
const filterSelect = document.getElementById("languageFilter");

const VISIBLE_COUNT = 2;

// RENDER PROJECT CARDS
projects.forEach((project, index) => {
  const card = document.createElement("div");
  card.classList.add("project-card");

  // Store tags on the card for filtering
  card.dataset.tags = project.tags
    .map(tag => tag.toLowerCase())
    .join(",");

  // Hide cards beyond initial visible count
  if (index >= VISIBLE_COUNT) {
    card.classList.add("hidden");
  }

  const tagsHTML = project.tags
    .map(tag => `<span class="tag">${tag}</span>`)
    .join("");

  const viewLinkHTML = project.direct_link
    ? `<a href="${project.direct_link}" target="_blank" rel="noopener noreferrer">View</a>`
    : "";

  const githubLinkHTML = project.github_link
    ? `<a href="${project.github_link}" target="_blank" rel="noopener noreferrer">
         <img src="Images/github.png" alt="GitHub icon" class="github-icon"> Code
       </a>`
    : "";

  card.innerHTML = `
    <img src="${project.image}" class="project-image" />

    <h3>${project.title}</h3>

    <div class="tags-container">
      ${tagsHTML}
    </div>

    <div class="project-desc">
      ${project.desc}
    </div>

    <div class="links">
      ${viewLinkHTML}${githubLinkHTML}
    </div>
  `;

  grid.appendChild(card);
});

// SHOW MORE FUNCTIONALITY
showMoreButton.addEventListener("click", () => {
  document
    .querySelectorAll(".project-card.hidden")
    .forEach(card => card.classList.remove("hidden"));

  showMoreButton.style.display = "none";
});

// FILTER FUNCTIONALITY
filterSelect.addEventListener("change", () => {
  const selectedTag = filterSelect.value.toLowerCase();

  document.querySelectorAll(".project-card").forEach(card => {
    const tags = card.dataset.tags.split(",");

    const shouldShow =
      selectedTag === "all" || tags.includes(selectedTag);

    card.classList.toggle("hidden", !shouldShow);
  });

  // Hide "Show More" when filtering
  showMoreButton.style.display =
    selectedTag === "all" ? "block" : "none";
});