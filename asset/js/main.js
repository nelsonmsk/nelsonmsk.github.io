$(document).ready(function(){

	var $slideWrapper = $('.swiper-wrapper');
	var $ulWrapper = $('.project-details').find('.project-info').children('ul');
	var $descWrapper = $('.project-details').find('.project-description').children('p');
	var $title = $('.breadcrumbs').find('span');

	$projectId = window.location.hash;
		switch ($projectId)
        {
            case "#accounts_tracker":
                {
                    $title.html('Accounts Tracker');
                    $slideWrapper.html('<div class="swiper-slide"><img src="asset/images/projects/apps/Accounts/Accounts-tracker.jpg" class="img-fluid" alt=""></div>' );	
                     $ulWrapper.html('<li><strong>Type</strong>:  Restful Microservices-based Flask Cloud Native Application</li><li><strong>Client</strong>: IBM DevOps Engineering Certification Project</li><li><strong>Status</strong>: Complete</li>'
                                      + '<li><strong>Project Date</strong>: 28 December 2024</li><li><strong>Link</strong>: <a href="#">www.github.com/nelsonmsk/devops-capstone-project</a></li>');
                    $descWrapper.html('A Restful Microservices-based Python-Flask cloud native Customer Accounts App which keep track of customers on an e-commerce website. Leverages GitHub actions and Tekton to add automated CI/CD pipelines.');
                 }
                break
            case "#dealership":
                {
				   $title.html('Dealership');
                   $slideWrapper.html('<div class="swiper-slide"><img src="asset/images/projects/apps/Dealerships/Dealership.jpg" class="img-fluid" alt=""></div>' +
                                '<div class="swiper-slide"><img src="asset/images/projects/apps/Dealerships/Dealership-home.jpg" class="img-fluid" alt=""></div>' +
								 '<div class="swiper-slide"><img src="asset/images/projects/apps/Dealerships/Dealership-about_us.jpg" class="img-fluid" alt=""></div>'+
								 '<div class="swiper-slide"><img src="asset/images/projects/apps/Dealerships/Dealership-car_ models.jpg" class="img-fluid" alt=""></div>' +
								  '<div class="swiper-slide"><img src="asset/images/projects/apps/Dealerships/Dealers_loggedin.jpg" class="img-fluid" alt=""></div>' +
								  '<div class="swiper-slide"><img src="asset/images/projects/apps/Dealerships/Dealerships-add_review.jpg" class="img-fluid" alt=""></div>' );	
					$ulWrapper.html('<li><strong>Type</strong>: Django Cloud Native Application</li><li><strong>Client</strong>: IBM Full Stack Developer Certification Project</li><li><strong>Status</strong>: Complete</li>'
									 + '<li><strong>Project Date</strong>: 12 April 2024</li><li><strong>Link</strong>: <a href="#">www.github.com/nelsonmsk/ibm-fullstack_developer_capstone</a></li>');
				   $descWrapper.html('Dealerships is a Django cloud native application which consumes a backend Sentiment Analyzer Service (a microservice deployed on IBM Code Engine which leverages IBM Watson Al libraries to analyze customer sentiment from submitted reviews) and also consumes a dockerized Node.js Server API (MongoDB database service).');
                }
                break
				case "#shopper":
                {
				   $title.html('Shopper');
                   $slideWrapper.html('<div class="swiper-slide"><img src="asset/images/projects/apps/Shopper/Shopper-welcome.jpg" class="img-fluid" alt=""></div>' 
								 + '<div class="swiper-slide"><img src="asset/images/projects/apps/Shopper/Shopper-home.jpg" class="img-fluid" alt=""></div>'+
								 '<div class="swiper-slide"><img src="asset/images/projects/apps/Shopper/Shopper-signin.jpg" class="img-fluid" alt=""></div>' +
								  '<div class="swiper-slide"><img src="asset/images/projects/apps/Shopper/Shopper-signup.jpg" class="img-fluid" alt=""></div>' +
								  '<div class="swiper-slide"><img src="asset/images/projects/apps/Shopper/Shopper-all_shops.jpg" class="img-fluid" alt=""></div>' +
								  '<div class="swiper-slide"><img src="asset/images/projects/apps/Shopper/Shopper-view_shop.jpg" class="img-fluid" alt=""></div>' +
								  '<div class="swiper-slide"><img src="asset/images/projects/apps/Shopper/Shopper-view_product.jpg" class="img-fluid" alt=""></div>' +
								   '<div class="swiper-slide"><img src="asset/images/projects/apps/Shopper/Shopper-shopping_cart.jpg" class="img-fluid" alt=""></div>' );	
					$ulWrapper.html('<li><strong>Type</strong>: React App & Node JS API Web Application</li><li><strong>Client</strong>: Personal Project</li><li><strong>Status</strong>: Complete</li>'
									 + '<li><strong>Project Date</strong>: 01 Oct 2023</li><li><strong>Link</strong>: <a href="#">www.github.com/nelsonmsk/Shopper/Client</a></li><li><strong>Link</strong>: <a href="#">www.github.com/nelsonmsk/Shopper/Server</a></li>');
				   $descWrapper.html('Shopper is a fully-responsive and easy to use, Simple React App online Markert Place Web App that consumes a Node JS Backend API Service. <br> It has Socialite Authentication, Role-based Authorization, simple Shopping Cart, Order-Processing &amp Inventory management and Stripe Ecommerce.');
                }
                break
				case "#streamed":
                {
				   $title.html('Streamed');
                   $slideWrapper.html('<div class="swiper-slide"><img src="asset/images/projects/apps/Streamed/Streamed-welcome.jpg" class="img-fluid" alt=""></div>' 
								 + '<div class="swiper-slide"><img src="asset/images/projects/apps/Streamed/Streamed-explore.jpg" class="img-fluid" alt=""></div>'+
								 '<div class="swiper-slide"><img src="asset/images/projects/apps/Streamed/Streamed-signin.jpg" class="img-fluid" alt=""></div>' +
								  '<div class="swiper-slide"><img src="asset/images/projects/apps/Streamed/Streamed-signup.jpg" class="img-fluid" alt=""></div>' +
								  '<div class="swiper-slide"><img src="asset/images/projects/apps/Streamed/Streamed-search.jpg" class="img-fluid" alt=""></div>' +
								  '<div class="swiper-slide"><img src="asset/images/projects/apps/Streamed/Streamed-media_player.jpg" class="img-fluid" alt=""></div>' +
								  '<div class="swiper-slide"><img src="asset/images/projects/apps/Streamed/Streamed-media_view.jpg" class="img-fluid" alt=""></div>' );	
					$ulWrapper.html('<li><strong>Type</strong>: React App & Node JS API Web Application</li><li><strong>Client</strong>: Personal Project</li><li><strong>Status</strong>: Complete</li>'
									 + '<li><strong>Project Date</strong>: 01 Oct 2023</li><li><strong>Link</strong>: <a href="#">www.github.com/nelsonmsk/Streamed/Client</a></li><strong>Link</strong>: <a href="#">www.github.com/nelsonmsk/Streamed/Server</a></li>');
				   $descWrapper.html('Streamed is a fully-responsive and easy to use, Simple React App Online Media Streaming App that consumes a Node JS Backend API Service. <br> It has Socialite Authentication, Role-based Authorization, simple custom media player and media library management.');
                }
                break
				case "#scholarly":
                {
				   $title.html('Scholarly');
                   $slideWrapper.html('<div class="swiper-slide"><img src="asset/images/projects/apps/Scholarly/Scholarly-landingpage.jpg" class="img-fluid" alt=""></div>' 
								 + '<div class="swiper-slide"><img src="asset/images/projects/apps/Scholarly/Scholarly-landingpage-full.jpg" class="img-fluid" alt=""></div>'+
								 '<div class="swiper-slide"><img src="asset/images/projects/apps/Scholarly/Scholarly-signin.jpg" class="img-fluid" alt=""></div>' +
								  '<div class="swiper-slide"><img src="asset/images/projects/apps/Scholarly/Scholarly-signup.jpg" class="img-fluid" alt=""></div>' +
								  '<div class="swiper-slide"><img src="asset/images/projects/apps/Scholarly/Scholarly-course_search.jpg" class="img-fluid" alt=""></div>' +
								  '<div class="swiper-slide"><img src="asset/images/projects/apps/Scholarly/Scholarly-admin_dashboard.jpg" class="img-fluid" alt=""></div>' +
								  '<div class="swiper-slide"><img src="asset/images/projects/apps/Scholarly/Scholarly-course_dashboard.jpg" class="img-fluid" alt=""></div>' +
								   '<div class="swiper-slide"><img src="asset/images/projects/apps/Scholarly/Scholarly-instructor_explore.jpg" class="img-fluid" alt=""></div>' );	
					$ulWrapper.html('<li><strong>Type</strong>: React App & Node JS API Web Application</li><li><strong>Client</strong>: Personal Project</li><li><strong>Status</strong>: Complete</li>'
									 + '<li><strong>Project Date</strong>: 01 Aprl 2023</li><li><strong>Link</strong>: <a href="#">www.github.com/nelsonmsk/Scholarly/Client</a></li><li><strong>Link</strong>: <a href="#">www.github.com/nelsonmsk/Scholarly/Server</a></li>');
				   $descWrapper.html('Scholarly is a fully-responsive and easy to use, Simple React LMS App that consumes a Node JS Backend API Service. <br> It has Socialite Authentication, Role-based Authorization, courses &amp lessons management, learner, instructors and admininstration module.');
                }
                break
            case "#cater":
                {
				   $title.html(' Cater');
                   $slideWrapper.html('<div class="swiper-slide"><img src="asset/images/projects/apps/Cater/Cater-landingpage.jpg" class="img-fluid" alt=""></div>' 
								 + '<div class="swiper-slide"><img src="asset/images/projects/apps/Cater/Cater-landingpage-full.jpg" class="img-fluid" alt=""></div>'+
								 '<div class="swiper-slide"><img src="asset/images/projects/apps/Cater/Cater-dashboard.jpg" class="img-fluid" alt=""></div>' +
								  '<div class="swiper-slide"><img src="asset/images/projects/apps/Cater/Cater-foodmenu-show.jpg" class="img-fluid" alt=""></div>' +
								  '<div class="swiper-slide"><img src="asset/images/projects/apps/Cater/Cater-foodmenu-view.png" class="img-fluid" alt=""></div>' +
								  '<div class="swiper-slide"><img src="asset/images/projects/apps/Cater/Cater-serviceslist.png" class="img-fluid" alt=""></div>' +
								   '<div class="swiper-slide"><img src="asset/images/projects/apps/Cater/Cater-chefslist.jpg" class="img-fluid" alt=""></div>' );	
					$ulWrapper.html('<li><strong>Type</strong>: Laravel &amp MySQL Web Application</li><li><strong>Client</strong>: Personal Project</li><li><strong>Status</strong>: Complete</li>'
									 + '<li><strong>Project Date</strong>: 12 Jan 2019</li><li><strong>Link</strong>: <a href="#">www.github.com/nelsonmsk/Cater</a></li>');
				   $descWrapper.html('Cater is a fully-responsive and easy to use, custom Food Catering Services and Private Chef Hire App</br> with Socialite Authentication, Role-based Authorization and simple Ecommerce. It consists of a beautiful landing page, user-friendly admin &amp user dashboards and simple PDF reports');
                }
                break
            case "#athena":
                {
				   $title.html(' Athena');
                   $slideWrapper.html('<div class="swiper-slide"><img src="asset/images/projects/websites/Athena/Athena-welcome.jpg" class="img-fluid" alt=""></div>' 
								 + '<div class="swiper-slide"><img src="asset/images/projects/websites/Athena/Athena-welcome-full.jpg" class="img-fluid" alt=""></div>'+
								 	'<div class="swiper-slide"><img src="asset/images/projects/websites/Athena/Athena-dashboard.jpg" class="img-fluid" alt=""></div>'+
									'<div class="swiper-slide"><img src="asset/images/projects/websites/Athena/Athena-imagesgallery.jpg" class="img-fluid" alt=""></div>'+
								   '<div class="swiper-slide"><img src="asset/images/projects/websites/Athena/Athena-clientsshow.jpg" class="img-fluid" alt=""></div>' );	
					$ulWrapper.html('<li><strong>Type</strong>: Laravel &amp MySQL WebSite Theme</li><li><strong>Client</strong>: General</li><li><strong>Status</strong>: Complete</li>'
									 + '<li><strong>Project Date</strong>: 12 Jan 2019</li><li><strong>Link</strong>: <a href="#">www.github.com/nelsonmsk/Athena</a></li>');

					$descWrapper.html('Athena is a  beautiful, modern design and fully-responsive multi-purpose <b>hotel</b> theme with a custom user-friendly admin dashboard, authentication and admin pages ');
                }
                break
            case "#florah":
                {
				   $title.html(' Florah');					
                   $slideWrapper.html('<div class="swiper-slide"><img src="asset/images/projects/apps/Florah/Florah-landingpage.jpg" class="img-fluid" alt=""></div>' 
								 + '<div class="swiper-slide"><img src="asset/images/projects/apps/Florah/Florah-landingpage-full.jpg" class="img-fluid" alt=""></div>'+
								 '<div class="swiper-slide"><img src="asset/images/projects/apps/Florah/Florah-dashboard.jpg" class="img-fluid" alt=""></div>' +
								  '<div class="swiper-slide"><img src="asset/images/projects/apps/Florah/Florah-orderflowers.jpg" class="img-fluid" alt=""></div>' +
								   '<div class="swiper-slide"><img src="asset/images/projects/apps/Florah/Florah-orderflowersshow.jpg" class="img-fluid" alt=""></div>' +
								   '<div class="swiper-slide"><img src="asset/images/projects/apps/Florah/Florah-florists.jpg" class="img-fluid" alt=""></div>' +
								  '<div class="swiper-slide"><img src="asset/images/projects/apps/Florah/Florah-floristbookings.jpg" class="img-fluid" alt=""></div>' +
								  '<div class="swiper-slide"><img src="asset/images/projects/apps/Florah/Florah-messages.jpg" class="img-fluid" alt=""></div>' );
 					$ulWrapper.html('<li><strong>Type</strong>: Laravel &amp MySQL Web Application</li><li><strong>Client</strong>: Personal Project</li><li><strong>Status</strong>: Complete</li>'
									 + '<li><strong>Project Date</strong>: 26 Feb 2019</li><li><strong>Link</strong>: <a href="#">www.github.com/nelsonmsk/Florah</a></li>');
					$descWrapper.html('Florah is a fully-responsive and easy to use Flower Ordering and Florist Booking App with Socialite Authentication, Role-based Authorization and simple Ecommerce. It consists of a beautiful landing page, user-friendly admin &amp user dashboards and simple PDF reports');
					
               }
                break
            case "#atlantis":
                 {
				   $title.html(' Atlantis');
                   $slideWrapper.html('<div class="swiper-slide"><img src="asset/images/projects/websites/Atlantis/Atlantis-welcome.jpg" class="img-fluid" alt=""></div>' 
								 + '<div class="swiper-slide"><img src="asset/images/projects/websites/Atlantis/Atlantis-welcome-full.jpg" class="img-fluid" alt=""></div>'+
								    '<div class="swiper-slide"><img src="asset/images/projects/websites/Atlantis/Atlantis-login.jpg" class="img-fluid" alt=""></div>'+
								 	'<div class="swiper-slide"><img src="asset/images/projects/websites/Atlantis/Atlantis-dashboard.jpg" class="img-fluid" alt=""></div>'+
									'<div class="swiper-slide"><img src="asset/images/projects/websites/Atlantis/Atlantis-appdefaults.jpg" class="img-fluid" alt=""></div>'+
									'<div class="swiper-slide"><img src="asset/images/projects/websites/Atlantis/Atlantis-imagesgallery.jpg" class="img-fluid" alt=""></div>'+
								   '<div class="swiper-slide"><img src="asset/images/projects/websites/Atlantis/Atlantis-servicesshow.jpg" class="img-fluid" alt=""></div>' );	
					$ulWrapper.html('<li><strong>Type</strong>: Laravel &amp MySQL WebSite Theme</li><li><strong>Client</strong>: General</li><li><strong>Status</strong>: Complete</li>'
									 + '<li><strong>Project Date</strong>: 12 Jan 2019</li><li><strong>Link</strong>: <a href="#">www.github.com/nelsonmsk/Atlantis</a></li>');
					$descWrapper.html('Atlantis is a beautiful, modern design and fully-responsive multi-purpose <b>Creative Agency</b> theme with a custom user-friendly admin dashboard, authentication and admin pages ');
                }
                break
            case "#rentol":
                {
				   $title.html(' Rentol');					
                   $slideWrapper.html('<div class="swiper-slide"><img src="asset/images/projects/apps/Rentol/Rentol-landingpage.jpg" class="img-fluid" alt=""></div>' 
								 + '<div class="swiper-slide"><img src="asset/images/projects/apps/Rentol/Rentol-landingpage-full.jpg" class="img-fluid" alt=""></div>'+
								 '<div class="swiper-slide"><img src="asset/images/projects/apps/Rentol/Rentol-dashboard.jpg" class="img-fluid" alt=""></div>' +
								  '<div class="swiper-slide"><img src="asset/images/projects/apps/Rentol/Rentol-cars.jpg" class="img-fluid" alt=""></div>' +
								   '<div class="swiper-slide"><img src="asset/images/projects/apps/Rentol/Rentol-carrentals.jpg" class="img-fluid" alt=""></div>' +
								   '<div class="swiper-slide"><img src="asset/images/projects/apps/Rentol/Rentol-carrentals2.jpg" class="img-fluid" alt=""></div>' +
								   '<div class="swiper-slide"><img src="asset/images/projects/apps/Rentol/Rentol-rentalform.jpg" class="img-fluid" alt=""></div>' +
								  '<div class="swiper-slide"><img src="asset/images/projects/apps/Rentol/Rentol-myrentals.jpg" class="img-fluid" alt=""></div>' +
								   '<div class="swiper-slide"><img src="asset/images/projects/apps/Rentol/Rentol-drivers.jpg" class="img-fluid" alt=""></div>' +
								   '<div class="swiper-slide"><img src="asset/images/projects/apps/Rentol/Rentol-drivershire.jpg" class="img-fluid" alt=""></div>' +
								   '<div class="swiper-slide"><img src="asset/images/projects/apps/Rentol/Rentol-drivershire2.jpg" class="img-fluid" alt=""></div>' +
								  '<div class="swiper-slide"><img src="asset/images/projects/apps/Rentol/Rentol-hiringform.jpg" class="img-fluid" alt=""></div>' +
								  '<div class="swiper-slide"><img src="asset/images/projects/apps/Rentol/Rentol-driversregistration.jpg" class="img-fluid" alt=""></div>' );
 					$ulWrapper.html('<li><strong>Type</strong>: Laravel &amp MySQL Web Application</li><li><strong>Client</strong>: Personal Project</li><li><strong>Status</strong>: Complete</li>'
									 + '<li><strong>Project Date</strong>: 06 May 2019</li><li><strong>Link</strong>: <a href="#">www.github.com/nelsonmsk/Rentol</a></li>');
					$descWrapper.html('Rentol is a fully-responsive and easy to use Car Rental and Driver Hire App with Socialite Authentication, Role-based Authorization and simple Ecommerce. It consists of a beautiful landing page, user-friendly admin &amp user dashboards and simple PDF reports');
					
               }
                break
            case "#falcon":
                {
				   $title.html(' Falcon');
                   $slideWrapper.html('<div class="swiper-slide"><img src="asset/images/projects/websites/Falcon/Falcon-welcome.jpg" class="img-fluid" alt=""></div>' 
								 + '<div class="swiper-slide"><img src="asset/images/projects/websites/Falcon/Falcon-welcome-full.png" class="img-fluid" alt=""></div>'+
									'<div class="swiper-slide"><img src="asset/images/projects/websites/Falcon/Falcon-login.jpg" class="img-fluid" alt=""></div>'+
								 	'<div class="swiper-slide"><img src="asset/images/projects/websites/Falcon/Falcon-dashboard.jpg" class="img-fluid" alt=""></div>'+
									'<div class="swiper-slide"><img src="asset/images/projects/websites/Falcon/Falcon-appdefaults.jpg" class="img-fluid" alt=""></div>'+
									'<div class="swiper-slide"><img src="asset/images/projects/websites/Falcon/Falcon-imagesgallery.jpg" class="img-fluid" alt=""></div>'+
								   '<div class="swiper-slide"><img src="asset/images/projects/websites/Falcon/Falcon-servicesshow.jpg" class="img-fluid" alt=""></div>' );	
					$ulWrapper.html('<li><strong>Type</strong>: Laravel &amp MySQL WebSite Theme</li><li><strong>Client</strong>: General</li><li><strong>Status</strong>: Complete</li>'
									 + '<li><strong>Project Date</strong>: 12 Jan 2019</li><li><strong>Link</strong>: <a href="#">www.github.com/nelsonmsk/Falcon</a></li>');
					$descWrapper.html('Falcon is a beautiful, modern design and fully-responsive multi-purpose <b>Medical</b> theme with a custom user-friendly admin dashboard and services pages ');
                }
                break
            case "#harmony":
                {
				   $title.html(' Harmony');
                   $slideWrapper.html('<div class="swiper-slide"><img src="asset/images/projects/websites/Harmony/Harmony-welcome.jpg" class="img-fluid" alt=""></div>' 
								 + '<div class="swiper-slide"><img src="asset/images/projects/websites/Harmony/Harmony-welcome-full.jpg" class="img-fluid" alt=""></div>'+
									'<div class="swiper-slide"><img src="asset/images/projects/websites/Harmony/Harmony-dashboard.jpg" class="img-fluid" alt=""></div>'+
									'<div class="swiper-slide"><img src="asset/images/projects/websites/Harmony/Harmony-appdefaults.jpg" class="img-fluid" alt=""></div>'+
									'<div class="swiper-slide"><img src="asset/images/projects/websites/Harmony/Harmony-imagesgallery.jpg" class="img-fluid" alt=""></div>'+
								   '<div class="swiper-slide"><img src="asset/images/projects/websites/Harmony/Harmony-servicesshow.jpg" class="img-fluid" alt=""></div>' );	
					$ulWrapper.html('<li><strong>Type</strong>: Laravel &amp MySQL WebSite Theme</li><li><strong>Client</strong>: General</li><li><strong>Status</strong>: Complete</li>'
									 + '<li><strong>Project Date</strong>: 04 March 2018</li><li><strong>Link</strong>: <a href="#">www.github.com/nelsonmsk/Harmony</a></li>');
					$descWrapper.html('Harmony is a beautiful, modern design and fully-responsive multi-purpose <b>Insurance</b> theme with a custom user-friendly admin dashboard, authentication and admin pages ');
                }
                break
            case "#jupiter":
                 {
				   $title.html(' Jupiter');
                   $slideWrapper.html('<div class="swiper-slide"><img src="asset/images/projects/websites/Jupiter/Jupiter-welcome.jpg" class="img-fluid" alt=""></div>' 
								 + '<div class="swiper-slide"><img src="asset/images/projects/websites/Jupiter/Jupiter-welcome-full.jpg" class="img-fluid" alt=""></div>'+
								 	'<div class="swiper-slide"><img src="asset/images/projects/websites/Jupiter/Jupiter-dashboard.jpg" class="img-fluid" alt=""></div>'+
									'<div class="swiper-slide"><img src="asset/images/projects/websites/Jupiter/Jupiter-imagesgallery.jpg" class="img-fluid" alt=""></div>'+
									'<div class="swiper-slide"><img src="asset/images/projects/websites/Jupiter/Jupiter-clientslist.jpg" class="img-fluid" alt=""></div>'+
									'<div class="swiper-slide"><img src="asset/images/projects/websites/Jupiter/Jupiter-clientsreportslist.jpg" class="img-fluid" alt=""></div>'+
								   '<div class="swiper-slide"><img src="asset/images/projects/websites/Jupiter/Jupiter-servicesshow.jpg" class="img-fluid" alt=""></div>' );	
					$ulWrapper.html('<li><strong>Type</strong>: Laravel &amp MySQL WebSite Theme</li><li><strong>Client</strong>: General</li><li><strong>Status</strong>: Complete</li>'
									 + '<li><strong>Project Date</strong>: 17 Jan 2018</li><li><strong>Link</strong>: <a href="#">www.github.com/nelsonmsk/Jupiter</a></li>');
					$descWrapper.html('Jupiter is a beautiful, modern design and fully-responsive multi-purpose <b>Financial</b> theme with a custom user-friendly admin dashboard, authentication and admin pages ');
                }
                break
            case "#kleaner":
                {
				   $title.html(' Kleaner');
                   $slideWrapper.html('<div class="swiper-slide"><img src="asset/images/projects/apps/Kleaner/Kleaner-landingpage.jpg" class="img-fluid" alt=""></div>' 
								 + '<div class="swiper-slide"><img src="asset/images/projects/apps/Kleaner/Kleaner-landingpage-full.jpg" class="img-fluid" alt=""></div>'+
								 '<div class="swiper-slide"><img src="asset/images/projects/apps/Kleaner/Kleaner-dashboard.jpg" class="img-fluid" alt=""></div>' +
								  '<div class="swiper-slide"><img src="asset/images/projects/apps/Kleaner/Kleaner-services.jpg" class="img-fluid" alt=""></div>' +
								  '<div class="swiper-slide"><img src="asset/images/projects/apps/Kleaner/Kleaner-services2.jpg" class="img-fluid" alt=""></div>' +
								  '<div class="swiper-slide"><img src="asset/images/projects/apps/Kleaner/Kleaner-bookingform.jpg" class="img-fluid" alt=""></div>' +
								   '<div class="swiper-slide"><img src="asset/images/projects/apps/Kleaner/Kleaner-bookingslist.jpg" class="img-fluid" alt=""></div>' );	
					$ulWrapper.html('<li><strong>Type</strong>: Laravel &amp MySQL Web Application</li><li><strong>Client</strong>: Personal Project</li><li><strong>Status</strong>: Complete</li>'
									 + '<li><strong>Project Date</strong>: 12 Jan 2019</li><li><strong>Link</strong>: <a href="#">www.github.com/nelsonmsk/Kleaner</a></li>');
				   $descWrapper.html('Kleaner is a fully-responsive and easy to use Cleaning Services Booking App with Socialite Authentication, Role-based Authorization and simple Ecommerce. It consists of a beautiful landing page, user-friendly admin &amp user dashboards and simple PDF reports');
                }
                break
            case "#mercury":
                {
				   $title.html(' Mercury');
                   $slideWrapper.html('<div class="swiper-slide"><img src="asset/images/projects/websites/Mercury/Mercury-welcome.jpg" class="img-fluid" alt=""></div>' 
								 + '<div class="swiper-slide"><img src="asset/images/projects/websites/Mercury/Mercury-welcome-full.jpg" class="img-fluid" alt=""></div>'+
								 	'<div class="swiper-slide"><img src="asset/images/projects/websites/Mercury/Mercury-dashboard.jpg" class="img-fluid" alt=""></div>'+
									'<div class="swiper-slide"><img src="asset/images/projects/websites/Mercury/Mercury-featureslist.jpg" class="img-fluid" alt=""></div>'+
									'<div class="swiper-slide"><img src="asset/images/projects/websites/Mercury/Mercury-imagesgallery.jpg" class="img-fluid" alt=""></div>'+
								   '<div class="swiper-slide"><img src="asset/images/projects/websites/Mercury/Mercury-servicesshow.jpg" class="img-fluid" alt=""></div>' );	
					$ulWrapper.html('<li><strong>Type</strong>: Laravel &amp MySQL WebSite Theme</li><li><strong>Client</strong>: General</li><li><strong>Status</strong>: Complete</li>'
									 + '<li><strong>Project Date</strong>: 07 Dec 2018</li><li><strong>Link</strong>: <a href="#">www.github.com/nelsonmsk/Mercury</a></li>');
					$descWrapper.html('Mercury is a beautiful, modern design and fully-responsive multi-purpose <b>Creative Agency</b> theme with a custom user-friendly admin dashboard, authentication and admin pages ');
                }
                break
            case "#kronus":
                {
				   $title.html(' Kronus');
                   $slideWrapper.html('<div class="swiper-slide"><img src="asset/images/projects/websites/Kronus/Kronus-welcome.jpg" class="img-fluid" alt=""></div>' 
								 + '<div class="swiper-slide"><img src="asset/images/projects/websites/Kronus/Kronus-welcome-full.jpg" class="img-fluid" alt=""></div>'+
									'<div class="swiper-slide"><img src="asset/images/projects/websites/Kronus/Kronus-login.jpg" class="img-fluid" alt=""></div>'+
								 	'<div class="swiper-slide"><img src="asset/images/projects/websites/Kronus/Kronus-dashboard.jpg" class="img-fluid" alt=""></div>'+
									'<div class="swiper-slide"><img src="asset/images/projects/websites/Kronus/Kronus-appdefaults.jpg" class="img-fluid" alt=""></div>'+
									'<div class="swiper-slide"><img src="asset/images/projects/websites/Kronus/Kronus-imagesgallery.jpg" class="img-fluid" alt=""></div>'+
								   '<div class="swiper-slide"><img src="asset/images/projects/websites/Kronus/Kronus-services.jpg" class="img-fluid" alt=""></div>' );	
					$ulWrapper.html('<li><strong>Type</strong>: Laravel &amp MySQL WebSite Theme</li><li><strong>Client</strong>: General</li><li><strong>Status</strong>: Complete</li>'
									 + '<li><strong>Project Date</strong>: 23 jul 2018</li><li><strong>Link</strong>: <a href="#">www.github.com/nelsonmsk/Kronus</a></li>');
					$descWrapper.html('Kronus is a beautiful, modern design and fully-responsive multi-purpose <b>Construction Firm</b> theme with a user-friendly admin dasboard and service pages ');
                }
                break
            case "#neptune":
                 {
				   $title.html(' Neptune');
                   $slideWrapper.html('<div class="swiper-slide"><img src="asset/images/projects/websites/Neptune/Neptune-welcome.jpg" class="img-fluid" alt=""></div>' 
								 + '<div class="swiper-slide"><img src="asset/images/projects/websites/Neptune/Neptune-welcome-full.jpg" class="img-fluid" alt=""></div>'+
								 	'<div class="swiper-slide"><img src="asset/images/projects/websites/Neptune/Neptune-dashboard.jpg" class="img-fluid" alt=""></div>'+
									'<div class="swiper-slide"><img src="asset/images/projects/websites/Neptune/Neptune-appdefaults.jpg" class="img-fluid" alt=""></div>'+
									'<div class="swiper-slide"><img src="asset/images/projects/websites/Neptune/Neptune-imagesgallery.jpg" class="img-fluid" alt=""></div>'+
								   '<div class="swiper-slide"><img src="asset/images/projects/websites/Neptune/Neptune-servicesshow.jpg" class="img-fluid" alt=""></div>' );	
					$ulWrapper.html('<li><strong>Type</strong>: Laravel &amp MySQL WebSite Theme</li><li><strong>Client</strong>: General</li><li><strong>Status</strong>: Complete</li>'
									 + '<li><strong>Project Date</strong>: 12 Jan 2019</li><li><strong>Link</strong>: <a href="#">www.github.com/nelsonmsk/Neptune</a></li>');
					$descWrapper.html('Neptune is a beautiful, modern design and fully-responsive multi-purpose <b>Financial Agency</b> theme with a custom user-friendly admin dashboard, authentication and admin pages ');
                }
                break
            case "#nimrod":
                {
				   $title.html(' Nimrod');
                   $slideWrapper.html('<div class="swiper-slide"><img src="asset/images/projects/websites/Nimrod/Nimrod-welcome.jpg" class="img-fluid" alt=""></div>' 
								 + '<div class="swiper-slide"><img src="asset/images/projects/websites/Nimrod/Nimrod-welcome-full.jpg" class="img-fluid" alt=""></div>'+
								 	'<div class="swiper-slide"><img src="asset/images/projects/websites/Nimrod/Nimrod-dashboard.jpg" class="img-fluid" alt=""></div>'+
								 	'<div class="swiper-slide"><img src="asset/images/projects/websites/Nimrod/Nimrod-appdefaults.jpg" class="img-fluid" alt=""></div>'+	
								   '<div class="swiper-slide"><img src="asset/images/projects/websites/Nimrod/Nimrod-servicesshow.jpg" class="img-fluid" alt=""></div>' );	
					$ulWrapper.html('<li><strong>Type</strong>: Laravel &amp MySQL WebSite Theme</li><li><strong>Client</strong>: General</li><li><strong>Status</strong>: Complete</li>'
									 + '<li><strong>Project Date</strong>: 12 Jan 2019</li><li><strong>Link</strong>: <a href="#">www.github.com/nelsonmsk/Nimrod</a></li>');
					$descWrapper.html('Nimrod is a beautiful, modern design and fully-responsive multi-purpose <b>Architectural Agency</b> theme with a custom user-friendly admin dashboard, authentication and admin pages ');
                }
                break
            case "#raven":
                {
				   $title.html(' Raven');
                   $slideWrapper.html('<div class="swiper-slide"><img src="asset/images/projects/websites/Raven/Raven-welcome4.jpg" class="img-fluid" alt=""></div>' 
								 + '<div class="swiper-slide"><img src="asset/images/projects/websites/Raven/Raven-welcome-full.jpg" class="img-fluid" alt=""></div>'+
								 	'<div class="swiper-slide"><img src="asset/images/projects/websites/Raven/Raven-dashboard.jpg" class="img-fluid" alt=""></div>'+
									'<div class="swiper-slide"><img src="asset/images/projects/websites/Raven/Raven-imagesgallery.jpg" class="img-fluid" alt=""></div>'+
									'<div class="swiper-slide"><img src="asset/images/projects/websites/Raven/Raven-servicesshow.jpg" class="img-fluid" alt=""></div>'+
								   '<div class="swiper-slide"><img src="asset/images/projects/websites/Raven/Raven-welcome5.jpg" class="img-fluid" alt=""></div>' );	
					$ulWrapper.html('<li><strong>Type</strong>: Laravel &amp MySQL WebSite Theme</li><li><strong>Client</strong>: General</li><li><strong>Status</strong>: Complete</li>'
									 + '<li><strong>Project Date</strong>: 12 Jan 2019</li><li><strong>Link</strong>: <a href="#">www.github.com/nelsonmsk/Raven</a></li>');
					$descWrapper.html('Raven is a beautiful, modern design and fully-responsive multi-purpose <b>Restaurant</b> theme with a custom user-friendly admin dashboard, authentication and admin pages ');
                }
                break
            case "#venus":
                {
				   $title.html(' Venus');
                   $slideWrapper.html('<div class="swiper-slide"><img src="asset/images/projects/websites/Venus/Venus-welcome.jpg" class="img-fluid" alt=""></div>' 
								 + '<div class="swiper-slide"><img src="asset/images/projects/websites/Venus/Venus-welcome-full.jpg" class="img-fluid" alt=""></div>'+
								 	'<div class="swiper-slide"><img src="asset/images/projects/websites/Venus/Venus-dashboard.jpg" class="img-fluid" alt=""></div>'+
									'<div class="swiper-slide"><img src="asset/images/projects/websites/Venus/Venus-imagesgallery.jpg" class="img-fluid" alt=""></div>'+
								   '<div class="swiper-slide"><img src="asset/images/projects/websites/Venus/Venus-servicesshow.jpg" class="img-fluid" alt=""></div>' );	
					$ulWrapper.html('<li><strong>Type</strong>: Laravel &amp MySQL WebSite Theme</li><li><strong>Client</strong>: General</li><li><strong>Status</strong>: Complete</li>'
									 + '<li><strong>Project Date</strong>: 12 Jan 2019</li><li><strong>Link</strong>: <a href="#">www.github.com/nelsonmsk/Venus</a></li>');
					$descWrapper.html('Venus is a  beautiful, modern design and fully-responsive multi-purpose <b>IT Agency</b> theme with a custom user-friendly admin dashboard, authentication and admin pages ');
                }
                break
            default:
                {
                   $slideWrapper.html('<div class="swiper-slide"><img src="asset/images/projects/apps/Cater/Cater-landingpage.jpg" class="img-fluid" alt=""></div>' 
								 + '<div class="swiper-slide"><img src="asset/images/projects/apps/Florah/Florah-landingpage.jpg" class="img-fluid" alt=""></div>'+
								   '<div class="swiper-slide"><img src="asset/images/projects/apps/Rentol/Rentol-landingpage.jpg" class="img-fluid" alt=""></div>' );	
					$ulWrapper.html('<li><strong>Type</strong>: Web Application</li><li><strong>Client</strong>: General</li><li><strong>Status</strong>: Complete</li>'
									 + '<li><strong>Project Date</strong>: 12 Jan 2019</li><li><strong>Link</strong>: <a href="#">www.github.com/nelsonmsk/Cater</a></li>');

					$descWrapper.html('Fully responsive and easy to use Food Catering Services and Private Chef Booking App</br> with Socialite Authentication and simple Ecommerce. It consists of a beautiful landing page, user-friendly dashboard and service pages');
				}
                break
        }
var l=$("#contactForm");l.submit(function(s){s.preventDefault(),Email.send({SecureToken:"4a91431b-508f-49b7-bda9-8faeeee4334d",To:"nelsonmsk710@gmail.com",From:l.email,Subject:l.subject,Body:l.message}).then(function(s){"OK"==s?Swal.fire({title:"message sent successfully",text:"thank you",timer:6e3,showConfirmButton:!1,type:"success"}):Swal.fire({title:"failed to send message ",text:"please try again later or use links on the right page",timer:6e3,showConfirmButton:!1,type:"error"})})})});