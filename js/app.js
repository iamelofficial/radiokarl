$(function(){

    /*Слайдер ___ */
    $('.slider__main').slick({
        arrows: false,
        dots: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        pauseOnFocus:false,
        pauseOnHover:false,
        pauseOnDotsHover:false
    });
});

/* JS scroll-top */
const offset = 200;
const scrollUp = document.querySelector('.scroll-top');

const getTop = () => window.pageYOffset || document.documentElement.scrollTop;

// updateDashoffset
const updateDashoffset = () => {
    const height = document.documentElement.scrollHeight - window.innerHeight;
};

// onScrole
window.addEventListener('scroll', () => {
    updateDashoffset();

    if (getTop() > offset) {
        scrollUp.classList.add('scroll-top--show')
    } else {
        scrollUp.classList.remove('scroll-top--show')
    }
});

// click
scrollUp.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

/*
= END JS scroll-top =
*/

/* JS mail modal */
const modalCall = $("[data-modal]");
const modalClose1 = $("[data-close1]");
const modalClose2 = $("[data-close2]");
const modalCreation = $(".modalcreation");

modalCall.on("click", function(event) {
    event.preventDefault();

    let $this = $(this);
    let modalId = $this.data('modal');

    $(modalId).addClass('visible');
    $("body").addClass('no-scroll');
});

modalClose1.on("click", function(event) {
    event.preventDefault();

    let $this = $(this);
    let modalParent = $this.parents('.menu');

    setTimeout(function() {
        modalParent.removeClass('visible');
    }, 200);
});

modalClose2.on("click", function(event) {
    event.preventDefault();

    let $this = $(this);
    let modalParent = $this.parents('.modalcreation');

    setTimeout(function() {
        modalParent.removeClass('visible');
        $("body").removeClass('no-scroll');
    }, 200);
});


modalCreation.on("click", function(event) {
    let $this = $(this);

    setTimeout(function() {
        $this.removeClass('visible');
        $("body").removeClass('no-scroll');
    }, 200);
});

$(".modal-body").on("click", function(event) {
    event.stopPropagation();
});

/*
= END JS mail modal =
*/

/* Радио плеер */

const radio = document.getElementById('audio');
const btnPlay = document.getElementById('btnPlay');
const btnStop = document.getElementById('btnStop');


if(radio || btnPlay || btnPause){
    btnPlay.addEventListener('click', function(event){
            radio.src = "http://air.volna.top/Karl";
            radio.play();

            btnPlay.classList.remove('active');
            btnStop.classList.add('active');
    });

    btnStop.addEventListener('click', function(event){
            radio.pause();
            radio.currentTime = 0;
            radio.src = "";

            btnStop.classList.remove('active');
            btnPlay.classList.add('active');
    });
}
