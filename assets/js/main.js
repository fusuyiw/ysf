// Edit this array to update the project cards on the homepage.
// To add a new project: copy one object, change the text, then add it to the array.
// To keep the first version elegant, show only your 3 strongest projects.
const featuredProjects = [
  {
    title: "UAV Mapping for Infrastructure Planning",
    year: "2025",
    location: "East Kalimantan, Indonesia",
    type: "UAV Mapping",
    summary:
      "Aerial mapping workflow for site planning, terrain interpretation, and engineering documentation.",
    deliverables: ["Orthomosaic", "DTM/DSM", "Contour lines", "Site documentation"],
    tools: ["UAV", "GNSS", "Agisoft Metashape", "QGIS", "AutoCAD"]
  },
  {
    title: "Topographic Survey for Development Area",
    year: "2024",
    location: "Indonesia",
    type: "Topographic Survey",
    summary:
      "Ground survey and elevation data preparation for design and construction planning.",
    deliverables: ["Control points", "Spot heights", "Contour map", "CAD-ready drawing"],
    tools: ["GNSS", "Total Station", "AutoCAD Civil 3D", "QGIS"]
  },
  {
    title: "Spatial Data Processing & Mapping",
    year: "2024",
    location: "Remote / Office-based",
    type: "Spatial Data Processing",
    summary:
      "Geospatial data processing, map production, and spatial visualization for technical reporting.",
    deliverables: ["Thematic maps", "Processed spatial layers", "Layout maps", "Report figures"],
    tools: ["QGIS", "ArcGIS", "Excel", "CAD"]
  }
];

const projectGrid = document.querySelector("#projectGrid");
const currentYear = document.querySelector("#currentYear");

if (currentYear) {
  currentYear.textContent = new Date().getFullYear();
}

function createTags(items) {
  return items.map((item) => `<li>${item}</li>`).join("");
}

function renderProjects() {
  if (!projectGrid) return;

  projectGrid.innerHTML = featuredProjects
    .map(
      (project, index) => `
        <article class="project-card" data-project-card>
          <div class="project-visual" aria-hidden="true"></div>
          <div class="project-body">
            <div class="project-meta">
              <span>${project.year}</span>
              <span>${project.type}</span>
            </div>
            <h3>${project.title}</h3>
            <p>${project.summary}</p>
            <button
              class="project-toggle"
              type="button"
              aria-expanded="false"
              aria-controls="project-detail-${index}"
              data-project-toggle
            >
              View details
            </button>
            <div class="project-detail" id="project-detail-${index}" data-project-detail hidden>
              <h4>Location</h4>
              <p>${project.location}</p>
              <h4>Deliverables</h4>
              <ul class="tag-list">${createTags(project.deliverables)}</ul>
              <h4>Tools</h4>
              <ul class="tag-list">${createTags(project.tools)}</ul>
            </div>
          </div>
        </article>
      `
    )
    .join("");
}

// This keeps the project cards compact at first.
// When a visitor clicks "View details", the script opens only that card's detail panel.
function initProjectToggles() {
  document.querySelectorAll("[data-project-card]").forEach((card) => {
    const button = card.querySelector("[data-project-toggle]");
    const detail = card.querySelector("[data-project-detail]");

    if (!button || !detail) return;

    button.addEventListener("click", () => {
      const isExpanded = button.getAttribute("aria-expanded") === "true";
      const nextExpanded = !isExpanded;

      button.setAttribute("aria-expanded", String(nextExpanded));
      button.textContent = nextExpanded ? "Hide details" : "View details";
      detail.hidden = !nextExpanded;
    });
  });
}

renderProjects();
initProjectToggles();
