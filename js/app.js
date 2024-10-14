// Initialize Lenis
const lenis = new Lenis({
    duration: 1.2,
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    smooth: true,
});

function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
}
requestAnimationFrame(raf);

// GSAP Animation Example
gsap.registerPlugin(ScrollTrigger);

gsap.to(".hero-img", {
    scrollTrigger: {
        trigger: "#hero",
        start: "top center",
        end: "bottom top",
        scrub: true,
    },
    scale: 1.1,
    duration: 2,
});
