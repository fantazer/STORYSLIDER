$(document).ready(function () {

	// create control
	var count = $('.slider__el').length
	var controlTemplate = '<div class="control__el"><div class="control__el-progres"></div></div>'

	for (var i = 0; i < count; i++) {
		$('.control').append(controlTemplate)
	}

	var controlEl = $('.control__el')
	// create control === end


	var slider = $('.slider').slick({
		slidesToShow: 3,
		speed: 400,
		dots: false,
		arrows: false,
		rows: 1,
		infinite: false,
		centerMode: true,
		focusOnSelect: true,
		centerPadding: '40px',
		// убирает вложенный пустой div
		autoplay: false,
		pauseOnHover:false,
		//fade: true
		autoplaySpeed: 4600,
		responsive: [

    {
      breakpoint: 640,
      settings: {
        slidesToShow: 1,
        centerMode: false,
      }
    }
  ]
	})
	slider.on('init', function (event, slick, currentSlide, nextSlide) {
	})

	controlEl.eq(0).find('.control__el-progres').addClass('active')

	slider.slick('slickPlay')

	slider.on('beforeChange', function (event, slick, currentSlide, nextSlide) {
		controlEl.find('.control__el-progres').removeClass('full').removeClass('active')
		controlEl.eq(nextSlide).prevAll().find('.control__el-progres').addClass('full')
		controlEl.eq(nextSlide).find('.control__el-progres').addClass('active')
		if( count - 1 === nextSlide ){
			slider.slick('slickPause')
		}else{
			slider.slick('slickPlay')
		}
	});

	if($(window).width() < 640){
		$('.slider__el').click(function(){
			$(this).closest(".slider").slick('slickNext');
		});
	}

	document.documentElement.style.setProperty('--vh', (window.innerHeight*.01) + 'px');

});
