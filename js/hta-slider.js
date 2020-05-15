function slideStuff(slider, duration){

    var $slider   = slider.querySelector(".slider");
    var $track    = slider.querySelector(".track");
    var $slides   = slider.querySelectorAll(".slide");
    
    var index = 0;
    var $activeSlide;
   
    function autoSlide(){
        
        $activeSlide     = $slider.querySelector(".slide-active");
        index            = Array.prototype.slice.call($track.children).indexOf($activeSlide.nextElementSibling);

        if( index < 0 ){

            activeSlide($slides[0]);

        } else{

            activeSlide($slides[index]);

        }
 
    }

    var slideTimer = setInterval(autoSlide, duration);

    function activeSlide(elem){

        for (i = 0; i < $slides.length; ++i) {
            $slides[i].classList.remove("slide-active");
        }
        elem.classList.add("slide-active");

    }
   
}