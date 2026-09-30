// Content for the site. Kept as one plain data file (no build step,
// no framework) — this whole site is intentionally just static
// HTML/CSS/JS.

const CATEGORIES = [
  { id: "oil", label: "Oil Painting" },
  { id: "illustration", label: "Illustration" },
  { id: "drawings", label: "Drawings" },
  { id: "3d", label: "3D" },
  { id: "stick-death-drop", label: "Stick: Death Drop" },
];

const PROJECTS = [
  // Oil Painting
  { title: "Forest Stream", tag: "Oil Painting", category: "oil", image: "images/forest-stream.jpg" },
  { title: "Rock Pool", tag: "Oil Painting", category: "oil", image: "images/rock-pool.jpg" },
  { title: "The Garden Monument", tag: "Oil Painting", category: "oil", image: "images/garden-monument.jpg" },
  { title: "Fallen Log", tag: "Oil Painting", category: "oil", image: "images/fallen-log.jpg" },
  { title: "Boulder Among Birches", tag: "Oil Painting", category: "oil", image: "images/boulder-among-birches.jpg" },
  { title: "Snow-Laden Branches", tag: "Oil Painting", category: "oil", image: "images/snow-laden-branches.jpg" },
  { title: "Blue Vein", tag: "Oil Painting", category: "oil", image: "images/blue-vein.jpg" },
  { title: "Roots in the Snow", tag: "Oil Painting", category: "oil", image: "images/roots-in-snow.jpg" },
  { title: "Sunlit Boulder", tag: "Oil Painting", category: "oil", image: "images/sunlit-boulder.jpg" },
  { title: "Study in Progress", tag: "Oil Painting", category: "oil", image: "images/study-in-progress.jpg" },
  { title: "Bridge", tag: "Oil Painting", category: "oil", image: "images/bridge.jpg" },
  { title: "Dungeon Entrance", tag: "Oil Painting", category: "oil", image: "images/dungeon-entrance.jpg" },
  { title: "Friends", tag: "Oil Painting", category: "oil", image: "images/friends.jpg" },
  { title: "Moss and Water", tag: "Oil Painting", category: "oil", image: "images/moss-and-water.jpg" },
  { title: "Now This is Epic", tag: "Oil Painting", category: "oil", image: "images/now-this-is-epic.jpg" },
  { title: "Paint Bender", tag: "Oil Painting", category: "oil", image: "images/paint-bender.jpg" },

  // Illustration
  { title: "Cats and Dogs", tag: "Digital Painting", category: "illustration", image: "images/cats-and-dogs.jpg" },
  { title: "Wind Mage", tag: "Digital Illustration", category: "illustration", image: "images/wind-mage.jpg" },
  { title: "The Butcher's Ritual", tag: "Ink Illustration", category: "illustration", image: "images/butchers-ritual.jpg" },
  { title: "Salvage", tag: "Ink Illustration", category: "illustration", image: "images/salvage.jpg" },

  // Drawings
  { title: "Cleric", tag: "Character Drawing", category: "drawings", image: "images/cleric.jpg" },
  { title: "Dungeon Archeologist", tag: "Character Drawing", category: "drawings", image: "images/dungeon-archeologist.jpg" },
  { title: "Woot Woblin", tag: "Character Drawing", category: "drawings", image: "images/woot-woblin.jpg" },
  { title: "Merchant", tag: "Character Drawing", category: "drawings", image: "images/merchant.jpg" },

  // 3D
  { title: "Macintosh", tag: "3D Render", category: "3d", image: "images/macintosh.jpg" },
  {
    title: "Field Walker",
    tag: "3D Render / Video",
    category: "3d",
    video: "videos/field-walker-turntable.mp4",
  },

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
