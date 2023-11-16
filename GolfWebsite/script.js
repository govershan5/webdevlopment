var crs=document.querySelector("#cursor")
var blr=document.querySelector("#cursor-blur")
var h4=document.querySelectorAll("#nav h4");
h4.forEach(function(ele){
    ele.addEventListener("mouseenter",function(){
        crs.style.scale=3;
        crs.style.border="1px solid #fff";
        crs.style.backgroundColor="transparent";
        
    })
})
h4.forEach(function(ele){
    ele.addEventListener("mouseleave",function(){
        crs.style.scale=1;
        crs.style.border="0px solid #95C11E";
        crs.style.backgroundColor="transparent";
    })
})
document.addEventListener("mousemove",function(par){
   
    crs.style.left=par.x+30+"px";
    crs.style.top=par.y+"px"; 
    blr.style.left=par.x-150+"px";
    blr.style.top=par.y-150+"px";
})
gsap.to("#nav",{
backgroundColor:"#000",
duration:0.5,
height:"110px",
scrollTrigger:{
    trigger:"#nav",
    scroller:"body",
    start:"top -10%",
    end:"top -10%",
    scrub:1
}
})
gsap.to("#main",{
    backgroundColor:"#000",
    scrollTrigger:{
        trigger:"#main",
        scroller:"body",
        markers:true,
        start:"top -50%",
        end:"top -100%",
        scrub:1
    }
})
gsap.from("#about-us img,#about-us-in",{
    y:50,
    duration:0.5,
    opacity:0,
    stagger:0.4,

    scrollTrigger:{
        trigger:"#about-us",
        scroller:"body",
        start:"top 60%",
        end:"top 62%",
        scrub:3,
    }
})
