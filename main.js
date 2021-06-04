// mobile nav menu
const hamburger =document.querySelector('.ham')
const closeIcon = document.querySelector('.close')
const link = document.querySelector('.close-links')

// hamburger icon 
hamburger.addEventListener('click',()=>{
    if(link.classList.contains('showMenu')){
        link.classList.remove('showMenu')
        closeIcon.style.display='none'
        hamburger.style.display='block'
    }else{   
        link.classList.add('showMenu')    
        closeIcon.style.display='block'
        hamburger.style.display='none'
    }  
})

//close icon
closeIcon.addEventListener('click',()=>{
    if(link.classList.contains('showMenu')){
        link.classList.remove('showMenu')
        closeIcon.style.display='none'
        hamburger.style.display='block'
    }else{
            link.classList.add('showMenu')
            closeIcon.style.display='block'
            hamburger.style.display='none'
    } 
})



// slider
const slider =document.querySelectorAll('.slide')
const leftArrow= document.querySelector('.slide-left')
const rightArrow = document.querySelector('.slide-right')
current=0

//clear the slider

function reset(){
    for(let i=0;i<slider.length;i++){
        slider[i].style.display='none'
    }
}

//init slider
function slideStater(){
    reset()
    slider[0].style.display='grid'
}

//show prev
function slidePrev(){
    reset()
    slider[current-1].style.display='grid'
    current--
}

//show next
function slideNext(){
    reset()
    slider[current+1].style.display='grid'
    current++
}

//prev btn click
leftArrow.addEventListener('click',function(){
    if(current===0){
        current=slider.length;
    }
    slidePrev()
})

//next btn click
rightArrow.addEventListener('click',function(){
    if(current===slider.length-1){
        current=-1
    }
    slideNext()
})

slideStater();