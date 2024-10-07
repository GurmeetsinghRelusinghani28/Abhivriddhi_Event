// function loaderAnimation() {
//   var loader = document.querySelector("#loader");
//   setTimeout(function () {
//     loader.style.top = "-100%";
//   }, 6200);
// }

// function breakTheText() {
//   var h1 = document.querySelector(".hero-text h1");
//   var h1Text = h1.textContent;
//   var splittedText = h1Text.split("");
//   var clutter = "";

//   splittedText.forEach(function (x, i) {
//     var half = splittedText.length / 2;
//     if (half >= i) {
//       clutter += `<span class="a">${x}</span>`;
//     } else {
//       clutter += `<span class="b">${x}</span>`;
//     }
//   });
//   h1.innerHTML = clutter;
// }

// function animateText() {
//   gsap.from(".hero-text h1 .a", {
//     y: 1000,
//     duration: 0.6,
//     delay: 6.5,
//     stagger: 0.15,
//     scrub: 1,
//   });

//   gsap.from(".hero-text h1 .b", {
//     y: 1000,
//     duration: 0.6,
//     delay: 6.5,
//     stagger: -0.15,
//     scrub: 1,
//   });

//   gsap.from(".hero-text p", {
//     opacity: 0,
//     duration: 1,
//     delay: 2,
//     y: 20,
//     ease: "power2.out",
//   });
// }

// var cursor = document.querySelector("#cursor");

// function cursorAnimation() {
//   var body = document.querySelector("body");
//   body.addEventListener("mousemove", function (dets) {
//     gsap.to(cursor, {
//       x: dets.x,
//       y: dets.y,
//       duration: 1,
//       ease: "back.out",
//     });
//   });
// }

// function imgAnimation() {
//   var imgDivs = document.querySelectorAll(".event-box img"); // Change to imgDivs
//   imgDivs.forEach(function (imgDiv) {
//     imgDiv.addEventListener("mouseenter", function () {
//       cursor.innerHTML = "View More";
//       gsap.to(cursor, {
//         scale: 4,
//         opacity: 0.5,
//       });
//     });

//     imgDiv.addEventListener("mouseleave", function () {
//       cursor.innerHTML = "";
//       gsap.to(cursor, {
//         scale: 1,
//         opacity: 1,
//       });
//     });
//   });
// }

// function cursorTextAnimation() {
//   var hero = document.querySelector(".hero .hero-text");
//   var navHead = document.querySelector("nav h1");
//   var h1 = document.querySelectorAll("h1");
//   function cursorBig() {
//     gsap.to(cursor, {
//       height: "100px",
//       width: "100px",
//       duration: 0.5,
//       filter: "blur(20px)",
//     });
//   }
//   function cursorSmall() {
//     gsap.to(cursor, {
//       height: "18px",
//       width: "18px",
//       duration: 0.5,
//       filter: "blur(0)",
//     });
//   }

//   h1.forEach((ele) => {
//     ele.addEventListener("mouseenter", function () {
//       cursorBig();
//     });
//     ele.addEventListener("mouseleave", function () {
//       cursorSmall();
//     });
//   });
// }
// loaderAnimation();
// breakTheText();
// animateText();
// imgAnimation();
// cursorAnimation();
// cursorTextAnimation();