helper-equalHeights
===================

Equal Height Blocks in Rows

[DEMO](http://css-tricks.com/equal-height-blocks-in-rows/) from the blog post of [Chris Coyier](http://chriscoyier.net/).

### JavaScript Snippet:

```JavaScript
Brandung.Helpers.equalHeights = function (group, heightSelector) {
	if (!group.length) return;

	var currentTallest = 0,
		currentRowStart = 0,
		rowDivs = [],
		topPosition = 0;

	group.find(heightSelector).each(function () {
		var _self = $(this);

		_self.removeAttr('style');
		topPostion = _self.position().top;

		if (currentRowStart != topPostion) {
			// we just came to a new row.  Set all the heights on the completed row
			for (currentDiv = 0; currentDiv < rowDivs.length; currentDiv++) {
				rowDivs[currentDiv].height(currentTallest);
			}
			// set the variables for the new row
			rowDivs.length = 0; // empty the array
			currentRowStart = topPostion;
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
```
