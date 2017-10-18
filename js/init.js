$(function() {

  	/* = Changer l'aspect du header au scroll
	----------------------------------------------- */
	if (window.matchMedia("(min-width: 767px)").matches) {   
		var header = $("#header");
	    var top_search_bar = $("#top_search_bar");
	    $(window).scroll(function() {
	        var scroll = $(window).scrollTop();

	        if (scroll >= 500) {
	            header.removeClass('nav-top').addClass("nav-middle");
	            top_search_bar.removeClass('nav-top').addClass("nav-middle");
	        } else {
	            header.removeClass("nav-middle").addClass('nav-top');
	            top_search_bar.removeClass("nav-middle").addClass('nav-top');
	        }
	    });
	} else {
		// Smartphones
	}
	// redimentionnement
	function redimensionnement_v1() {
	  if("matchMedia" in window) { // Détection
	    if(window.matchMedia("(min-width:767px)").matches) {
	    	// Smartphone
	    } else {
	    	var header = $("#header");
		    var top_search_bar = $("#top_search_bar");
		    $(window).scroll(function() {
		        var scroll = $(window).scrollTop();

		        if (scroll >= 500) {
		            header.removeClass('nav-top').addClass("nav-middle");
		            top_search_bar.removeClass('nav-top').addClass("nav-middle");
		        } else {
		            header.removeClass("nav-middle").addClass('nav-top');
		            top_search_bar.removeClass("nav-middle").addClass('nav-top');
		        }
		    });
	    }
	  }
	}
	// On lie l'événement resize à la fonction
	window.addEventListener('resize', redimensionnement_v1, false);





  	/* = Material effect on click
	----------------------------------------------- */
	var ink, d, x, y;
		$(".material-onclick").click(function(e){
	    if($(this).find(".ink").length === 0){
	        $(this).prepend("<span class='ink'></span>");
	    }

	    ink = $(this).find(".ink");
	    ink.removeClass("animate");

	    if(!ink.height() && !ink.width()){
	        d = Math.max($(this).outerWidth(), $(this).outerHeight());
	        ink.css({height: d, width: d});
	    }

	    x = e.pageX - $(this).offset().left - ink.width()/2;
	    y = e.pageY - $(this).offset().top - ink.height()/2;

	    ink.css({top: y+'px', left: x+'px'}).addClass("animate");
	});


  	/* = Custom select list
	----------------------------------------------- */
	$( "select" ).wrap( "<div class='select-style'></div>" );




  	/* = Ajout de disponibilité
	----------------------------------------------- */
	$('#ajout_disponibilite').click(function(){
	    $('.list_demi_input').append('<input type="text" placeholder="Prix">').append('<input type="text" placeholder="Nombre de pièces">');
		return false;
	});



  	/* = Images preview on input type file
	----------------------------------------------- */
	
	    function readURL() {
		    var $input = $(this);
		    if (this.files && this.files[0]) {
		        var reader = new FileReader();
		        reader.onload = function(e) {
		        	/* Si on click sur un input de la barre de gauche */
		        	if($input.hasClass('imgInp')) {
			        	// Add the image in the SRC <img> next to the input
			            $input.nextAll('.image_preview_input').eq(0).attr('src', e.target.result).show().addClass('show');
			        	// Modify the label next to the <img>
		            	$input.next('label').eq(0).addClass('modify');
		            }
		            /* Si on click sur le bouton d'ajout central */
		        	if($input.hasClass('ajout_une_image')) {
			        	// Creat a previe image in the main content
			           $('#media_content').append('<img class="single_image" src="' + e.target.result + '"><input type="text" placeholder="Légende de la photo">').show();
		            }
		            /* Si on click sur le bouton d'ajout de vidéo */
		        	if($input.hasClass('ajout_video')) {
			        	// Creat a previe image in the main content
			           $('#media_content').append('<div class="video">Vidéo ajoutée</div>').show();
		            }
		        }
		        reader.readAsDataURL(this.files[0]);
		    }
		}
		$(".imgInp").change(readURL);
		$("#ajout_une_image").change(readURL);
		$("#ajout_video").change(readURL);


  	/* = Ajout des images preview pour la barre central d'ajout de biens
	----------------------------------------------- */
	/* Deux images 
	1// Limitation à 2 ajouts, pas plus */
	$('#ajout_deux_image').change(function(){
	    if(this.files.length>2)
	        alert('Vous ne pouvez insérer que deux photos')
	});
	// Prevent submission if limit is exceeded.
	$('form.add_post').submit(function(){
	    if(this.files.length>2)
	        return false;
	});
	/* Preview images */
	window.onload = function () {
	    var fileUpload = document.getElementsByClassName("fileupload");
	    for(var i = 0; i < fileUpload.length; i++){
	    fileUpload[i].onchange = showImgOnChange;
	    }
	}
	var showImgOnChange = function () {
		var $input_multiple = $(this);

	    if (typeof (FileReader) != "undefined") {
	        var dvPreview = this.nextElementSibling;

	        var regex = /^([a-zA-Z0-9\s_\\.\-:])+(.jpg|.jpeg|.gif|.png|.bmp)$/;

	        /* Si on a cliqué sur ajout de deux images, on ajoute une div parent aux deux img */
		    if($input_multiple.hasClass('ajout_deux_image')) {
			    var newDiv = $('<div class="deux_images"></div>').appendTo('#media_content');
		    }

	        /* Si on a cliqué sur ajout de slider, on ajoute la structure du slider */
		    if($input_multiple.hasClass('ajout_slider')) {
	        	var newSwiper_bien = $('<div class="swiper-container swiper_bien"></div><input type="text" placeholder="Légende du slider">').appendTo('#media_content');
	        	var newSwiper_wrapper_bien = $('<div class="swiper-wrapper"></div>').appendTo(newSwiper_bien);
	        	var newSwiper_wrapper_pagination = $('<div class="swiper-pagination swiper-pagination_bien"></div>').appendTo(newSwiper_bien);
		    }


	        for (var i = 0; i < this.files.length; i++) {
		        var file = this.files[i];
		        if (regex.test(file.name.toLowerCase())) {
		        	var reader = new FileReader();
		           	reader.onload = function (e) {

				        /* Si on a cliqué sur ajout de deux images, on ajoute deux preview img */
					    if($input_multiple.hasClass('ajout_deux_image')) {
			            	$(newDiv).append('<div class="demi"><img src="' + e.target.result + '"><input type="text" placeholder="Légende de la photo"></div>').show();
					    }

				        /* Si on a cliqué sur ajout de slider, on ajoute des slides dans la structure du slider */
					    if($input_multiple.hasClass('ajout_slider')) {
			            	$(newSwiper_wrapper_bien).append('<div class="swiper-slide"><img src="' + e.target.result + '"></div>').show();
					    }

			    var swiper2 = new Swiper('.swiper_bien', {
			        effect: 'slide',
			        pagination: '.swiper-pagination_bien',
			        paginationClickable: true
			    });


		         }
		         reader.readAsDataURL(file);
		        } else {
			        alert(file.name + " is not a valid image file.");
			        return false;
		        }
	        }
	    } else {
	    	alert("This browser does not support HTML5 FileReader.");
	    }
	}



	/* = Apparition du la top search bar au scrolltop
	----------------------------------------------- */
	if (window.matchMedia("(min-width: 767px)").matches) {    	
		var iScrollPos = 0;
		$(window).scroll(function () {
			var iCurScrollPos = $(this).scrollTop();
			if (iCurScrollPos > iScrollPos) {
				$('#top_search_bar').removeClass('show');
			} else {
				$('#top_search_bar').addClass('show');
			}
			iScrollPos = iCurScrollPos;
		});
	} else {
		// Smartphones
	}
	// redimentionnement
	function redimensionnement_v1() {
	  if("matchMedia" in window) { // Détection
	    if(window.matchMedia("(min-width:767px)").matches) {
	    	// Smartphone
	    } else {	
	    	var iScrollPos = 0;
			$(window).scroll(function () {
				var iCurScrollPos = $(this).scrollTop();
				if (iCurScrollPos > iScrollPos) {
					$('#top_search_bar').removeClass('show');
				} else {
					$('#top_search_bar').addClass('show');
				}
				iScrollPos = iCurScrollPos;
			});
	    }
	  }
	}
	// On lie l'événement resize à la fonction
	window.addEventListener('resize', redimensionnement_v1, false);




	/* = Apparition du la top search bar sur smartphone
	----------------------------------------------- */
	$('#search_smartphone').click(function(){
		$('#top_search_bar .reveal, #filter .reveal').toggleClass('show');
		$('#close_top_search_bar').toggleClass('show');
		$('#open_top_search_bar').toggleClass('show');
		return false;
	});
	$('#close_top_search_bar').click(function(){
		$('#close_top_search_bar').toggleClass('show');
		$('#open_top_search_bar').toggleClass('show');
		$('#top_search_bar .reveal, #filter .reveal').toggleClass('show');
		return false;
	});




	/* = Material design OnClick
	----------------------------------------------- */
	var ink, d, x, y;
		$(".material-onclick").click(function(e){
	    if($(this).find(".ink").length === 0){
	        $(this).prepend("<span class='ink'></span>");
	    }
	    
	    ink = $(this).find(".ink");
	    ink.removeClass("animate");
	     
	    if(!ink.height() && !ink.width()){
	        d = Math.max($(this).outerWidth(), $(this).outerHeight());
	        ink.css({height: d, width: d});
	    }
	     
	    x = e.pageX - $(this).offset().left - ink.width()/2;
	    y = e.pageY - $(this).offset().top - ink.height()/2;
	     
	    ink.css({top: y+'px', left: x+'px'}).addClass("animate");
	});


	/* = Masonry
	----------------------------------------------- */

	if (window.matchMedia("(min-width: 767px)").matches) {
		/* Designers list */
		var $grid_designer = $('.list_designers').imagesLoaded( function() {
		  // init Masonry after all images have loaded
		  $grid_designer.masonry({
			  itemSelector: '.lanceur_deisgner',
			  columnWidth: '.list_designers-sizer',
		  	  percentPosition: true,
		  	  gutter: 30
		  });
		});
		/* Professionnels list HP */
		var $grid_professionnels = $('.list_professionnels').imagesLoaded( function() {
		  // init Masonry after all images have loaded
		  $grid_professionnels.masonry({
			  itemSelector: '.item_professionel',
			  columnWidth: '.item_professionel_sizer',
		  	  percentPosition: true,
		  	  gutter: 30
		  });
		});
	} else {
	}
  

	/* = Menu responsive
	----------------------------------------------- */
	if (window.matchMedia("(min-width: 767px)").matches) {
	  // Il y a de la place
	} else {
	  $('.show_menu_mobile').addClass('mobile');
	  $('#primary_navigation').addClass('mobile');
	}
	// redimentionnement
	function redimensionnement() {
	  var result = document.getElementById('result');
	  if("matchMedia" in window) { // Détection
	    if(window.matchMedia("(min-width:767px)").matches) {
	      $('.show_menu_mobile').removeClass('mobile');
	      $('#primary_navigation').removeClass('mobile');
	      $('#primary_navigation').removeClass('show');
	    } else {
	      $('.show_menu_mobile').addClass('mobile');
	      $('#primary_navigation').addClass('mobile');
	    }
	  }
	}
	// On lie l'événement resize à la fonction
	window.addEventListener('resize', redimensionnement, false);

	// apparition du menu au clic sur mobile
	$('.show_menu_mobile').click(function(){
	    $('#primary_navigation').toggleClass('show');
		return false;
	});



  	/* = Slider HP // Swiper iDangerous
	----------------------------------------------- */
    var swiper1 = new Swiper('.swiper_hp', {
        effect: 'fade',
        autoplay: 2500,
        loop: true
    });


  	/* = Slider Biens // Swiper iDangerous
	----------------------------------------------- */
	var swiper2 = new Swiper('.swiper_bien', {
	    effect: 'slide',
	    pagination: '.swiper-pagination_bien',
	    paginationClickable: true
	});


  	/* = Grid horizontal layout
	----------------------------------------------- */

	if (window.matchMedia("(min-width: 767px)").matches) {
		$('#grid_cat').packery({
		  itemSelector: '.grid-item',
		  isHorizontal: true,
		  gutter: 30
		});
		/* Custom scrollbar */
	    $(window).on("load",function(){
	           $("#scrollable").mCustomScrollbar({
			    axis:"x",
			    theme:"minimal-dark"
			});
	    });
	} else {
	}


  	/* = Sticky carte single professionnels
	----------------------------------------------- */
	$('#banner_image').css("height",($("#carte_sticky").height()+233)+"px");

	if (window.matchMedia("(min-width: 767px)").matches) {   
		var asidecarte = $("#carte_sticky");
	    $(window).scroll(function() {
	        var scroll_sticky = $(window).scrollTop();

	        if (scroll_sticky >= 150) {
	            asidecarte.addClass("sticky");
	        } else {
	            asidecarte.removeClass("sticky");
	        }
	    });
	} else {
		// Smartphones
	}
	// redimentionnement
	function redimensionnement_sticky() {
	  if("matchMedia" in window) { // Détection
	    if(window.matchMedia("(min-width:767px)").matches) {
	    	// Smartphone
	    } else {
	    	var asidecarte = $("#carte_sticky");
		    $(window).scroll(function() {
		        var scroll_sticky = $(window).scrollTop();

		        if (scroll_sticky >= 150) {
	            	asidecarte.addClass("sticky");
		        } else {
	            	asidecarte.removeClass("sticky");
		        }
		    });
	    }
	  }
	}
	// On lie l'événement resize à la fonction
	window.addEventListener('resize', redimensionnement_sticky, false);




});