
$(document).ready(function(){
    show_burger();
    $('.mm-panel').css({'background-color':'#2c3e50'});
    $('.mm-navbar').css({'background-color':'#222f3e'});
    $('#my-menu').css({'display':'none', 'opacity': '1'});
    $('.mm-panel a').css({'color':'#fff'});
    var owl = $('.owl-carousel');
   
    $('.owl-prev').hide();
    owl.on('changed.owl.carousel', function(event) {
        var currentItem = event.item.index;
        var current_item= currentItem;
        $('.nav li a').removeClass('menu-active');
        $('.nav li a[data-pos='+current_item+']').addClass("menu-active");
        animate_headers_text();
        owl.css({'background-position':' calc(50% + '+(-current_item*20)+'px) top'});
        if(current_item==0){
            $('.owl-prev').hide();
        }
        else if(current_item==6){
            $('.owl-next').hide();
        }
        else{
            $('.owl-prev').show();
            $('.owl-next').show();
        }
      
    })
});
function show_burger(){
    if (window.innerWidth <= 991) { 
                $('.navbar-button,#my-menu').removeClass('d-none');
            }
            else{
                $('.navbar-button,#my-menu').addClass('d-none');
            }
}
$('#horizontal-container .owl-carousel').owlCarousel({
        loop:false,
        nav:true,
        dots:false,
        responsiveClass:true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:1
            },
            1000:{
                items:1
            }
        }

      
    })
  function animate_headers_text(){
    $("h2").animate({opacity: "0"},10);
    $("h2").animate({opacity: "1"},1000);


    $("h3").animate({marginLeft: "-100px"},10);
    $("h3").animate({marginLeft: "0"},1000);

    $("h4").animate({marginLeft: "100px"},10);
    $("h4").animate({marginLeft: "0"},1000);
  }
    $('.nav li a').click(function(){
        var owl = $('.owl-carousel');
        go_pos = $(this).data("pos");
        $('.nav li a').removeClass('menu-active');
        $(this).addClass("menu-active");
      
     
 
       owl.owlCarousel();
        owl.trigger('to.owl.carousel',go_pos);
    });
    $(".pop").on("click", function() {
      
        $('.imagepreview').attr('src', $(this).find('img').attr('src')); // here asign the image to the modal when the user click the enlarge link
        $('#imagemodal').modal('show'); // imagemodal is the id attribute assigned to the bootstrap modal, then i use the show function
    });
  


          $('.navbar-button').click(function(){
            $('#my-menu').css({'display':'block'});
            $('.sub-menu').show();
          });

         Mmenu.configs.classNames.selected = "active";
         Mmenu.configs.offCanvas.page.selector = "#my-page";

         document.addEventListener(
            "DOMContentLoaded", () => {
               const menu = new Mmenu( "#my-menu", {
                  slidingSubmenus: false,
                  "extensions": [
                    "pagedim-black",
                      "position-right",
                 
                   ],
                 
               });

               const api = menu.API;

            
                  
            }
         );


         window.onresize = function() {
          
            show_burger();
        }