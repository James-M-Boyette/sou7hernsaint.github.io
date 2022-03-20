/*
	Editorial by HTML5 UP
	html5up.net | @ajlkn
	Free for personal and commercial use under the CCA 3.0 license (html5up.net/license)
*/

(function($) {

	var	$window = $(window),
		$head = $('head'),
		$body = $('body');

	// Breakpoints.
		breakpoints({
			xlarge:   [ '1281px',  '1680px' ],
			large:    [ '981px',   '1280px' ],
			medium:   [ '737px',   '980px'  ],
			small:    [ '481px',   '736px'  ],
			xsmall:   [ '361px',   '480px'  ],
			xxsmall:  [ null,      '360px'  ],
			'xlarge-to-max':    '(min-width: 1681px)',
			'small-to-xlarge':  '(min-width: 481px) and (max-width: 1680px)'
		});

	// Stops animations/transitions until the page has ...

		// ... loaded.
			$window.on('load', function() {
				window.setTimeout(function() {
					$body.removeClass('is-preload');
				}, 100);
			});

		// ... stopped resizing.
			var resizeTimeout;

			$window.on('resize', function() {

				// Mark as resizing.
					$body.addClass('is-resizing');

				// Unmark after delay.
					clearTimeout(resizeTimeout);

					resizeTimeout = setTimeout(function() {
						$body.removeClass('is-resizing');
					}, 100);

			});

	// Fixes.

		// Object fit images.
			if (!browser.canUse('object-fit')
			||	browser.name == 'safari')
				$('.image.object').each(function() {

					var $this = $(this),
						$img = $this.children('img');

					// Hide original image.
						$img.css('opacity', '0');

					// Set background.
						$this
							.css('background-image', 'url("' + $img.attr('src') + '")')
							.css('background-size', $img.css('object-fit') ? $img.css('object-fit') : 'cover')
							.css('background-position', $img.css('object-position') ? $img.css('object-position') : 'center');

				});

	// Sidebar.
		var $sidebar = $('#sidebar'),
			$sidebar_inner = $sidebar.children('.inner');

		// Inactive by default on <= large.
			breakpoints.on('<=large', function() {
				$sidebar.addClass('inactive');
			});

			breakpoints.on('>large', function() {
				$sidebar.removeClass('inactive');
			});

		// Hack: Workaround for Chrome/Android scrollbar position bug.
			if (browser.os == 'android'
			&&	browser.name == 'chrome')
				$('<style>#sidebar .inner::-webkit-scrollbar { display: none; }</style>')
					.appendTo($head);

		// Toggle.
			$('<a href="#sidebar" class="toggle">Toggle</a>')
				.appendTo($sidebar)
				.on('click', function(event) {

					// Prevent default.
						event.preventDefault();
						event.stopPropagation();

					// Toggle.
						$sidebar.toggleClass('inactive');

				});

		// Events.

			// Link clicks.
				$sidebar.on('click', 'a', function(event) {

					// >large? Bail.
						if (breakpoints.active('>large'))
							return;

					// Vars.
						var $a = $(this),
							href = $a.attr('href'),
							target = $a.attr('target');

					// Prevent default.
						event.preventDefault();
						event.stopPropagation();

					// Check URL.
						if (!href || href == '#' || href == '')
							return;

					// Hide sidebar.
						$sidebar.addClass('inactive');

					// Redirect to href.
						setTimeout(function() {

							if (target == '_blank')
								window.open(href);
							else
								window.location.href = href;

						}, 500);

				});

			// Prevent certain events inside the panel from bubbling.
				$sidebar.on('click touchend touchstart touchmove', function(event) {

					// >large? Bail.
						if (breakpoints.active('>large'))
							return;

					// Prevent propagation.
						event.stopPropagation();

				});

			// Hide panel on body click/tap.
				$body.on('click touchend', function(event) {

					// >large? Bail.
						if (breakpoints.active('>large'))
							return;

					// Deactivate.
						$sidebar.addClass('inactive');

				});

		// Scroll lock.
		// Note: If you do anything to change the height of the sidebar's content, be sure to
		// trigger 'resize.sidebar-lock' on $window so stuff doesn't get out of sync.

			$window.on('load.sidebar-lock', function() {

				var sh, wh, st;

				// Reset scroll position to 0 if it's 1.
					if ($window.scrollTop() == 1)
						$window.scrollTop(0);

				$window
					.on('scroll.sidebar-lock', function() {

						var x, y;

						// <=large? Bail.
							if (breakpoints.active('<=large')) {

								$sidebar_inner
									.data('locked', 0)
									.css('position', '')
									.css('top', '');

								return;

							}

						// Calculate positions.
							x = Math.max(sh - wh, 0);
							y = Math.max(0, $window.scrollTop() - x);

						// Lock/unlock.
							if ($sidebar_inner.data('locked') == 1) {

								if (y <= 0)
									$sidebar_inner
										.data('locked', 0)
										.css('position', '')
										.css('top', '');
								else
									$sidebar_inner
										.css('top', -1 * x);

							}
							else {

								if (y > 0)
									$sidebar_inner
										.data('locked', 1)
										.css('position', 'fixed')
										.css('top', -1 * x);

							}

					})
					.on('resize.sidebar-lock', function() {

						// Calculate heights.
							wh = $window.height();
							sh = $sidebar_inner.outerHeight() + 30;

						// Trigger scroll.
							$window.trigger('scroll.sidebar-lock');

					})
					.trigger('resize.sidebar-lock');

				});

		// Menu.
			var $menu = $('#menu'),
			// Go a single level down to find 'ul' element; then search for all .opener classes
				$menu_openers = $menu.children('ul').find('.opener');
				console.log(`here's the $menu`);
				console.log($menu);
				console.log(`here's the $menu_openers`);
				console.log($menu_openers);
				

			// Openers.
				$menu_openers.each(function() {

					var $this = $(this);
					console.log(`here's the $this`);
					console.log($this);

					$this.on('click', function(event) {

						// Prevent default.
							event.preventDefault();

						// Toggle.
							// Remove 'active' from other drop-downs (if they're currently open)
							$menu_openers.not($this).removeClass('active');
							// Open this element's drop-down
							$this.toggleClass('active');

						// Trigger resize (sidebar lock).
							$window.triggerHandler('resize.sidebar-lock');

					});

				});
		// NavBar.
			// Store the navbar-container ...
			var $container = $('#navbar-container'),
				// $container_openers = $container.children('.dropdown').find('.dropdown-content');

				// And then store the navbar buttons with class 'opener-james'
				$buttons = $container.children('.dropdown').find('.opener-james');

			// Openers.
				$buttons.each(function() {

					var $this = $(this);
					// console.log(`here's the $this`);
					// console.log($this);

					$this.on('click', function(event) {
						// console.log(event);
						// Prevent default.
							event.preventDefault();

						// Toggle.
							// Select all other buttons, and remove 'active' from their next sibbilng (the dropdown-content div)
							$buttons.not($this).next().removeClass('active-james');
							// Toggle this button's next sibbilig element's class
							$this.next().toggleClass('active-james');

						// Trigger resize (sidebar lock).
							// $window.triggerHandler('resize.sidebar-lock');

					});

				});
	// Menu.
	// $(document).on('click', function(e) {
	// 	// $('.dropdown > div').hide();
	// 	console.log(e);
	// 	var $this = $(this);
	// 	console.log($this);
	// 	var $container = $('#navbar-container')
	// 	console.log($container);
	// 	var $container_openers = $container.children('div').find('.dropdown');
	// 	console.log($container_openers);

		// $container_openers.each(function() {

		// }



		// $('.dropdown > div').removeClass('active-james');
	  
		// if ($(e.target).parent().hasClass('dropdown')) {
		//   $(e.target).siblings('div').toggleClass('active-james');
		// }
	  

		// if(!$(".dropdown-content").is(e.target) && !$(".dropdown-content").has(e.target).length){
		// 	$('.dropdown').slideUp("fast");
		// }                       

		// const elseElements = document.querySelectorAll(".dropdown-content:not(.active)")
	// });
})(jQuery);


// My Drop-down Menu Toggle
// window.onload = function() {
// 	// Store all elements with the class 'opener-james'
//     const elements = document.getElementsByClassName('opener-james');
    
// 	// For all those elements ...
//     for (const element of elements) {
// 		// Add an event listener that  ...
//         element.addEventListener("click", e => {
// 			// If the clicked element's class contains 'active-james', remove that class
// 			if (e.target.classList.contains('active-james')) {
// 				e.target.classList.remove('active-james');
// 			// Else, for all 'opener-james' elements, remove the class 'active-james', and then ...
// 			} else {
// 				for (const element of elements) {
// 					element.classList.remove('active-james')
// 				}
// 				// Add the class of 'active-james' to the currently-clicked element
// 				e.target.classList.add('active-james');
				
// 			}
// 			console.log(e)
//         })
//     }
// }
// window.onload = function() {
// 	// Store all elements with the parent class 'dropdown'
//     const parents = document.getElementsByClassName('dropdown');
// 	console.log(`Here's the parents:`);
//     console.log(parents)
// 	// Store all elements with the class of 'dropdown-content'
// 	const containers = document.getElementsByClassName('dropdown-content');
// 	console.log(`Here's the containers:`);
//     console.log(containers)
//     // Both of these return HTMLCollections - which have array-like properties (indeces, length etc) but aren't arrays
// 	// For all those elements ...
//     for (const element of parents) {
// 		// Add an event listener that  ...
//         element.addEventListener("click", e => {
// 			const elseElements = document.querySelectorAll(".dropdown-content:not(.active)");
// 			// const elseElements = document.querySelectorAll(".dropdown-content");
// 			console.log(`Here's elseElements`);
// 			console.log(elseElements);
// 			// This is the current parent that's been clicked - dropdown, button, and dropdown-content etc
// 			// console.log(`Here's current element`);
// 			// console.log(element);
// 			const currentElement = document.activeElement.nextElementSibling
// 			console.log(`Here's current element`);
// 			console.log(currentElement);

// 			console.log(e);



// 			// let elements = [document.querySelectorAll('.dropdown-content')];
// 			// const targetsInArray = document.getElementsByClassName('dropdown-content');
// 			// console.log(`Herea are the targetsInArray:`);
// 			// console.log(targetsInArray);
// 			// console.log(typeof targetsInArray);

// 			// Test that targetsInArray is an array
// 			// for (const target of targetsInArray) {
// 			// 	console.log(`Here's target:`)
// 			// 	console.log(target)
// 			// }
			

// 			// const otherElements = targetsInArray.filter(thing => thing !== e);
// 			// console.log(`Here are the other elements`);
// 			// console.log(otherElements);
			
// 			// console.log(otherElements);
// 			// console.log(document.querySelectorAll('.dropdown-content'));
// 			element.querySelector('.dropdown-content').classList.add('active-james');
//         });
		

		// console.log(`Here's the specific parent element:`);
		// console.log(element);
		// console.log(`here are the 'dropdown content' elements:`)
		// console.log(document.getElementsByClassName('dropdown-content'));
		// // Stores all the 'dropdown-content' elements 
		// const targetsInArray = document.getElementsByClassName('dropdown-content');
		// // Removes 'active-james' class from all 'dropdown-content' elements
		// for (const target of targetsInArray) {
		// 	target.classList.remove('active-james');
		// }
		// // Add 
		// // element.querySelector('.dropdown-content').classList.toggle('active-james');
		// console.log(`this specific child element:`);
		// console.log(element.querySelector('.dropdown-content').classList)
		// // I think this is always 'off' and then toggled 'on'
		// if (element.querySelector('.dropdown-content').classList.contains('active-james')) {
		// 	element.querySelector('.dropdown-content').classList.remove('active-james');
		// } else {
		// element.querySelector('.dropdown-content').classList.add('active-james');
		// }

//     }
// }
// window.onload = function() {
// 	// Store all elements with the parent class 'dropdown'
//     const parents = document.getElementsByClassName('dropdown');
// 	console.log(`Here's the parents:`);
//     console.log(parents)
// 	// For all those elements ...
//     for (const element of parents) {
// 		// Add an event listener that  ...
// 		// console.log(`Here's the element:`);
// 		// console.log(element);
//         element.addEventListener("click", e => {
// 			// If the clicked element's class contains 'active-james', remove that class
// 			// if (e.target.classList.contains('active-james')) {
// 			// 	e.target.classList.remove('active-james');
// 			// // Else, for all 'opener-james' elements, remove the class 'active-james', and then ...
// 			// } else {
// 			// 	for (const element of parents) {
// 			// 		element.classList.remove('active-james')
// 			// 	}
// 			// 	// Add the class of 'active-james' to the currently-clicked element
// 			// 	e.target.classList.add('active-james');
				
// 			// }
// 			// console.log(e)
// 			// console.log(`Here's the dropdown-content:`)
// 			// console.log(element.querySelector('.dropdown-content'));
// 			// for (const element of parents) {
// 			// 	console.log('Here are the dropdown-contents:')
// 			// 	console.log(element.querySelector('.dropdown-content'))
// 			// 	// element.querySelector('.dropdown-content').classList.remove('active-james')
// 			// }
// 			console.log(`Here's the specific parent element:`);
// 			console.log(element);
// 			console.log(`here are the 'dropdown content' elements:`)
// 			console.log(document.getElementsByClassName('dropdown-content'));
// 			// Stores all the 'dropdown-content' elements 
// 			const targetsInArray = document.getElementsByClassName('dropdown-content');
// 			// Removes 'active-james' class from all 'dropdown-content' elements
// 			for (const target of targetsInArray) {
// 				target.classList.remove('active-james');
// 			}
// 			// Add 
// 			// element.querySelector('.dropdown-content').classList.toggle('active-james');
// 			console.log(`this specific child element:`);
// 			console.log(element.querySelector('.dropdown-content').classList)
// 			// I think this is always 'off' and then toggled 'on'
// 			if (element.querySelector('.dropdown-content').classList.contains('active-james')) {
// 				element.querySelector('.dropdown-content').classList.remove('active-james');
// 			} else {
// 			element.querySelector('.dropdown-content').classList.add('active-james');
// 			}
//         })
//     }
// }

