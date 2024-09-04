var tl= gsap.timeline();

tl.from("#bgShape", {
    y:500,
    duration:1
});
tl.from("#shoe", {
    x:-1000,
    duration:0.5
});
tl.from("#women", {
    y:1000,
    duration:1
});
tl.from("#upTo", {
    y:-1000,
    duration:1

})
tl.from("#discount", {
    duration: 1, 
    scale: 0
})
tl.from("#productContent", {
    duration: 1, 
    scale: 0
})
tl.from("#productBtn", {
    duration: 1, 
    scale: 0
})