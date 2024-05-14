let navExpanded = gsap.timeline({ paused: true });

// Define the animation sequence
navExpanded
  .to($(".hamburger .bar:nth-child(1)"), 0.3, { y: 8, rotation: 45 }, "start")
  .to($(".hamburger .bar:nth-child(2)"), 0.3, { opacity: 0 }, "start")
  .to($(".hamburger .bar:nth-child(3)"), 0.3, { y: -8, rotation: -45 }, "start")
  .to($(".nav-links .wrapper"), { duration: 1, ease: "power1.out", "clip-path": "circle(150% at 100% 0%)" }, "start")
  .staggerTo($(".nav-links li, .nav-links button"), 0.5, { opacity: 1, y: 0, ease: Power1.easeOut }, 0.1, "-=0.3");

// Toggle the navigation animation on hamburger click
$(".hamburger").click(function() {
  navExpanded.reversed() ? navExpanded.play() : navExpanded.reverse();
});

// Close the navigation when a link is clicked
$(".nav-links a").click(function() {
  navExpanded.reverse();
});

let masks = document.querySelectorAll(".mask");

masks.forEach(mask => {
  let image = mask.querySelector("img");
  let video = mask.querySelector("video");
  
  let tl = gsap.timeline({
    scrollTrigger: {trigger: mask, toggleActions: "restart none none reset"}
  });

  tl
    .from(mask, 1.5, {xPercent: -100, ease: Power2.out})
    .from(image, 1.5, {xPercent: 100, scale: 1.3, delay: -1.5, ease: Power2.out})
    .from(video, 1.5, {xPercent: 100, scale: 1.3, delay: -1.5, ease: Power2.out});
});

// let counter = {
//   value: 0
// }

// let percent = $(".percent");
// let precent = document.getElementById("percent")

let tl = gsap.timeline({
  defaults: {ease: "power2.out", duration: 2}
});


tl
  // .to(counter, 1, {ease: "none", value: 100, onUpdate: () => percent.innerHTML = Math.round(counter.value) + "%"})
  // .to(".percent", 1, {opacity: 0})
  .staggerFrom($(".hero .paragraph"), 2, {opacity: 0, y: 25, ease: Power1.easeOut}, 0.1)
  .staggerFrom($(".content"), 2, {opacity: 0, y: 25, ease: Power1.easeOut}, 0.1, "-=2")
  .to(".preloader", 1, {opacity: 0}, "-=0.5")
  .from("nav", 1, {opacity: 0}, "=-1");

// Modal for portfolio

const modal = $(".modal"),
      previews = $(".image-box img"),
      original = $(".modal-img"),
      caption = $(".caption");

previews.each(function(preview) {
  $(this).on("click", () => {
    modal.addClass("open");
    original.addClass("open");

    const imgDir = $(this).attr("data-original");
    original.attr("src", "./assets/" + imgDir);
    caption.text($(this).attr("alt")); 
  });
});

modal.on("click", (e) => {
  if($(e.target).hasClass("modal")) {
    modal.removeClass("open");
    original.removeClass("open");

  }
});

const vid = document.querySelector('.landing-video');
const ratio = 16/9;
function resize() {
  const w = window.innerWidth;
  const h = window.innerHeight; 
  const scale =  ((w / h) > ratio) ? (w / (ratio * h)) : (h * ratio / w);

  vid.style.transform = 'scale(' + scale + ')';
}
vid.onload = resize;
window.onresize = resize;



document.addEventListener("DOMContentLoaded", function() {
  const categories = document.querySelectorAll(".category");
  const imageItems = document.querySelectorAll(".gallery");

  categories.forEach(category => {
    category.addEventListener("click", function(e) {
      e.preventDefault();
      const filter = this.getAttribute("data-filter");

      imageItems.forEach(item => {
        if (filter === "all" || item.classList.contains(filter)) {
          item.style.display = "block";
        } else {
          item.style.display = "none";
        }
      });
    });
  });
});