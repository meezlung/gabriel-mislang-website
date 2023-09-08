gsap.to("#gabriel-mislang", {
    scrollTrigger:{
        trigger: "#back",
        start: "50% 50%",
        end: "150% 150%",
        scrub: 3,
        // markers: true
    },
    x: 800,
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