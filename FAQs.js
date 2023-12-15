

gsap.from('.links',{ 
    opacity:0,
    delay:1,
    duration:3,
    x:50,
    ease:Expo.easeInOut

})
gsap.from('.titre',{ 
    opacity:0,
    delay:1.5,
    duration:3,
    x:-50,
    ease:Expo.easeInOut

})
gsap.from('.ti',{ 
    opacity:0,
    delay:1.5,
    duration:3,
    x:-50,
    ease:Expo.easeInOut

})
gsap.from('.des',{ 
    opacity:0,
    delay:1.5,
    duration:3,
    x:50,
    ease:Expo.easeInOut

})
gsap.from('#menu',{ 
    opacity:0,
    delay:1.6,
    duration:3,
    x:-50,
    ease:Expo.easeInOut

})

gsap.from('#mini-text',{ 
    opacity:0,
    delay:1.5,
    duration:3,
    x:-50,
    ease:Expo.easeInOut

})
gsap.from('.bobi',{ 
    opacity:0,
    delay:1.5,
    duration:3,
    y:-50,
    ease:Expo.easeInOut

})
gsap.from('#image',{
    opacity:0,
    delay:2.3,
    duration:2,
    ease:Expo.easeInOut
})
let menu =document.querySelector('#menu')
let bar =document.querySelector('.bar')
let project =document.querySelector('#project')
let mark =document.querySelector('.mark')
let form =document.querySelector('form')

menu.addEventListener('click',()=>{
    bar.classList.toggle("active")
    project.classList.toggle("active")
    mark.classList.toggle("active")
   
      
})

form.addEventListener('click',()=>{
    bar.classList.remove("active")
    project.classList.remove("active")
    mark.classList.remove("active")
})
