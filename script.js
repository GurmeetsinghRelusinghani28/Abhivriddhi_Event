// Animate the header h1



// Animate the container-2 with scroll-triggered animation
gsap.to(".container-2", {
  scrollTrigger: {
    trigger: ".container-2",
    start: "top 80%", // Animation starts when the container is 80% from the top of the viewport
    end: "bottom 60%", // Ends when container is 60% from bottom of the viewport
    toggleActions: "play none none reverse", // Animations play and reverse on scroll
    scrub: 1, // Smooth scroll-triggered animation
    markers: false // Set to 'true' if you want to see scroll trigger markers for debugging
  },
  opacity: 1,
  y: 0, // Removed initial Y position for smoother rise
  ease: "power2.out",
});

// Animate the Speakers heading
gsap.to(".speakers h2", {
  scrollTrigger: {
    trigger: ".speakers h2",
    start: "top 85%", // Start when the heading reaches 85% of the viewport
    end: "bottom 60%", // End when it reaches 60% of the viewport
    toggleActions: "play none none reverse", // Triggers once
    scrub: 1,
    markers: false
  },
  opacity: 1,
  y: 0,
  ease: "power2.out",
});

// Animate the speakers grid container
gsap.to(".speakers-grid", {
  scrollTrigger: {
    trigger: ".speakers-grid",
    start: "top 80%", 
    end: "bottom 60%",
    toggleActions: "play none none reverse", 
    scrub: 1,
    markers: false
  },
  opacity: 1,
  y: 0,
  ease: "power2.out",
});

// Animate each speaker card with stagger for a cascading effect
gsap.to(".speaker", {
  scrollTrigger: {
    trigger: ".speakers-grid",
    start: "top 75%", 
    end: "bottom 60%",
    toggleActions: "play none none reverse", 
    scrub: 1,
    markers: false
  },
  opacity: 1,
  y: 0,
  ease: "power2.out",
  stagger: 0.2 // Cascading delay for each speaker
});

// Animate speaker names
gsap.to(".speaker h3", {
  scrollTrigger: {
    trigger: ".speakers-grid",
    start: "top 70%", 
    end: "bottom 50%",
    toggleActions: "play none none reverse",
    scrub: 1,
    markers: false
  },
  opacity: 1,
  y: 0,
  ease: "power2.out",
  stagger: 0.2
});

// Animate speaker descriptions
gsap.to(".speaker p", {
  scrollTrigger: {
    trigger: ".speakers-grid",
    start: "top 65%", 
    end: "bottom 50%",
    toggleActions: "play none none reverse",
    scrub: 1,
    markers: false
  },
  opacity: 1,
  y: 0,
  ease: "power2.out",
  stagger: 0.2
});
