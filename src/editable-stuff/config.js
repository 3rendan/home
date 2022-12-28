// Navigation Bar SECTION
const navBar = {
  show: true,
};

// Main Body SECTION
const mainBody = {
  gradientColors: "#CEE7E6, #5CAB7D, #44633F, #3F4B3B",
  firstName: "Brendan",
  middleName: "",
  lastName: "Ryan",
  message: "Full stack developer | Ruby on Rails, React, JavaScript, HTML5, CSS, SASS, MySQL",
  icons: [
    {
      image: "fa-github",
      url: "https://github.com/3rendan",
    },
    {
      image: "fa-linkedin",
      url: "https://www.linkedin.com/in/brendan-r-ryan",
    },
  ],
};

// ABOUT SECTION
// If you want the About Section to show a profile picture you can fill the profilePictureLink either with:
//a) your Instagram username
//      i.e:profilePictureLink:"johnDoe123",
//b) a link to an hosted image
//      i.e:profilePictureLink:"www.picturesonline.com/johnDoeFancyAvatar.jpg",
//c) image in "editable-stuff" directory and use require("") to import here,
//      i.e: profilePictureLink: require("../editable-stuff/brendanryan.png"),
//d) If you do not want any picture to be displayed, just leave it empty :)
//      i.e: profilePictureLink: "",
// For Resume either provide link to your resume or import from "editable-stuff" directory
//     i.e resume: require("../editable-stuff/resume.pdf"),
//         resume: "https://docs.google.com/document/d/13_PWdhThMr6roxb-UFiJj4YAFOj8e_bv3Vx9UHQdyBQ/edit?usp=sharing",

const about = {
  show: true,
  heading: "About Me",
  imageLink: require("../editable-stuff/brendanryan.png"),
  imageSize: 375,
  message:
  "Software developer fluent in Ruby on Rails, Javascript, React, Git, Node.js, Express, and Electron eager to continue a career in the field. I worked at Visible Body on an educational web app based in Ruby on Rails. I was a professional librarian for over a decade, working in academic, public, and special interest libraries. Throughout this career, I incorporated software development in my work whenever possible, building mobile websites, digital collections archives, ebook archives of scholarly materials, and other digital tools to improve workflow. I really enjoyed this work and wrote a book about ebooks and tablets. I viewed it as an extension of library work, organizing information to present it. When the opportunity presented itself to learn coding professionally, I jumped at the chance. I wanted a new challenge and General Assembly provided the perfect program in software engineering that I could complete on a part-time basis remotely while continuing to work full-time as a librarian. After completing this program and gaining a foundation in JavaScript, React, Ruby on Rails, Git, and other languages.",
  resume: "https://drive.google.com/file/d/1yHCEsZnIDlbHSmSdYQuSfR9NNcCOj3Be/view?usp=sharing",
};

// PROJECTS SECTION
// Setting up project lenght will automatically fetch your that number of recently updated projects, or you can set this field 0 to show none.
//      i.e: reposLength: 0,
// If you want to display specfic projects, add the repository names,
//      i.e ["repository-1", "repo-2"]
const repos = {
  show: true,
  heading: "Recent Projects",
  gitHubUsername: "3rendan", //i.e."johnDoe12Gh"
  reposLength: 3,
  specificRepos: ['ATHtest', 'house-marketplace', 'MODS-Expanded'],
};

// Leadership SECTION
const leadership = {
  show: false,
  heading: "Leadership",
  message:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vitae auctor eu augue ut lectus arcu bibendum at varius. Libero justo laoreet sit amet cursus sit amet. Imperdiet dui accumsan sit amet nulla facilisi morbi. At auctor urna nunc id. Iaculis urna id volutpat lacus laoreet non curabitur gravida. Et magnis dis parturient montes nascetur ridiculus mus mauris. In nisl nisi scelerisque eu ultrices vitae auctor. Mattis nunc sed blandit libero volutpat sed cras ornare. Pulvinar neque laoreet suspendisse interdum consectetur libero.",
  images: [
    { 
      img: require("../editable-stuff/brendanryan.png"), 
      label: "ATH | SPA", 
      paragraph: "Nulla vitae elit libero, a pharetra augue mollis interdum." 
    },
    { 
      img: require("../editable-stuff/brendanryan.png"), 
      label: "Second slide label", 
      paragraph: "Nulla vitae elit libero, a pharetra augue mollis interdum." 
    },
  ],
  imageSize: {
    width:"615",
    height:"450"
  }
};

// SKILLS SECTION
const skills = {
  show: true,
  heading: "Skills",
  hardSkills: [
    { name: "SQL", value: 65 },
    { name: "JavaScript", value: 75 },
    { name: "React", value: 75 },
    { name: "HTML/CSS", value: 65 },
    { name: "Ruby on Rails", value: 65 },
    { name: "GIT", value: 75 },
  ],
  softSkills: [
    { name: "Goal-Oriented", value: 70 },
    { name: "Agile", value: 90 },
    { name: "Writing", value: 95 },
    { name: "Adaptability", value: 75 },
    { name: "Motivation", value: 90 },
    { name: "Process Oriented", value: 70 },
    { name: "Organization", value: 85 },
    { name: "Creativity", value: 90 },
  ],
};

// GET IN TOUCH SECTION
const getInTouch = {
  show: true,
  heading: "Get In Touch",
  message:
    "I'm currently looking for full-time Software Engineering position. If you know of any positions available, if you have any questions, or if you just want to say hi, please feel free to email me at",
  email: "brendanryan@pm.me",
};

const experiences = {
  show: true,
  heading: "Experiences",
  data: []
}

// Blog SECTION
// const blog = {
//   show: false,
// };

export { navBar, mainBody, about, repos, skills, leadership, getInTouch, experiences };
