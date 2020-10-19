function initMap() {
    // The location of Uluru
    var uluru = {lat: 14.0583, lng: 108.2772};
    
    // The map, centered at Uluru
    var map = new google.maps.Map(
        document.getElementById('map'), {zoom: 8, center: uluru});
    // The marker, positioned at Uluru
    var marker = new google.maps.Marker({position: uluru, map: map});
  }

  var tnum = 'en';

  $(document).ready(function(){
    
    $(document).click( function(e) {
         $('.translate_wrapper, .more_lang').removeClass('active');     
    });
    
    $('.translate_wrapper .current_lang').click(function(e){    
      e.stopPropagation();
      $(this).parent().toggleClass('active');
      
      setTimeout(function(){
        $('.more_lang').toggleClass('active');
      }, 5);
    });
    
  
    /*TRANSLATE*/
    
    
    $('.more_lang .lang').click(function(){
      $(this).addClass('selected').siblings().removeClass('selected');
      $('.more_lang').removeClass('active');  
      
      var img = $(this).find('img').attr('src');    
      var lang = $(this).attr('data-value');
      var tnum = lang;
    
      
      $('.current_lang .lang-txt').text(lang);
      $('.current_lang img').attr('src', img);
      
      if(lang == 'ar'){
        $('body').attr('dir', 'rtl');
      }else{
        $('body').attr('dir', 'ltr');
      }
      
    });
  });
  
  // ------------login----------
  $('.form').find('input, textarea').on('keyup blur focus', function (e) {
  
    var $this = $(this),
        label = $this.prev('label');
  
      if (e.type === 'keyup') {
        if ($this.val() === '') {
            label.removeClass('active highlight');
          } else {
            label.addClass('active highlight');
          }
      } else if (e.type === 'blur') {
        if( $this.val() === '' ) {
          label.removeClass('active highlight'); 
        } else {
          label.removeClass('highlight');   
        }   
      } else if (e.type === 'focus') {
        
        if( $this.val() === '' ) {
          label.removeClass('highlight'); 
        } 
        else if( $this.val() !== '' ) {
          label.addClass('highlight');
        }
      }
  
  });
  
  $('.tab a').on('click', function (e) {
    
    e.preventDefault();
    
    $(this).parent().addClass('active');
    $(this).parent().siblings().removeClass('active');
    
    target = $(this).attr('href');
  
    $('.tab-content > div').not(target).hide();
    
    $(target).fadeIn(600);
    
  });
  
   