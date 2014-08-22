/**
 * helper-equalHeights.js - v1.0.0
 * https://github.com/brandung/helper-equalHeights.git
 *
 * Copyright brandung GmbH & Co.KG
 * http://www.brandung.de/
 * MIT License (MIT)
 *
 * @param {object} block object, e.g. $('ul')
 * @param {string} selector, e.g. 'li'
 */

Brandung.Helpers.equalHeights = function (group, heightSelector) {
	if (!group.length) return;

	var currentTallest = 0,
		currentRowStart = 0,
		rowDivs = [],
		topPosition = 0;

	group.find(heightSelector).each(function () {
		var _self = $(this);

		_self.removeAttr('style');
		topPosition = _self.position().top;

		if (currentRowStart != topPosition) {
			// we just came to a new row.  Set all the heights on the completed row
			for (currentDiv = 0; currentDiv < rowDivs.length; currentDiv++) {
				rowDivs[currentDiv].height(currentTallest);
			}
			// set the variables for the new row
			rowDivs.length = 0; // empty the array
			currentRowStart = topPosition;
			currentTallest = _self.height();
			rowDivs.push(_self);
		} else {
			// another div on the current row.  Add it to the list and check if it's taller
			rowDivs.push(_self);
			currentTallest = (currentTallest < _self.height()) ? (_self.height()) : (currentTallest);
		}
		// do the last row
		for (currentDiv = 0; currentDiv < rowDivs.length; currentDiv++) {
			rowDivs[currentDiv].height(currentTallest);
		}
	});
};
