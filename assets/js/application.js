
$(function(){


    // back to top
    setTimeout(function () {
      var $topNav = $('.header')

      $topNav.affix({
        offset: {
          top: function () {
            var offsetTop      = $topNav.offset().top
            var sideBarMargin  = parseInt($topNav.children(0).css('margin-top'), 10)
            var navOuterHeight = $('.list-nav').height()

            return (this.top = offsetTop - navOuterHeight - sideBarMargin)
          }
        }
      })
    }, 100)

    setTimeout(function () {
      $('.header').affix()
    }, 100)


	// sidebar Toggle
	$(".sidebar-toggle,.sidebar a[href=#contact]").click(function(){
		$(".sidebar").toggleClass("active");
		$(".content").toggleClass("content-sidebar");
		$("body").toggleClass("body-sidebar");
		$(".header").toggleClass("header-sidebar");
		return false;
	});
	$('.sidebar').bind('clickoutside', function (event) {
		$(".sidebar").removeClass("active");
	});
	// aside Toggle
	$(".aside-toggle,a[href=#contact]").click(function(){
		$(".aside").toggleClass("active");
		$(".content").toggleClass("content-aside");
		$("body").toggleClass("body-aside");
		$(".header").toggleClass("header-aside");
		return false;
	});
	$('.aside').bind('clickoutside', function (event) {
		$(".aside").removeClass("active");
	});
	// Activate tooltip
    $("[data-toggle='tooltip']").tooltip();
});
$(document).ready(function() {
     $('.collabo img').addClass('animate');
});