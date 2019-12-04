/*
	Solid State by HTML5 UP
	html5up.net | @ajlkn
	Free for personal and commercial use under the CCA 3.0 license (html5up.net/license)
*/

// smooth scroll
$(document).ready(function(){
	$("a").on('click', function(event) {
  
	  if (this.hash !== "") {
		event.preventDefault();
  
		var hash = this.hash;
  
		$('html, body').animate({
		  scrollTop: $(hash).offset().top
		}, 800, function(){
	 
		  window.location.hash = hash;
		});
	  }
	});
  });


(function($) {

	var	$window = $(window),
		$body = $('body'),
		$header = $('#header'),
		$banner = $('#banner');

	// Breakpoints.
		breakpoints({
			xlarge:	'(max-width: 1680px)',
			large:	'(max-width: 1280px)',
			medium:	'(max-width: 980px)',
			small:	'(max-width: 736px)',
			xsmall:	'(max-width: 480px)'
		});

	// Play initial animations on page load.
		$window.on('load', function() {
			window.setTimeout(function() {
				$body.removeClass('is-preload');
			}, 100);
		});

	// Header.
		if ($banner.length > 0
		&&	$header.hasClass('alt')) {

			$window.on('resize', function() { $window.trigger('scroll'); });

			$banner.scrollex({
				bottom:		$header.outerHeight(),
				terminate:	function() { $header.removeClass('alt'); },
				enter:		function() { $header.addClass('alt'); },
				leave:		function() { $header.removeClass('alt'); }
			});

		}

	// Project 1.
		var $project1 = $('#project-1');

		$project1._locked = false;

		$project1._lock = function() {

			if ($project1._locked)
				return false;

			$project1._locked = true;

			window.setTimeout(function() {
				$project1._locked = false;
			}, 350);

			return true;

		};

		$project1._show = function() {

			if ($project1._lock())
				$body.addClass('is-project-1-visible');

		};

		$project1._hide = function() {

			if ($project1._lock())
				$body.removeClass('is-project-1-visible');

		};

		$project1._toggle = function() {

			if ($project1._lock())
				$body.toggleClass('is-project-1-visible');

		};

		$project1
			.appendTo($body)
			.on('click', function(event) {

				event.stopPropagation();

				// Hide.
					$project1._hide();

			})
			.find('.inner')
				.on('click', '.close', function(event) {

					event.preventDefault();
					event.stopPropagation();
					event.stopImmediatePropagation();

					// Hide.
						$project1._hide();

				})
				.on('click', function(event) {
					event.stopPropagation();
				})
				.on('click', 'a', function(event) {

					var href = $(this).attr('href');

					event.preventDefault();
					event.stopPropagation();

					// Hide.
						$project1._hide();

					// Redirect.
						window.setTimeout(function() {
							window.location.href = href;
						}, 350);

				});

		$body
			.on('click', 'a[href="#project-1"]', function(event) {

				event.stopPropagation();
				event.preventDefault();

				// Toggle.
					$project1._toggle();

			})
			.on('keydown', function(event) {

				// Hide on escape.
					if (event.keyCode == 27)
						$project1._hide();

			});
	
	// Project 2.
		var $project2 = $('#project-2');

		$project2._locked = false;

		$project2._lock = function() {

			if ($project2._locked)
				return false;

			$project2._locked = true;

			window.setTimeout(function() {
				$project2._locked = false;
			}, 350);

			return true;

		};

		$project2._show = function() {

			if ($project2._lock())
				$body.addClass('is-project-2-visible');

		};

		$project2._hide = function() {

			if ($project2._lock())
				$body.removeClass('is-project-2-visible');

		};

		$project2._toggle = function() {

			if ($project2._lock())
				$body.toggleClass('is-project-2-visible');

		};

		$project2
			.appendTo($body)
			.on('click', function(event) {

				event.stopPropagation();

				// Hide.
					$project2._hide();

			})
			.find('.inner')
				.on('click', '.close', function(event) {

					event.preventDefault();
					event.stopPropagation();
					event.stopImmediatePropagation();

					// Hide.
						$project2._hide();

				})
				.on('click', function(event) {
					event.stopPropagation();
				})
				.on('click', 'a', function(event) {

					var href = $(this).attr('href');

					event.preventDefault();
					event.stopPropagation();

					// Hide.
						$project2._hide();

					// Redirect.
						window.setTimeout(function() {
							window.location.href = href;
						}, 350);

				});

		$body
			.on('click', 'a[href="#project-2"]', function(event) {

				event.stopPropagation();
				event.preventDefault();

				// Toggle.
					$project2._toggle();

			})
			.on('keydown', function(event) {

				// Hide on escape.
					if (event.keyCode == 27)
						$project2._hide();

			});



})(jQuery);