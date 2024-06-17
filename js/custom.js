  (function ($) {
  "use strict";
    // NAVBAR
    $('.navbar-collapse a').on('click',function(){
      $(".navbar-collapse").collapse('hide');
    });
    $(function() {
      $('.menu-section').vegas({
          slides: [
              { src: 'https://bnetcmsus-a.akamaihd.net/cms/content_entry_media/VHAUMBN792L91589912865216.jpg' },
			  { src: 'https://bnetcmsus-a.akamaihd.net/cms/content_entry_media/VHAUMBN792L91589912865216.jpg' },
			 // { src: 'https://nie.res.netease.com/r/pic/20240605/715b096e-6f1f-4e83-bfb2-cdeda8465b47.jpg' },
          ],
          timer: false,
          animation: 'kenburns',
      });
    });
    // CUSTOM LINK
    $('.smoothscroll').click(function(){
      var el = $(this).attr('href');
      var elWrapped = $(el);
      var header_height = $('.navbar').height() + 60;
      scrollToDiv(elWrapped,header_height);
      return false;
      function scrollToDiv(element,navheight){
        var offset = element.offset();
        var offsetTop = offset.top;
        var totalScroll = offsetTop-navheight;
        $('body,html').animate({
        scrollTop: totalScroll
        }, 300);
      }
    });
  })(window.jQuery);