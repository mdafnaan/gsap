function cursor(){
gsap.set(".ball", {xPercent: -50, yPercent: -50});

let xTo = gsap.quickTo(".ball", "x", {duration: 0.6, ease: "power3"}),
    yTo = gsap.quickTo(".ball", "y", {duration: 0.6, ease: "power3"});

window.addEventListener("mousemove", e => {
  xTo(e.clientX);
  yTo(e.clientY);
}) 
}
function page1animation(){
    var tl = gsap.timeline()
tl.from("nav h1, nav h4, nav button",{
        y:-60,
        opacity:0,
        delay:1,
        duration:0.3, 
        stagger:0.15
})
tl.from(".ceter-part1 h1",{
    x:-900,
    opacity:0,
    duration:1
})
tl.from(".ceter-part1 p",{
    x:-900,
    opacity:0,
    duration:0.4
})
tl.from(".ceter-part1 button",{
    x: -200,
    opacity:0,
    duration:0.5,
})
tl.from(".ceter-part2 img",{
    opacity:0,
    duration:0.6,
},"-=0.4")
tl.from(".sectionbottom",{
    opacity:0,
    y:40,
    stagger:0.15,
    duration:0.7,
})

}
function page2animation(){
    var tl2 = gsap.timeline({
        scrollTrigger:{
          trigger:".section2",
          scroller:"body",
          start:"top 45%",
          end:"top 0",
          scrub:2,
        }
      })
      tl2.from(".services",{
          x:-950,
          opacity:0,
          duration:0.5
      })
      tl2.from(".elem.line1.left",{
          x:-700,
          opacity:0,
          duration:0.8,
      },"affu")
      tl2.from(".elem.line1.right",{
          x:700,
          opacity:0,
          duration:0.8
      },"affu")
      tl2.from(".elem.line2.left",{
          x:-700,
          opacity:0,
          duration:0.8,
      },"sonu")
      tl2.from(".elem.line2.right",{
          x:700,
          opacity:0,
          duration:0.8
      },"sonu")
}

function page3animation(){
    var tl3 = gsap.timeline({
        scrollTrigger:{
            trigger: ".section3",
             start: "top 45%",
            //  markers:true,
            // start:"top 20%",
            end: "top 0%",
            scrub:2,
        },
    })
tl3.from(".lets",{
    x:-900,
    opacity:0,
    duration:0.1,
    scrub:2,
    stagger:0.15
},"sonu")
tl3.from(".btn",{
    x:-900,
    duration:0.7,
    opacity:0,
    scrub:2,
    stagger:0.15
},"sonu")
tl3.from(".paras",{
    x:-500,
    scrub:2,
    // stagger:0.1
},"sonu")
tl3.from(".pp",{
    y:500,
    opacity:0,
    duration:0.4,
    delay:0.5,
    scrub:2,
    stagger:0.15
},"sonu")

}


function page4animation(){
    var tl4 = gsap.timeline({
        scrollTrigger:{
          trigger: "section4",
          start:"top 65%",
          end: "top 100%",
        //  scrub: 1,
        // markers:true,
        },
    })
    // tl4.from(".lastss",{
    //     x:500,
    //     opacity:0,
    //     stagger:0.15
    // })
    tl4.from(".lastss",{
        x:-2000,
        opacity:0,
        duration:1.5,
        delay:1,
        scrub:2,
        stagger:0.15,
    },"sonu")
    tl4.from(".p1",{
        x:-500,
        ease:"power1.inOut",
        duration:1.5,
        delay:0.5,
        scrub:2,
        stagger:0.15
    },"sonu")
    tl4.from(".p2",{
        y:200,
        ease:"power1.inOut",
        duration:1.5,
        delay:0.5,
        scrub:2,
        stagger:0.15
    },"sonu")
    tl4.from(".p3",{
        x:500,
        ease:"power1.inOut",
        duration:1.5,
        delay:0.5,
        scrub:2,
        stagger:0.15
    },"sonu")
    
}
cursor()
page1animation()
page2animation()
page3animation()
page4animation()