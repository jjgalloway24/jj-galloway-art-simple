document.getElementById("year").textContent = new Date().getFullYear();

// --- About ---
const bioEl = document.getElementById("bio");
BIO_PARAGRAPHS.forEach((text) => {
  const p = document.createElement("p");
  p.textContent = text;
  bioEl.appendChild(p);
});

const tagsEl = document.getElementById("tags");
TAGS.forEach((tag) => {
  const li = document.createElement("li");
  li.textContent = tag;
  tagsEl.appendChild(li);
});

// --- Portfolio ---
const jumpEl = document.getElementById("category-jump");
const sectionsEl = document.getElementById("portfolio-sections");

// flat, ordered list of every project actually rendered — the lightbox
// prev/next arrows walk this list rather than each category's own slice,
// so it reads as one continuous portfolio browse
const renderedProjects = [];

// images/foo.jpg -> images/thumbs/foo.jpg (small copies, ~600px wide)
function thumbFor(src) {
  return src.replace(/^images\//, "images/thumbs/");
}

CATEGORIES.forEach((cat) => {
  const projects = PROJECTS.filter((p) => p.category === cat.id);
  if (!projects.length) return;

  const jumpLink = document.createElement("a");
  jumpLink.href = `#cat-${cat.id}`;
  jumpLink.textContent = cat.label;
  jumpEl.appendChild(jumpLink);

  const section = document.createElement("div");
  section.className = "category-section";
  section.id = `cat-${cat.id}`;

  const heading = document.createElement("h3");
  heading.textContent = cat.label;
  section.appendChild(heading);

  if (cat.blurb) {
    const blurb = document.createElement("p");
    blurb.className = "category-blurb";
    blurb.textContent = cat.blurb;
    section.appendChild(blurb);
  }

  const grid = document.createElement("div");
  grid.className = "grid";
  if (cat.fit === "contain") grid.classList.add("grid-contain");
  if (cat.columns === 3) grid.classList.add("grid-cols-3");

  projects.forEach((project) => {
    const index = renderedProjects.length;
    renderedProjects.push(project);

    const item = document.createElement("div");
    item.className = "grid-item";
    item.addEventListener("click", () => openLightbox(index));

    const thumb = document.createElement("div");
    thumb.className = "grid-thumb";

    // Grid tiles load a small copy; the lightbox loads the full image. A video
    // with a still frame (`poster`) shows that still instead of a black frame.
    const tileSrc = project.image || project.poster;
    if (tileSrc) {
      const img = document.createElement("img");
      img.src = thumbFor(tileSrc);
      img.alt = project.title;
      img.loading = "lazy";
      img.decoding = "async";
      thumb.appendChild(img);
    } else if (project.video) {
      const video = document.createElement("video");
      video.src = project.video;
      video.muted = true;
      video.playsInline = true;
      video.preload = "metadata";
      thumb.appendChild(video);
    }

    if (project.video) {
      const badge = document.createElement("span");
      badge.className = "play-badge";
      badge.setAttribute("aria-hidden", "true");
      thumb.appendChild(badge);
    }

    const caption = document.createElement("div");
    caption.className = "grid-caption";
    caption.innerHTML = `<h4>${project.title}</h4><span>${project.tag}</span>`;

    item.appendChild(thumb);
    item.appendChild(caption);
    grid.appendChild(item);
  });

  section.appendChild(grid);
  sectionsEl.appendChild(section);
});

// --- Lightbox ---
const lightbox = document.getElementById("lightbox");
const lightboxContent = document.getElementById("lightbox-content");
const lightboxTitle = document.getElementById("lightbox-title");
const lightboxTag = document.getElementById("lightbox-tag");
const lightboxDetail = document.getElementById("lightbox-detail");
const closeBtn = document.getElementById("lightbox-close");
const prevBtn = document.getElementById("lightbox-prev");
const nextBtn = document.getElementById("lightbox-next");

let currentIndex = null;

function openLightbox(index) {
  currentIndex = index;
  renderLightbox();
  lightbox.hidden = false;
  document.body.style.overflow = "hidden";
}

function closeLightbox() {
  lightbox.hidden = true;
  lightboxContent.innerHTML = "";
  document.body.style.overflow = "";
  currentIndex = null;
}

function step(delta) {
  if (currentIndex === null) return;
  currentIndex = (currentIndex + delta + renderedProjects.length) % renderedProjects.length;
  renderLightbox();
}

function renderLightbox() {
  const project = renderedProjects[currentIndex];
  lightboxContent.innerHTML = "";

  if (project.video) {
    const video = document.createElement("video");
    video.src = project.video;
    video.poster = project.poster || project.image || "";
    video.controls = true;
    video.autoplay = true;
    video.loop = true;
    video.muted = true;
    video.playsInline = true;
    lightboxContent.appendChild(video);
  } else if (project.image) {
    const img = document.createElement("img");
    img.src = project.image;
    img.alt = project.title;
    lightboxContent.appendChild(img);
  }

  lightboxTitle.textContent = project.title;
  lightboxTag.textContent = project.tag;
  lightboxDetail.textContent = project.detail || "";
  lightboxDetail.hidden = !project.detail;
}

closeBtn.addEventListener("click", closeLightbox);
prevBtn.addEventListener("click", () => step(-1));
nextBtn.addEventListener("click", () => step(1));
lightbox.addEventListener("click", (e) => {
  if (e.target === lightbox) closeLightbox();
});

// --- Hero image (top of the page, opens the matching piece in the lightbox) ---
const heroEl = document.getElementById("hero-image");
const heroIndex = renderedProjects.findIndex((p) => p.title === HERO.title);
if (heroEl && heroIndex !== -1) {
  const img = document.createElement("img");
  img.src = HERO.src;
  img.alt = HERO.title;
  img.decoding = "async";
  heroEl.appendChild(img);
  heroEl.addEventListener("click", () => openLightbox(heroIndex));
} else if (heroEl) {
  heroEl.remove();
}

document.addEventListener("keydown", (e) => {
  if (lightbox.hidden) return;
  if (e.key === "Escape") closeLightbox();
  else if (e.key === "ArrowLeft") step(-1);
  else if (e.key === "ArrowRight") step(1);
});
