$(function() {

  	/* = Changer l'aspect du header au scroll
	----------------------------------------------- */
	if (window.matchMedia("(min-width: 767px)").matches) {   
		var header = $("#header");
	    var top_search_bar = $("#top_search_bar");
	    var comparateur = $("#comparateur");
	    $(window).scroll(function() {
	        var scroll = $(window).scrollTop();

	        if (scroll >= 500) {
	            header.removeClass('nav-top').addClass("nav-middle");
	            top_search_bar.removeClass('nav-top').addClass("nav-middle");
	            comparateur.removeClass('nav-top').addClass("nav-middle");
	        } else {
	            header.removeClass("nav-middle").addClass('nav-top');
	            top_search_bar.removeClass("nav-middle").addClass('nav-top');
	            comparateur.removeClass("nav-middle").addClass('nav-top');
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
	    	var comparateur = $("#comparateur");
		    $(window).scroll(function() {
		        var scroll = $(window).scrollTop();

		        if (scroll >= 500) {
		            header.removeClass('nav-top').addClass("nav-middle");
		            top_search_bar.removeClass('nav-top').addClass("nav-middle");
		            comparateur.removeClass('nav-top').addClass("nav-middle");
		        } else {
		            header.removeClass("nav-middle").addClass('nav-top');
		            top_search_bar.removeClass("nav-middle").addClass('nav-top');
		            comparateur.removeClass("nav-middle").addClass('nav-top');
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


  	/* = Ajout des images preview pour la barre central d'ajout de biens
	----------------------------------------------- */
	/* UNE IMAGE */
	var counter = 1;  //Le décompte commence à 1
	$('.ajout_bien #ajout_photo').click(function(){
		counter++;
		$('#media_content form').append('<div class="ajout"><input id="ajout_image'+counter+'" name="ajout_image'+counter+'" type="file" class="imgInp"><label for="ajout_image'+counter+'"><svg viewBox="0 0 24 24"><path fill="none" d="M0,0.0002344h24v24H0V0.0002344z"/><path d="M21,19.0002346v-14c0-1.1000001-0.8999996-2.0000002-2-2.0000002H5c-1.0999999,0-2,0.9000001-2,2.0000002v14c0,1.1000004,0.9000001,2,2,2h14C20.1000004,21.0002346,21,20.100235,21,19.0002346z M8.5,13.5002346l2.5,3.0100002l3.5-4.5100002l4.5,6H5L8.5,13.5002346z"/></svg><span class="add">Ajouter une photo</span><span class="modify">Modifier la photo</span></label><img class="image_preview_input" src="#"><input type="text" placeholder="Légende de la photo"></div>');
	
	    function readURL() {
		    var $input_central = $(this);
		    if (this.files && this.files[0]) {
		        var reader = new FileReader();
		        reader.onload = function(e) {
		        	/* Si on click sur un input de la barre de gauche */
		        	if($input_central.hasClass('imgInp')) {
			        	// Add the image in the SRC <img> next to the input
			            $input_central.nextAll('.image_preview_input').eq(0).attr('src', e.target.result).show().addClass('show');
			        	// Modify the label next to the <img>
		            	$input_central.next('label').eq(0).addClass('modify');
		            }
		        }
		        reader.readAsDataURL(this.files[0]);
		    }
		}
		$(".imgInp").change(readURL);
	});

	/* DEUX IMAGE */
	var counter_double = 1;  //Le décompte commence à 1
	var counter_double_image = 1;  //Le décompte commence à 1
	$('.ajout_bien #ajout_deux_photo').click(function(){
		counter_double_image++;
		$('#media_content form').append('<div class="ajout" id="double'+counter_double+'"></div>');
		$('#double'+counter_double+'').append('<div class="demi"><input id="ajout_image_double'+counter_double_image+'" name="ajout_image_double'+counter_double_image+'" type="file" class="imgInp"><label for="ajout_image_double'+counter_double_image+'"><svg viewBox="0 0 24 24"><path fill="none" d="M0,0.0002344h24v24H0V0.0002344z"/><path d="M21,19.0002346v-14c0-1.1000001-0.8999996-2.0000002-2-2.0000002H5c-1.0999999,0-2,0.9000001-2,2.0000002v14c0,1.1000004,0.9000001,2,2,2h14C20.1000004,21.0002346,21,20.100235,21,19.0002346z M8.5,13.5002346l2.5,3.0100002l3.5-4.5100002l4.5,6H5L8.5,13.5002346z"/></svg><span class="add">Ajouter une photo</span><span class="modify">Modifier la photo</span></label><img class="image_preview_input" src="#"><input type="text" placeholder="Légende de la photo"></div>');
		counter_double_image++;
		$('#double'+counter_double+'').append('<div class="demi"><input id="ajout_image_double'+counter_double_image+'" name="ajout_image_double'+counter_double_image+'" type="file" class="imgInp"><label for="ajout_image_double'+counter_double_image+'"><svg viewBox="0 0 24 24"><path fill="none" d="M0,0.0002344h24v24H0V0.0002344z"/><path d="M21,19.0002346v-14c0-1.1000001-0.8999996-2.0000002-2-2.0000002H5c-1.0999999,0-2,0.9000001-2,2.0000002v14c0,1.1000004,0.9000001,2,2,2h14C20.1000004,21.0002346,21,20.100235,21,19.0002346z M8.5,13.5002346l2.5,3.0100002l3.5-4.5100002l4.5,6H5L8.5,13.5002346z"/></svg><span class="add">Ajouter une photo</span><span class="modify">Modifier la photo</span></label><img class="image_preview_input" src="#"><input type="text" placeholder="Légende de la photo"></div><hr class="clear">');
		counter_double_image++;
		counter_double++;
	
	    function readURL() {
		    var $input_central = $(this);
		    if (this.files && this.files[0]) {
		        var reader = new FileReader();
		        reader.onload = function(e) {
		        	/* Si on click sur un input de la barre de gauche */
		        	if($input_central.hasClass('imgInp')) {
			        	// Add the image in the SRC <img> next to the input
			            $input_central.nextAll('.image_preview_input').eq(0).attr('src', e.target.result).show().addClass('show');
			        	// Modify the label next to the <img>
		            	$input_central.next('label').eq(0).addClass('modify');
		            }
		        }
		        reader.readAsDataURL(this.files[0]);
		    }
		}
		$(".imgInp").change(readURL);
	});

	/* UNE VIDEO */
	var counter_video = 1;  //Le décompte commence à 1
	$('.ajout_bien #ajout_video').click(function(){
		counter_video++;
		$('#media_content form').append('<div class="ajout"><input id="ajout_video'+counter_video+'" name="ajout_video'+counter_video+'" type="file" class="imgInp"><label for="ajout_video'+counter_video+'"><svg viewBox="0 0 24 24"><path fill="none" d="M0,0h24v24H0V0z"/><path d="M12,2C6.48,2,2,6.48,2,12s4.48,10,10,10s10-4.4799995,10-10S17.5200005,2,12,2z M10,16.5v-9l6,4.5L10,16.5z"/></svg><span class="add">Ajouter une vidéo</span><span class="modify">Modifier la vidéo</span></label><div class="video"></div></div>');
		$('#ajout_video'+counter_video+'').change(function(e){
			var fileName = $(this).val().replace(/C:\\fakepath\\/i, '');
			$(this).nextAll('.video').addClass('show').html('Vidéo ajoutée : '+fileName);
		    $(this).next('label').eq(0).addClass('modify');
	    });
	});

	/* Slider */
	var counter_slider = 1;  //Le décompte commence à 1
	var counter_slider_image = 1;  //Le décompte commence à 1
	$('.ajout_bien #ajout_slider').click(function(){
		counter_slider_image++;
		// Ajout de la structure du slider
		$('#media_content form').append('<div class="ajout" id="slider'+counter_slider+'"><div class="swiper-container swiper_bien"><div class="swiper-wrapper"></div><div class="swiper-pagination swiper-pagination_bien"></div></div><input type="text" placeholder="Légende du slider"></div>');
		// Ajout des cinq slides
		$('#slider'+counter_slider+' .swiper-wrapper').append('<div class="swiper-slide"><input id="ajout_image_slider'+counter_slider_image+'" name="ajout_image_slider'+counter_slider_image+'" type="file" class="imgInp"><label for="ajout_image_slider'+counter_slider_image+'"><svg viewBox="0 0 24 24"><path fill="none" d="M0,0.0002344h24v24H0V0.0002344z"/><path d="M21,19.0002346v-14c0-1.1000001-0.8999996-2.0000002-2-2.0000002H5c-1.0999999,0-2,0.9000001-2,2.0000002v14c0,1.1000004,0.9000001,2,2,2h14C20.1000004,21.0002346,21,20.100235,21,19.0002346z M8.5,13.5002346l2.5,3.0100002l3.5-4.5100002l4.5,6H5L8.5,13.5002346z"/></svg><span class="add">Ajouter une photo</span><span class="modify">Modifier la photo</span></label><img class="image_preview_input" src="#"></div>');
		counter_slider_image++;
		$('#slider'+counter_slider+' .swiper-wrapper').append('<div class="swiper-slide"><input id="ajout_image_slider'+counter_slider_image+'" name="ajout_image_slider'+counter_slider_image+'" type="file" class="imgInp"><label for="ajout_image_slider'+counter_slider_image+'"><svg viewBox="0 0 24 24"><path fill="none" d="M0,0.0002344h24v24H0V0.0002344z"/><path d="M21,19.0002346v-14c0-1.1000001-0.8999996-2.0000002-2-2.0000002H5c-1.0999999,0-2,0.9000001-2,2.0000002v14c0,1.1000004,0.9000001,2,2,2h14C20.1000004,21.0002346,21,20.100235,21,19.0002346z M8.5,13.5002346l2.5,3.0100002l3.5-4.5100002l4.5,6H5L8.5,13.5002346z"/></svg><span class="add">Ajouter une photo</span><span class="modify">Modifier la photo</span></label><img class="image_preview_input" src="#"></div>');
		counter_slider_image++;
		$('#slider'+counter_slider+' .swiper-wrapper').append('<div class="swiper-slide"><input id="ajout_image_slider'+counter_slider_image+'" name="ajout_image_slider'+counter_slider_image+'" type="file" class="imgInp"><label for="ajout_image_slider'+counter_slider_image+'"><svg viewBox="0 0 24 24"><path fill="none" d="M0,0.0002344h24v24H0V0.0002344z"/><path d="M21,19.0002346v-14c0-1.1000001-0.8999996-2.0000002-2-2.0000002H5c-1.0999999,0-2,0.9000001-2,2.0000002v14c0,1.1000004,0.9000001,2,2,2h14C20.1000004,21.0002346,21,20.100235,21,19.0002346z M8.5,13.5002346l2.5,3.0100002l3.5-4.5100002l4.5,6H5L8.5,13.5002346z"/></svg><span class="add">Ajouter une photo</span><span class="modify">Modifier la photo</span></label><img class="image_preview_input" src="#"></div>');
		counter_slider_image++;
		$('#slider'+counter_slider+' .swiper-wrapper').append('<div class="swiper-slide"><input id="ajout_image_slider'+counter_slider_image+'" name="ajout_image_slider'+counter_slider_image+'" type="file" class="imgInp"><label for="ajout_image_slider'+counter_slider_image+'"><svg viewBox="0 0 24 24"><path fill="none" d="M0,0.0002344h24v24H0V0.0002344z"/><path d="M21,19.0002346v-14c0-1.1000001-0.8999996-2.0000002-2-2.0000002H5c-1.0999999,0-2,0.9000001-2,2.0000002v14c0,1.1000004,0.9000001,2,2,2h14C20.1000004,21.0002346,21,20.100235,21,19.0002346z M8.5,13.5002346l2.5,3.0100002l3.5-4.5100002l4.5,6H5L8.5,13.5002346z"/></svg><span class="add">Ajouter une photo</span><span class="modify">Modifier la photo</span></label><img class="image_preview_input" src="#"></div>');
		counter_slider_image++;
		$('#slider'+counter_slider+' .swiper-wrapper').append('<div class="swiper-slide"><input id="ajout_image_slider'+counter_slider_image+'" name="ajout_image_slider'+counter_slider_image+'" type="file" class="imgInp"><label for="ajout_image_slider'+counter_slider_image+'"><svg viewBox="0 0 24 24"><path fill="none" d="M0,0.0002344h24v24H0V0.0002344z"/><path d="M21,19.0002346v-14c0-1.1000001-0.8999996-2.0000002-2-2.0000002H5c-1.0999999,0-2,0.9000001-2,2.0000002v14c0,1.1000004,0.9000001,2,2,2h14C20.1000004,21.0002346,21,20.100235,21,19.0002346z M8.5,13.5002346l2.5,3.0100002l3.5-4.5100002l4.5,6H5L8.5,13.5002346z"/></svg><span class="add">Ajouter une photo</span><span class="modify">Modifier la photo</span></label><img class="image_preview_input" src="#"></div>');
		counter_slider_image++;
		counter_slider++;

				    var swiper2 = new Swiper('.swiper_bien', {
				        effect: 'slide',
				        pagination: '.swiper-pagination_bien',
				        paginationClickable: true
				    });
	
	    function readURL() {
		    var $input_central = $(this);
		    if (this.files && this.files[0]) {
		        var reader = new FileReader();
		        reader.onload = function(e) {
		        	/* Si on click sur un input de la barre de gauche */
		        	if($input_central.hasClass('imgInp')) {
			        	// Add the image in the SRC <img> next to the input
			            $input_central.nextAll('.image_preview_input').eq(0).attr('src', e.target.result).show().addClass('show');
			        	// Modify the label next to the <img>
		            	$input_central.next('label').eq(0).addClass('modify');
		            }
		        }
		        reader.readAsDataURL(this.files[0]);
		    }
		}
		$(".imgInp").change(readURL);
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
		$("#ajout_video").change(readURL);


  	/* = Ajout de l'image preview dans le banner // Page professionnel
	----------------------------------------------- */
	$('#image_banner').click(function(){
	    function readURL() {
		    var $input_central = $(this);
		    if (this.files && this.files[0]) {
		        var reader = new FileReader();
		        reader.onload = function(e) {
		        	/* Si on click sur un input de la barre de gauche */
		        	if($input_central.hasClass('imgInp')) {
			        	// Add the image in the SRC <img> next to the input
			            $input.nextAll('.image_preview_input').eq(0).attr('src', e.target.result).show().addClass('show');
			        	// Modify the label next to the <img>
		            	$input_central.next('label').eq(0).addClass('modify');
		            }
		        }
		        reader.readAsDataURL(this.files[0]);
		    }
		}
		$(".imgInp").change(readURL);
	});






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


	/* = Masonry // Home page
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
		var $grid_dernieres_annonces = $('.list_professionnels').imagesLoaded( function() {
		  // init Masonry after all images have loaded
		  $grid_dernieres_annonces.masonry({
			  itemSelector: '.item_professionel',
			  columnWidth: '.item_professionel_sizer',
		  	  percentPosition: true,
		  	  gutter: 30
		  });
		});
	}


	/* = Masonry // Fiche professionnel
	----------------------------------------------- */
	if (window.matchMedia("(min-width: 1200px)").matches) {
		var $grid_professionnels = $('.liste_dernieres_annonces').imagesLoaded( function() {
		  // init Masonry after all images have loaded
		  $grid_professionnels.masonry({
			  itemSelector: '.item_professionel',
			  columnWidth: '.item_professionel_sizer',
		  	  percentPosition: true,
		  	  gutter: 30
		  });
		});
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

	if (window.matchMedia("(min-width: 767px)").matches) {
		$('#banner_image').css("height",($("#carte_sticky").height()+243)+"px"); 
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
			$('#banner_image').css("height",($("#carte_sticky").height()+243)+"px");
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





  	/* = Apparition des bouton contact sur le comparateur
	----------------------------------------------- */
	$('#table_comparateur tr td:nth-child(2)').mouseover(function(){
	    $('#table_comparateur .contact_bien_01 .btn').addClass('show');
		return false;
	});
	$('#table_comparateur tr td:nth-child(2)').mouseout(function(){
	    $('#table_comparateur .contact_bien_01 .btn').removeClass('show');
		return false;
	});
	$('#table_comparateur tr td:nth-child(3)').mouseover(function(){
	    $('#table_comparateur .contact_bien_02 .btn').addClass('show');
		return false;
	});
	$('#table_comparateur tr td:nth-child(3)').mouseout(function(){
	    $('#table_comparateur .contact_bien_02 .btn').removeClass('show');
		return false;
	});
	$('#table_comparateur tr td:nth-child(4)').mouseover(function(){
	    $('#table_comparateur .contact_bien_03 .btn').addClass('show');
		return false;
	});
	$('#table_comparateur tr td:nth-child(4)').mouseout(function(){
	    $('#table_comparateur .contact_bien_03 .btn').removeClass('show');
		return false;
	});
	$('#table_comparateur tr td:nth-child(5)').mouseover(function(){
	    $('#table_comparateur .contact_bien_04 .btn').addClass('show');
		return false;
	});
	$('#table_comparateur tr td:nth-child(5)').mouseout(function(){
	    $('#table_comparateur .contact_bien_04 .btn').removeClass('show');
		return false;
	});



  	/* = Tabulation favoris
	----------------------------------------------- */
	$( "#tabs_favoris" ).tabs();



  	/* = Changer le positionnement du comparateur si la barre de recherche est présente
	----------------------------------------------- */
	$(document).ready(function() {
	    if ($('#top_search_bar') != null ) {
	        $('#comparateur').addClass('bellow');
	    }
	});



  	/* = Tableaux
	----------------------------------------------- */
	$(document).ready(function() {
		// Setup - add a text input to each footer cell
		$('.table-filter-up thead tr#filterrow th').each( function () {
		    var title = $('.table-filter-up thead th').eq( $(this).index() ).text();
		    $(this).html( '<input type="text" onclick="stopPropagation(event);" placeholder="'+title+'" />' );
		} );

		// Apply the filter
		$(".table-filter-up thead input").on( 'keyup change', function () {
		    table
		        .column( $(this).parent().index()+':visible' )
		        .search( this.value )
		        .draw();
		} );
		 
		// DataTable
		var table = $('.table-filter-up').DataTable( {
		    orderCellsTop: true,
		    "scrollX": true
		} );

		function stopPropagation(evt) {
			if (evt.stopPropagation !== undefined) {
				evt.stopPropagation();
			} else {
				evt.cancelBubble = true;
			}
		}

	} );



  	/* = Ajout de Team // Fiche professionnelle
	----------------------------------------------- */
	var counter_team = 1;  //Le décompte commence à 1
	$('#ajout_team').click(function(){
	    $('.list_team').append('<div class="tiers"><input id="ajout_team'+counter_team+'" name="ajout_team'+counter_team+'" type="file" class="imgInp"><label for="ajout_team'+counter_team+'"><svg viewBox="0 0 24 24"><path fill="none" d="M0,0.0002344h24v24H0V0.0002344z"/><path d="M21,19.0002346v-14c0-1.1000001-0.8999996-2.0000002-2-2.0000002H5c-1.0999999,0-2,0.9000001-2,2.0000002v14c0,1.1000004,0.9000001,2,2,2h14C20.1000004,21.0002346,21,20.100235,21,19.0002346z M8.5,13.5002346l2.5,3.0100002l3.5-4.5100002l4.5,6H5L8.5,13.5002346z"/></svg><span class="add">Ajouter une photo</span><span class="modify">Modifier la photo</span></label><img class="image_preview_input" src="#"><input type="text" placeholder="Nom"></div>');
	
	    function readURL() {
		    var $input_central = $(this);
		    if (this.files && this.files[0]) {
		        var reader = new FileReader();
		        reader.onload = function(e) {
		        	/* Si on click sur un input de la barre de gauche */
		        	if($input_central.hasClass('imgInp')) {
			        	// Add the image in the SRC <img> next to the input
			            $input_central.nextAll('.image_preview_input').eq(0).attr('src', e.target.result).show().addClass('show');
			        	// Modify the label next to the <img>
		            	$input_central.next('label').eq(0).addClass('modify');
		            }
		        }
		        reader.readAsDataURL(this.files[0]);
		    }
		}
		$(".imgInp").change(readURL);
		counter_team++;
		return false;
	});



  	/* = Ajout de Descriptions // Fiche professionnelle
	----------------------------------------------- */
	/* UNE IMAGE */
	var counter_photo_alone = 1;  //Le décompte commence à 1
	$('.ajout_single_pro #ajout_photo').click(function(){
		counter_photo_alone++;
		$('#inner_ajout_pro').append('<div class="section content grande_image"><input id="ajout_image'+counter_photo_alone+'" name="ajout_image'+counter_photo_alone+'" type="file" class="imgInp"><label for="ajout_image'+counter_photo_alone+'"><svg viewBox="0 0 24 24"><path fill="none" d="M0,0.0002344h24v24H0V0.0002344z"/><path d="M21,19.0002346v-14c0-1.1000001-0.8999996-2.0000002-2-2.0000002H5c-1.0999999,0-2,0.9000001-2,2.0000002v14c0,1.1000004,0.9000001,2,2,2h14C20.1000004,21.0002346,21,20.100235,21,19.0002346z M8.5,13.5002346l2.5,3.0100002l3.5-4.5100002l4.5,6H5L8.5,13.5002346z"/></svg><span class="add">Ajouter une photo</span><span class="modify">Modifier la photo</span></label><img class="image_preview_input" src="#"></div>');
	
	    function readURL() {
		    var $input_central = $(this);
		    if (this.files && this.files[0]) {
		        var reader = new FileReader();
		        reader.onload = function(e) {
		        	/* Si on click sur un input de la barre de gauche */
		        	if($input_central.hasClass('imgInp')) {
			        	// Add the image in the SRC <img> next to the input
			            $input_central.nextAll('.image_preview_input').eq(0).attr('src', e.target.result).show().addClass('show');
			        	// Modify the label next to the <img>
		            	$input_central.next('label').eq(0).addClass('modify');
		            }
		        }
		        reader.readAsDataURL(this.files[0]);
		    }
		}
		$(".imgInp").change(readURL);
	});

	/* DU TEXTE */
	var counter_text_alone = 1;  //Le décompte commence à 1
	$('.ajout_single_pro #ajout_texte').click(function(){
		counter_text_alone++;
		$('#inner_ajout_pro').append('<div class="section content texte"><textarea placeholder="Entrez le texte ici"></textarea></div>');
		counter_text_alone++;
	});

	/* DEUX COLONNES */
	var counter_deux_colonnes = 1;  //Le décompte commence à 1
	$('.ajout_single_pro #ajout_deux_colonnes').click(function(){
		/* Ajout de la section et des deux divs .one et .two */
		$('#inner_ajout_pro').append('<div class="section content deux_colonnes" id="deux_colonnes'+counter_deux_colonnes+'"><div class="one"></div><div class="two"></div></div>');
		/* ajout des inputs d'image */
		$('#deux_colonnes'+counter_deux_colonnes+' .one').append('<div class="trigger ajout_photo_double"><input id="ajout_image_one_deux_colonnes'+counter_deux_colonnes+'" name="ajout_image_one_deux_colonnes'+counter_deux_colonnes+'" type="file" class="imgInp"><label for="ajout_image_one_deux_colonnes'+counter_deux_colonnes+'"><svg viewBox="0 0 24 24"><path fill="none" d="M0,0.0002344h24v24H0V0.0002344z"/><path d="M21,19.0002346v-14c0-1.1000001-0.8999996-2.0000002-2-2.0000002H5c-1.0999999,0-2,0.9000001-2,2.0000002v14c0,1.1000004,0.9000001,2,2,2h14C20.1000004,21.0002346,21,20.100235,21,19.0002346z M8.5,13.5002346l2.5,3.0100002l3.5-4.5100002l4.5,6H5L8.5,13.5002346z"/></svg><span class="add">Ajouter une photo</span><span class="modify">Modifier la photo</span></label><img class="image_preview_input" src="#"></div>');
		$('#deux_colonnes'+counter_deux_colonnes+' .two').append('<div class="trigger ajout_photo_double"><input id="ajout_image_two_deux_colonnes'+counter_deux_colonnes+'" name="ajout_image_two_deux_colonnes'+counter_deux_colonnes+'" type="file" class="imgInp"><label for="ajout_image_two_deux_colonnes'+counter_deux_colonnes+'"><svg viewBox="0 0 24 24"><path fill="none" d="M0,0.0002344h24v24H0V0.0002344z"/><path d="M21,19.0002346v-14c0-1.1000001-0.8999996-2.0000002-2-2.0000002H5c-1.0999999,0-2,0.9000001-2,2.0000002v14c0,1.1000004,0.9000001,2,2,2h14C20.1000004,21.0002346,21,20.100235,21,19.0002346z M8.5,13.5002346l2.5,3.0100002l3.5-4.5100002l4.5,6H5L8.5,13.5002346z"/></svg><span class="add">Ajouter une photo</span><span class="modify">Modifier la photo</span></label><img class="image_preview_input" src="#"></div>');
		/* ajout des inputs vidéo */
		$('#deux_colonnes'+counter_deux_colonnes+' .one').append('<div class="trigger ajout ajout_video_double"><input id="ajout_video_one_deux_colonnes'+counter_deux_colonnes+'" name="ajout_video_one_deux_colonnes'+counter_deux_colonnes+'" type="file"><label for="ajout_video_one_deux_colonnes'+counter_deux_colonnes+'"><svg viewBox="0 0 24 24"><path fill="none" d="M0,0h24v24H0V0z"/><path d="M12,2C6.48,2,2,6.48,2,12s4.48,10,10,10s10-4.4799995,10-10S17.5200005,2,12,2z M10,16.5v-9l6,4.5L10,16.5z"/></svg><span class="add">Ajouter une vidéo</span><span class="modify">Modifier la vidéo</span></label><div class="video"></div></div>');
		$('#deux_colonnes'+counter_deux_colonnes+' .two').append('<div class="ajout ajout_video_double trigger"><input id="ajout_video_two_deux_colonnes'+counter_deux_colonnes+'" name="ajout_video_two_deux_colonnes'+counter_deux_colonnes+'" type="file"><label for="ajout_video_two_deux_colonnes'+counter_deux_colonnes+'"><svg viewBox="0 0 24 24"><path fill="none" d="M0,0h24v24H0V0z"/><path d="M12,2C6.48,2,2,6.48,2,12s4.48,10,10,10s10-4.4799995,10-10S17.5200005,2,12,2z M10,16.5v-9l6,4.5L10,16.5z"/></svg><span class="add">Ajouter une vidéo</span><span class="modify">Modifier la vidéo</span></label><div class="video"></div></div>');
		/* ajout des inputs texte */
		$('#deux_colonnes'+counter_deux_colonnes+' .one').append('<div id="ajout_text_one'+counter_deux_colonnes+'" class="ajout ajout_texte trigger"><svg viewBox="0 0 24 24"><path d="M9,9.9999704v11.8000002h2V3.9999707h2v17.7999992h2V3.9999707h2v-2H9c-2.1999998,0-4,1.8-4,4S6.8000002,9.9999704,9,9.9999704z"/><path fill="none" d="M0-0.0000293h24v24H0V-0.0000293z"/></svg><span class="add">Ajouter du texte</span></div><textarea placeholder="Entrez le texte ici"></textarea>');
		$('#deux_colonnes'+counter_deux_colonnes+' .two').append('<div id="ajout_text_two'+counter_deux_colonnes+'" class="ajout ajout_texte trigger"><svg viewBox="0 0 24 24"><path d="M9,9.9999704v11.8000002h2V3.9999707h2v17.7999992h2V3.9999707h2v-2H9c-2.1999998,0-4,1.8-4,4S6.8000002,9.9999704,9,9.9999704z"/><path fill="none" d="M0-0.0000293h24v24H0V-0.0000293z"/></svg><span class="add">Ajouter du texte</span></div><textarea placeholder="Entrez le texte ici"></textarea>');

		// var minus 1
		// Apparition textarea
		$('#ajout_text_one'+counter_deux_colonnes+'').click(function(){
			var number = counter_deux_colonnes - 1;
		    $(this).next('textarea').addClass('show');
		    $(this).addClass('modify');
		    // retrait des autres boutons d'ajout
		    var parent = $(this).parent('.one');
		    var children_trigger = $(parent).children('.trigger');
			$(children_trigger).not(this).each(function(){
				$(this).remove();
			});
	    });
		$('#ajout_text_two'+counter_deux_colonnes+'').click(function(){
			var number = counter_deux_colonnes - 1;
		    $(this).next('textarea').addClass('show');
		    $(this).addClass('modify');
		    // retrait des autres boutons d'ajout
		    var parent = $(this).parent('.two');
		    var children_trigger = $(parent).children('.trigger');
			$(children_trigger).not(this).each(function(){
				$(this).remove();
			});
	    });

		// Preview video
		$('#ajout_video_one_deux_colonnes'+counter_deux_colonnes+'').change(function(e){
			var fileName = $(this).val().replace(/C:\\fakepath\\/i, '');
			$(this).nextAll('.video').addClass('show').html('Vidéo ajoutée : '+fileName);
		    $(this).next('label').eq(0).addClass('modify');
		    // retrait des autres boutons d'ajout
		    var parent = $(this).parent('.trigger');
		    var parent_2 = $(parent).parent('.one');
			$(parent_2).children('.ajout_texte').remove();
			$(parent_2).children('textarea').remove();
			$(parent_2).children('.ajout_photo_double').remove();
	    });
		$('#ajout_video_two_deux_colonnes'+counter_deux_colonnes+'').change(function(e){
			var fileName = $(this).val().replace(/C:\\fakepath\\/i, '');
			$(this).nextAll('.video').addClass('show').html('Vidéo ajoutée : '+fileName);
		    $(this).next('label').eq(0).addClass('modify');
		    // retrait des autres boutons d'ajout
		    var parent = $(this).parent('.trigger');
		    var parent_2 = $(parent).parent('.two');
			$(parent_2).children('.ajout_texte').remove();
			$(parent_2).children('textarea').remove();
			$(parent_2).children('.ajout_photo_double').remove();
	    });


		// On incrémente le compteur
		counter_deux_colonnes++;

		// Fonction preview image
	    function readURL() {
		    var $input_central = $(this);
		    if (this.files && this.files[0]) {
		        var reader = new FileReader();
		        reader.onload = function(e) {
		        	/* Si on click sur un input de la barre de gauche */
		        	if($input_central.hasClass('imgInp')) {
			        	// Add the image in the SRC <img> next to the input
			            $input_central.nextAll('.image_preview_input').eq(0).attr('src', e.target.result).show().addClass('show');
			        	// Modify the label next to the <img>
		            	$input_central.next('label').eq(0).addClass('modify');
					    // retrait des autres boutons d'ajout
					    var neo_parent = $($input_central).parent('.trigger');
					    var neo_parent_2 = $(neo_parent).parent();
						$(neo_parent_2).children('.ajout_texte').remove();
						$(neo_parent_2).children('textarea').remove();
						$(neo_parent_2).children('.ajout_video_double').remove();
		            }
		        }
		        reader.readAsDataURL(this.files[0]);
		    }
		}
		$(".imgInp").change(readURL);
	});
});