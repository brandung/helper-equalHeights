/**
 * helper-equalHeights.js - v2.0.0
 * https://github.com/brandung/helper-equalHeights.git
 *
 * Copyright brandung GmbH & Co.KG
 * http://www.brandung.de/
 * MIT License (MIT)
 * 
 * @require: jQuery
 *
 * @param {object} block object, e.g. $('ul')
 * @param {string} selector, e.g. 'li'
 */

Brandung.Helpers.equalHeights = function (group, item) {
	if (!group.length) return;

	var s = document.body || document.documentElement, s = s.style;
	if( s.webkitFlexWrap == '' || s.msFlexWrap == '' || s.flexWrap == '' ) return true;

	var $list = group,
		$items = $list.find(item),
		setHeights = function ()
		{
			$items.css( 'height', 'auto' );

			var perRow = Math.floor( $list.width() / $items.width() );
			if( perRow == null || perRow < 2 ) return true;

			for( var i = 0, j = $items.length; i < j; i += perRow )
			{
				var maxHeight   = 0,
					$row        = $items.slice( i, i + perRow );

				$row.each( function()
				{
					var itemHeight = parseInt( $( this ).outerHeight() );
					if ( itemHeight > maxHeight ) maxHeight = itemHeight;
				});
				$row.css( 'height', maxHeight );
			}
		};

	setHeights();
	$(window).on( 'resize', setHeights );
	$list.find('img').on( 'load', setHeights );
};
