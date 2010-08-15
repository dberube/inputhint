/*
 * Input Hint (for jQuery)
 * version: 0.9 (08/15/2010)
 * @requires jQuery v1.2 or later
 *
 * Licensed under the MIT:
 *   http://www.opensource.org/licenses/mit-license.php
 *
 * Copyright 2010 David Berube [ berube@gmail.com ]
 *
 * Usage:
 *
 *  $(document).ready(function() {
 *    $('#form_id').inputHint('inputHint');
 *  })
 *
 * The param is the class for the hint inside of the text box
 *
 */
(function($) {
	$.fn.inputHint = function(class) {
		var form = $(this);
		var win = $(window);
		form.find('input').each(function() {
			var input = $(this);
			var hint = input.attr('title');
			var value = input.val();	
			
			if (input.is(":text") && hint) {
				input.focus(remove).blur(add);
				if (value == '') {
					input.addClass(class).val(hint);
				}
			}

			function add() {
				if (input.val() == '') { input.addClass(class).val(hint); }
			}
			
			function remove() {
				if (input.val() == hint && input.hasClass(class)) { input.removeClass(class).val(''); }
			}		
		});
		
		function removeAll() {
			form.find('input').each(function() {
				
				if ($(this).is(":text") && $(this).hasClass(class)) {
					$(this).val('').removeClass(class);
				}
			});
		}
		
		form.submit(removeAll);
		win.unload(removeAll);
		return this;
	};
})(jQuery);
