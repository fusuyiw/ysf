// Edit array ini untuk mengubah kartu proyek di homepage.
// Untuk menambah proyek: copy satu object lalu ubah isinya.
// imageUrl dan websiteUrl bersifat opsional. Biarkan "" jika tidak digunakan.
// Untuk foto, gunakan WebP sekitar 640 x 360 px dan usahakan ukurannya di bawah 150 KB.
const featuredProjects = [
  {
    title: "Training Survei Pemetaan",
    year: "2025",
    location: "Hotel Royal Park, Samarinda",
    type: "| Trainer",
    imageUrl: "assets/images/1.webp",
    imageAlt: "Dokumentasi Training Survei Pemetaan di Samarinda",
    websiteUrl: "",
    summary:
      "Program pelatihan GIS dasar dan pemetaan menggunakan UAV untuk meningkatkan kemampuan peserta dalam pengolahan data geospasial yang diadakan oleh PT. Infomap Geo Survey ",
    deliverables: [
      "Digitasi fitur spasial",
      "Layout peta",
      "Pengertian dasar GIS",
      "Peraturan penerbangan UAV",
      "Pengaturan misi penerbangan UAV",
      "Praktik lapangan pemetaan UAV",
    ],
    tools: ["ArcMap", "Agisoft Metashape", "DJI Pilot"],
  },
  {
    title: "Inventarisasi Aset BPKAD Samarinda",
    year: "2025",
    location: "Samarinda, Kaltim",
    type: "| Surveyor & Web Developer",
    imageUrl: "assets/images/2.webp",
    imageAlt: "Kegiatan survei topografi di lapangan",
    websiteUrl: "https://asetpemkotsamarinda.com/",
    summary:
      "Inventarisasi aset pemerintah Kota Samarinda menggunakan digital twin berbasis WebGIS untuk mendukung pengelolaan aset yang lebih efisien dan transparan.",
    deliverables: ["Oblique Imagery", "Digital Twin 3D", "WebGIS Interaktif"],
    tools: [
      "DJI M350",
      "DJI Zenmuse",
      "Agisoft Metashape",
      "Laravel",
      "CesiumJS",
    ],
  },
  {
    title: "PUNA BPN Sangatta",
    year: "2025",
    location: "Sangatta, Kaltim",
    type: "| Drone Pilot",
    imageUrl: "assets/images/3.webp",
    imageAlt: "Kegiatan survei topografi di lapangan",
    websiteUrl: "",
    summary:
      "Program Pemetaan dan Penataan Ruang Nasional untuk mendukung penataan ruang dan pengelolaan yang berkelanjutan di wilayah Kutai Timur.",
    deliverables: ["Orthophoto"],
    tools: ["DJI M350", "DJI Zenmuse", "Agisoft Metashape"],
  },
  {
    title: "Pemetaan Topografi LiDAR",
    year: "2025",
    location: "Gayo Lues, Aceh",
    type: "| Koordinator & Drone Pilot",
    imageUrl: "assets/images/4.webp",
    imageAlt: "Proses pengolahan dan visualisasi data spasial",
    websiteUrl: "",
    summary:
      "Paket pekerjaan survei topografi menggunakan teknologi LiDAR untuk menghasilkan data elevasi yang akurat dan detail, mendukung perencanaan eksplorasi sumber daya mineral di wilayah Gayo Lues.",
    deliverables: [
      "Kontur",
      "Model Digital Permukaan (DSM)",
      "Model Digital Terrain (DTM)",
      "3.000 Ha",
    ],
    tools: ["DJI M350", "LiDAR LiAIR", "Agisoft Metashape", "LiDAR360"],
  },
  {
    title: "WebGIS HPL Kaltim",
    year: "2025",
    location: "Samarinda, Kaltim",
    type: "| Web Developer",
    imageUrl: "assets/images/9.webp",
    imageAlt: "",
    websiteUrl: "https://pemanfaatanhplkaltim.com/",
    summary:
      "Sistem informasi geografis berbasis web untuk inventarisasi dan pemantauan Hak Pengelolaan Lahan (HPL) di Kalimantan Timur, termasuk fitur CRUD data, dan monitoring dashboard interaktif untuk mengetahui status dan perubahan HPL secara real-time.",
    deliverables: [
      "WebGIS",
      "Sistem Informasi Geografis",
      "Dashboard Interaktif  ",
    ],
    tools: ["Laravel", "LeafletJS", "Bootstrap"],
  },
  {
    title: "Pemetaan Fotoudara Hauling Road",
    year: "2025",
    location: "Kutai Barat, Kaltim",
    type: "| Koordinator & Drone Pilot",
    imageUrl: "assets/images/5.webp",
    imageAlt: "",
    websiteUrl: "",
    summary: "Paket pekerjaan foto udara untuk keperluan IPPKH perusahaan.",
    deliverables: ["Orthomosaic"],
    tools: ["CHC X500", "LiDAR AA10", "Agisoft Metashape"],
  },
  {
    title: "Batimetri x LiDAR",
    year: "2026",
    location: "Komplek Yudikatif, Nusantara",
    type: "| Koordinator & Data Processor",
    imageUrl: "assets/images/6.webp",
    imageAlt: "",
    websiteUrl: "",
    summary:
      "Paket pekerjaan pengukuran dasar sungai menggunakan USV SBES dan pemetaan topografi menggunakan LiDAR untuk keperluan konstruksi gedung perkantoran.",
    deliverables: ["Digital Elevation Model (DEM)", "Orthomosaic", "Kontur"],
    tools: [
      "CHC X500",
      "LiDAR AA10",
      "USV Apache 4",
      "Global Mapper",
      "Agisoft Metashape",
    ],
  },
  {
    title: "Volume Stockpile Batubara",
    year: "2026",
    location: "Kotabangun, Kaltim",
    type: "| Koordinator & Data Processor",
    imageUrl: "assets/images/7.webp",
    imageAlt: "",
    websiteUrl: "",
    summary:
      "Paket pekerjaan pengukuran volume stockpile batubara menggunakan teknologi LiDAR dan GPS RTK untuk keperluan inventarisasi dan penjualan internasional.",
    deliverables: [
      "Digital Elevation Model (DEM)",
      "Volume Stockpile",
      "Kontur",
    ],
    tools: [
      "CHC X500",
      "LiDAR AA10",
      "Comnav N3",
      "Global Mapper",
      "Civil 3D",
      "Agisoft Metashape",
    ],
  },
  {
    title: "Web Sampel Proyek",
    year: "2026",
    location: "Bulungan, Kaltara",
    type: "| Web Developer",
    imageUrl: "assets/images/8.webp",
    imageAlt: "",
    websiteUrl: "https://orbit.infomapgeosurvey.com/",
    summary:
      "Web yang dibangun untuk menampilkan contoh produk pemetaan, sebagai marketing dan edukasi kepada calon klien tentang layanan pemetaan yang ditawarkan.",
    deliverables: [
      "Digital Elevation Model (DEM)",
      "Orthomosaic",
      "Kontur",
      "Point Cloud",
      "Digital Twin",
    ],
    tools: ["Three.js", "Bootstrap", "CesiumJS", "PotreeJS"],
  },
];

const projectGrid = document.querySelector("#projectGrid");
const currentYear = document.querySelector("#currentYear");
const navigationLinks = document.querySelectorAll(".nav-menu .nav-link");

if (currentYear) {
  currentYear.textContent = new Date().getFullYear();
}

function updateActiveNavigation() {
  const currentPosition = window.scrollY + 140;
  let activeLink = null;

  navigationLinks.forEach((link) => {
    const section = document.querySelector(link.getAttribute("href"));

    if (section && section.offsetTop <= currentPosition) {
      activeLink = link;
    }
  });

  navigationLinks.forEach((link) => {
    link.classList.toggle("active", link === activeLink);
  });
}

if (navigationLinks.length) {
  updateActiveNavigation();
  window.addEventListener("scroll", updateActiveNavigation, { passive: true });
}

function createTags(items) {
  return items.map((item) => `<li>${item}</li>`).join("");
}

function createProjectVisual(project) {
  if (!project.imageUrl) {
    return '<div class="project-visual project-visual-placeholder" aria-hidden="true"></div>';
  }

  return `
    <div class="project-visual">
      <img
        src="${project.imageUrl}"
        alt="${project.imageAlt || `Dokumentasi proyek ${project.title}`}"
        width="640"
        height="360"
        loading="lazy"
        decoding="async"
      />
    </div>
  `;
}

function createWebsiteLink(project) {
  if (!project.websiteUrl) return "";

  return `
    <a
      class="project-link project-website-link btn mt-2"
      href="${project.websiteUrl}"
      target="_blank"
      rel="noopener noreferrer"
    >
      Lihat Website
    </a>
  `;
}

function renderProjects() {
  if (!projectGrid) return;

  projectGrid.innerHTML = featuredProjects
    .map(
      (project, index) => `
        <div class="col-12 col-lg-4 project-grid-item">
          <article class="project-card d-flex flex-column" data-project-card>
            ${createProjectVisual(project)}
            <div class="project-body d-flex flex-column flex-grow-1">
              <div class="project-meta">
                <span>${project.year}</span>
                <span>${project.type}</span>
              </div>
              <h3 class="h5 fw-bold">${project.title}</h3>
              <p>${project.summary}</p>
              <button
                class="project-toggle btn mt-auto"
                type="button"
                aria-expanded="false"
                aria-controls="project-detail-${index}"
                data-project-toggle
              >
                Lihat Detail
              </button>
              <div class="project-detail" id="project-detail-${index}" data-project-detail hidden>
                <h4>Lokasi</h4>
                <p>${project.location}</p>
                <h4>Output</h4>
                <ul class="tag-list">${createTags(project.deliverables)}</ul>
                <h4>Tools</h4>
                <ul class="tag-list">${createTags(project.tools)}</ul>
                ${createWebsiteLink(project)}
              </div>
            </div>
          </article>
        </div>
      `,
    )
    .join("");
}

// Fungsi ini menjaga kartu proyek tetap ringkas saat pertama dibuka.
// Saat pengunjung klik "Lihat Detail", script membuka panel Detail pada kartu tersebut.
function initProjectToggles() {
  document.querySelectorAll("[data-project-card]").forEach((card) => {
    const button = card.querySelector("[data-project-toggle]");
    const detail = card.querySelector("[data-project-detail]");

    if (!button || !detail) return;

    button.addEventListener("click", () => {
      const isExpanded = button.getAttribute("aria-expanded") === "true";
      const nextExpanded = !isExpanded;

      button.setAttribute("aria-expanded", String(nextExpanded));
      button.textContent = nextExpanded ? "Tutup Detail" : "Lihat Detail";
      detail.hidden = !nextExpanded;
    });
  });
}

renderProjects();
initProjectToggles();
