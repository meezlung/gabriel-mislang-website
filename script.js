gsap.to("#gabriel-mislang", {
    scrollTrigger:{
        trigger: "#container",
        start: "0% 0%",
        end: "50% 50%",
        scrub: 3,
        markers: true
    },
    x: 100,
    duration: 20,
})

gsap.to("#job iconify-icon", {
    scrollTrigger:{
        trigger: "#back",
        start: "50% 45%",
        end: "60% 60%",
        scrub: 2,
        // markers: true
    },
    duration: 1
})