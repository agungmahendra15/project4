$(document).ready(function () {
    $(window).scroll(function () {
      if (this.scrollY == 0) {
        $(".navbar").removeClass("navbar-light");
        $(".navbar").removeClass("bg-white");
        $(".navbar").addClass("navbar-dark");
  
      } else {
        $(".navbar").addClass("navbar-light");
        $(".navbar").addClass("bg-white");
        $(".navbar").removeClass("navbar-dark");
      }
    });
  
  
  });

$(document).ready(function () {
    $('.page-scroll').on('click', function (e) {
  
      var tujuan = $(this).attr('href');
      var elemenTujuan = $(tujuan);
  
      $('html, body').animate({
        scrollTop: elemenTujuan.offset().top - 85
      }, 1250, 'easeInOutExpo');
  
      e.preventDefault();
    });
  });