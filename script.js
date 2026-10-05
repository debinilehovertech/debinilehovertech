const menuToggle = document.getElementById("menuToggle");
const mainNav = document.getElementById("mainNav");

menuToggle.addEventListener("click", () => {
  const isOpen = mainNav.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", String(isOpen));
});

document.querySelectorAll("#mainNav a").forEach((link) => {
  link.addEventListener("click", () => {
    mainNav.classList.remove("open");
    menuToggle.setAttribute("aria-expanded", "false");
  });
});

document.getElementById("year").textContent = new Date().getFullYear();
/* Project Slideshows */

const projectGroups = {
  "ndt-project": [
    "images/ndtp1.jpg",
    "images/ndtp2.jpg",
    "images/ndtp3.jpg",
    "images/ndtp4.jpg"
  ],

  "drone-project": [
    "images/dronep1.jpg",
    "images/dronep2.jpg",
    "images/dronep3.jpg",
    "images/dronep4.jpg"
  ],

  "survey-project": [
    "images/smp1.jpg",
    "images/smp2.jpg",
    "images/smp3.jpg",
    "images/smp4.jpg"
  ],

  "qaqc-project": [
    "images/qaqap1.jpg",
    "images/qaqap2.jpg",
    "images/qaqap3.jpg",
    "images/qaqap4.jpg"
  ],

  "training-project": [
    "images/dronetp1.jpg",
    "images/dronetp2.jpg",
    "images/dronetp3.jpg",
    "images/dronetp4.jpg"
  ],

  "rental-project": [
    "images/eqipp1.jpg",
    "images/eqipp2.jpg",
    "images/eqipp3.jpg",
    "images/eqipp4.jpg"
  ]
};

Object.keys(projectGroups).forEach(group => {

  document.querySelectorAll("." + group).forEach(img => {

    let index = 0;

    setInterval(() => {
      index = (index + 1) % projectGroups[group].length;
      img.src = projectGroups[group][index];
    }, 3000);

  });

});
