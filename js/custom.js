
  (function ($) {
  
  "use strict";

    // NAVBAR
    $('.navbar-collapse a').on('click',function(){
      $(".navbar-collapse").collapse('hide');
    });

    $(function() {
      $('.hero-section').vegas({
          slides: [
              { src: 'https://bnetcmsus-a.akamaihd.net/cms/content_entry_media/U6GPDHSY9JN01589912855861.jpg' },
			  { src: 'https://bnetcmsus-a.akamaihd.net/cms/content_entry_media/U6GPDHSY9JN01589912855861.jpg' },
          ],
          timer: false,
          animation: 'kenburns',
      });
    });
	
	$(function() {
      $('.menu-section').vegas({
          slides: [
              { src: 'https://bnetcmsus-a.akamaihd.net/cms/content_entry_media/FJPT5455KR5K1589912863345.jpg' },
			  { src: 'https://bnetcmsus-a.akamaihd.net/cms/content_entry_media/FJPT5455KR5K1589912863345.jpg' },
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


