// Content for the site. Kept as one plain data file (no build step,
// no framework). This whole site is intentionally just static
// HTML/CSS/JS.
//
// Sections render in the order listed in CATEGORIES, and the pieces inside
// each section render in the order listed in PROJECTS.
//
// Grid tiles load a small copy from images/thumbs/ (same file name as the
// full image); the lightbox loads the full image. Optional per-piece
// `detail` shows a caption line in the lightbox, e.g.
//   detail: "Oil on panel, 9 x 12 in, 2025. Painted on the summit of Engineer Mountain."

const CATEGORIES = [
  { id: "illustration", label: "Illustration", columns: 3 },
  {
    id: "stick-death-drop",
    label: "Stick: Death Drop",
    blurb: "A parkour graphic novel about four boys.",
  },
  { id: "oil", label: "Oil Painting", columns: 3 },
  // fit: "contain" shows each drawing whole in its tile instead of cropping it
  { id: "sketchbook", label: "Sketchbook", columns: 3, fit: "contain" },
  { id: "3d", label: "3D", columns: 3 },
];

// Shown large at the top of the page, above the bio. Clicking it opens the
// matching piece (by title) in the lightbox.
const HERO = { title: "Cats and Dogs", src: "images/cats-and-dogs.jpg" };

const PROJECTS = [
  // Illustration
  { title: "Cats and Dogs", tag: "Digital Painting", category: "illustration", image: "images/cats-and-dogs.jpg" },
  { title: "Wind Mage", tag: "Digital Illustration", category: "illustration", image: "images/wind-mage.jpg" },
  { title: "The Butcher's Ritual", tag: "Ink Illustration", category: "illustration", image: "images/butchers-ritual.jpg" },
  { title: "Salvage", tag: "Ink Illustration", category: "illustration", image: "images/salvage.jpg" },
  { title: "Merchant", tag: "Character Drawing", category: "illustration", image: "images/merchant.jpg" },
  { title: "Woot Woblin", tag: "Character Drawing", category: "illustration", image: "images/woot-woblin.jpg" },

  // Stick: Death Drop (comic)
  { title: "Page 1", tag: "Stick: Death Drop", category: "stick-death-drop", image: "images/stick-page-01.jpg" },
  { title: "Page 2", tag: "Stick: Death Drop", category: "stick-death-drop", image: "images/stick-page-02.jpg" },
  { title: "Page 3", tag: "Stick: Death Drop", category: "stick-death-drop", image: "images/stick-page-03.jpg" },
  { title: "Page 4", tag: "Stick: Death Drop", category: "stick-death-drop", image: "images/stick-page-04.jpg" },
  { title: "Page 5", tag: "Stick: Death Drop", category: "stick-death-drop", image: "images/stick-page-05.jpg" },
  { title: "Page 6", tag: "Stick: Death Drop", category: "stick-death-drop", image: "images/stick-page-06.jpg" },
  { title: "Page 7", tag: "Stick: Death Drop", category: "stick-death-drop", image: "images/stick-page-07.jpg" },
  { title: "Page 8", tag: "Stick: Death Drop", category: "stick-death-drop", image: "images/stick-page-08.jpg" },
  { title: "Page 9", tag: "Stick: Death Drop", category: "stick-death-drop", image: "images/stick-page-09.jpg" },
  { title: "Page 10", tag: "Stick: Death Drop", category: "stick-death-drop", image: "images/stick-page-10.jpg" },
  { title: "Page 11", tag: "Stick: Death Drop", category: "stick-death-drop", image: "images/stick-page-11.jpg" },

  // Oil Painting (alternates summits, forest, figures, and objects)
  { title: "The Garden Monument", tag: "Oil Painting", category: "oil", image: "images/garden-monument.jpg" },
  { title: "Top of Engineer", tag: "Oil Painting", category: "oil", image: "images/valley-overlook.jpg" },
  { title: "Sunlit Boulder", tag: "Oil Painting", category: "oil", image: "images/sunlit-boulder.jpg" },
  { title: "Portrait", tag: "Oil Painting", category: "oil", image: "images/portrait-with-earbud.jpg" },
  { title: "On Top of Sunlight", tag: "Oil Painting", category: "oil", image: "images/shadow-and-snowfield.jpg" },
  { title: "Rock Pool", tag: "Oil Painting", category: "oil", image: "images/rock-pool.jpg" },
  { title: "Mine Cart", tag: "Oil Painting", category: "oil", image: "images/rust-in-the-creek.jpg" },
  { title: "Snowdon", tag: "Oil Painting", category: "oil", image: "images/sunlit-peaks.jpg" },
  { title: "In Flight", tag: "Oil Painting", category: "oil", image: "images/in-flight.jpg" },
  { title: "Snow-Laden Branches", tag: "Oil Painting", category: "oil", image: "images/snow-laden-branches.jpg" },
  { title: "Cabin Window", tag: "Oil Painting", category: "oil", image: "images/cabin-window.jpg" },
  { title: "Moss and Water", tag: "Oil Painting", category: "oil", image: "images/moss-and-water.jpg" },

  // Sketchbook (ink and marker, drawn from life)
  { title: "Plane Crash", tag: "Sketchbook", category: "sketchbook", image: "images/sketchbook-plane-crash.png" },
  { title: "Living Room", tag: "Sketchbook", category: "sketchbook", image: "images/sketchbook-living-room.png" },
  { title: "Desk Magic", tag: "Sketchbook", category: "sketchbook", image: "images/sketchbook-desk-magic.png" },
  { title: "Skeletons", tag: "Sketchbook", category: "sketchbook", image: "images/sketchbook-skeletons.png" },
  { title: "Christmas in the Dining Hall", tag: "Sketchbook", category: "sketchbook", image: "images/sketchbook-christmas-dining-hall.png" },
  { title: "Climbing Crew", tag: "Sketchbook", category: "sketchbook", image: "images/sketchbook-climbing-crew.png" },
  { title: "Plane Neighbor", tag: "Sketchbook", category: "sketchbook", image: "images/sketchbook-plane-neighbor.png" },
  { title: "Seated Figure", tag: "Sketchbook", category: "sketchbook", image: "images/sketchbook-seated-figure.png" },
  { title: "Flute Player", tag: "Sketchbook", category: "sketchbook", image: "images/sketchbook-flute-player.png" },

  // 3D
  { title: "Macintosh", tag: "3D Render", category: "3d", image: "images/macintosh.jpg" },
  {
    title: "Field Walker",
    tag: "3D Render / Video",
    category: "3d",
    video: "videos/field-walker-turntable.mp4",
    poster: "images/field-walker-still.jpg",
  },
];

const BIO_PARAGRAPHS = [
  "I'm JJ Galloway, an artist and educator based in Durango, Colorado.",
  "I work mostly in oil, from life, and in drawing and illustration. A good portion of my painting happens on mountains. I carry a kit up peaks in the San Juans and paint on the summit, which is a slow and fairly unreasonable way to make a picture, and that is most of the reason I do it. The rest of my time goes to commissioned paintings and to narrative illustration, fantasy and figure work built out of drawing rather than photo reference.",
  "I earned my BFA in illustration from the School of the Art Institute of Chicago in 2023, where I also founded the campus climbing club. Since then I have taught high school art, built curriculum for a private art studio, guided rock climbing, canyoneering, and backpacking trips, and kept a steady commission practice going alongside all of it.",
  "Teaching and guiding feel like the same job to me. Both come down to putting someone slightly past what they think they can handle and staying with them while they work it out. That is also how I approach my own work.",
  "If you want to talk about a commission, a class, or a project, reach me at jjgalloway24@gmail.com.",
];

const TAGS = ["Oil Painting", "Illustration", "Drawing", "Teaching", "Outdoor Guiding"];
const PHOTO_SRC = "images/about-photo.jpg";
const RESUME_SRC = "resume/jj-galloway-resume.pdf";

// Your Instagram profile link, e.g. "https://instagram.com/yourhandle".
// Leave it empty ("") and the Instagram links stay hidden.
const INSTAGRAM_URL = "";
