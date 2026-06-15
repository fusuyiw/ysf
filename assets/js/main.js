// Edit array ini untuk mengubah kartu proyek di homepage.
// Untuk menambah proyek: copy satu object, ubah teksnya, buat file detail di folder projects,
// lalu isi detailUrl dengan path file detail tersebut.
const featuredProjects = [
  {
    title: "UAV Mapping untuk Perencanaan Infrastruktur",
    year: "2025",
    location: "East Kalimantan, Indonesia",
    type: "UAV Mapping",
    detailUrl: "projects/uav-mapping-infrastruktur.html",
    summary:
      "Workflow pemetaan udara untuk perencanaan area, interpretasi terrain, dan dokumentasi engineering.",
    deliverables: ["Orthomosaic", "DTM/DSM", "Garis kontur", "Dokumentasi area"],
    tools: ["UAV", "GNSS", "Agisoft Metashape", "QGIS", "AutoCAD"]
  },
  {
    title: "Survey Topografi Area Pengembangan",
    year: "2024",
    location: "Indonesia",
    type: "Survey Topografi",
    detailUrl: "projects/survey-topografi-area-pengembangan.html",
    summary:
      "Survey lapangan dan persiapan data elevasi untuk kebutuhan desain serta perencanaan konstruksi.",
    deliverables: ["Titik kontrol", "Spot height", "Peta kontur", "Gambar CAD-ready"],
    tools: ["GNSS", "Total Station", "AutoCAD Civil 3D", "QGIS"]
  },
  {
    title: "Pengolahan Data Spasial dan Pemetaan",
    year: "2024",
    location: "Remote / Office-based",
    type: "Pengolahan Spasial",
    detailUrl: "projects/pengolahan-data-spasial.html",
    summary:
      "Pengolahan data geospasial, produksi peta, dan visualisasi spasial untuk kebutuhan laporan teknis.",
    deliverables: ["Peta tematik", "Layer spasial terolah", "Layout peta", "Figur laporan"],
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
              Lihat ringkasan
            </button>
            <div class="project-detail" id="project-detail-${index}" data-project-detail hidden>
              <h4>Lokasi</h4>
              <p>${project.location}</p>
              <h4>Output</h4>
              <ul class="tag-list">${createTags(project.deliverables)}</ul>
              <h4>Tools</h4>
              <ul class="tag-list">${createTags(project.tools)}</ul>
              <a class="project-link" href="${project.detailUrl}">Buka halaman detail</a>
            </div>
          </div>
        </article>
      `
    )
    .join("");
}

// Fungsi ini menjaga kartu proyek tetap ringkas saat pertama dibuka.
// Saat pengunjung klik "Lihat ringkasan", script membuka panel ringkasan pada kartu tersebut.
function initProjectToggles() {
  document.querySelectorAll("[data-project-card]").forEach((card) => {
    const button = card.querySelector("[data-project-toggle]");
    const detail = card.querySelector("[data-project-detail]");

    if (!button || !detail) return;

    button.addEventListener("click", () => {
      const isExpanded = button.getAttribute("aria-expanded") === "true";
      const nextExpanded = !isExpanded;

      button.setAttribute("aria-expanded", String(nextExpanded));
      button.textContent = nextExpanded ? "Tutup ringkasan" : "Lihat ringkasan";
      detail.hidden = !nextExpanded;
    });
  });
}

renderProjects();
initProjectToggles();
