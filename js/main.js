var homeHero      = document.getElementById("home-hero"),
    header        = document.getElementById("header"),
    menu          = document.getElementById("hta-menu"),
    main          = document.querySelector("main");
 


function scrollStuff(){

  if( window.pageYOffset > 70 ){
    header.classList.add("active");
  } else{
    header.classList.remove("active");
  }

}
window.addEventListener("scroll", scrollStuff, false);



function scrollMenu(e){

  if( e.target.scrollTop > 0 ){
    header.classList.add("active");
  } else{
    header.classList.remove("active");
  }

}
menu.addEventListener("scroll", scrollMenu, false);



var elem = document.querySelector('.about-gallery');
var slides = elem.querySelectorAll(".about-gallery-slider_slide");
var elements = elem.querySelectorAll(".draggable-img");

var flkty = new Flickity( elem, {

  freeScroll: true,
  freeScrollFriction: 0.05,
	contain: true,
  resize: false,
	prevNextButtons: false,
	pageDots: false

});


oldx = 0;

flkty.on( 'pointerDown', function( event, pointer ) {
  elem.classList.add('active');
});
flkty.on( 'pointerUp', function( event, pointer ) {
  elem.classList.remove('active');
});

flkty.on( 'dragStart', function( event, pointer ) {
	oldx = event.pageX;
});

flkty.on( 'dragMove', function( event, pointer ) {

    if (event.pageX < oldx) {

        //left
        for (var i = 0; i < elements.length; i++) {

        	 //elements[i].style.transform = "rotateY(" + -(event.pageX - oldx)*0.025 + "deg)";
			
		}
       

    } else if (event.pageX > oldx) {

        //right
        for (var i = 0; i < elements.length; i++) {

        	 //elements[i].style.transform = "rotateY(" + -(event.pageX - oldx)*0.025 + "deg)";
			
		}

    }

});


flkty.on( 'dragEnd', function( event, pointer ) {

      
    for (var i = 0; i < elements.length; i++) {

    	 elements[i].style.transform = "rotateY(0deg)";
		
	  }


});


var services = document.querySelector('.featured-services-list');
var cards = services.querySelectorAll('.featured-services-list_item');

var flkty2 = new Flickity( services, {
  
  freeScroll: true,
  freeScrollFriction: 0.05,
  contain: true,
  resize: false,
  prevNextButtons: false,
  pageDots: false

});

flkty2.on( 'pointerDown', function( event, pointer ) {
  //services.classList.add('active');
});

flkty2.on( 'pointerUp', function( event, pointer ) {
  //services.classList.remove('active');
});




window.addEventListener("resize", function(){
  flkty.resize();
  flkty2.resize();
});


function flipCard(){


  this.parentNode.classList.toggle('is-flipped');

  
}

for (var i = 0; i < cards.length; i++) {

   cards[i].querySelector('.flip-btn').addEventListener('click', flipCard, false);
  
}



var htaMenu       = document.getElementById("hta-menu"),
    menuBtn       = document.querySelector(".menu-btn"),
    closeBtn      = document.querySelector(".close-btn"),
    cancelBtn     = document.querySelector(".cancel-btn"),
    menu          = htaMenu.querySelector(".hta-nav");
  
function openMenu(){

  htaMenu.classList.add("open");
  menu.classList.add("active");

}
menuBtn.addEventListener("click", openMenu); 

function closeMenu(){

  htaMenu.classList.remove("open");
  menu.classList.remove("active");

}

closeBtn.addEventListener("click", closeMenu); 
cancelBtn.addEventListener("click", closeMenu); 







