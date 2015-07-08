/*=============================================
KALI

	@by cav_dan

	$()
	Kali: just a querySelector & querySelectorAll wrapper.
	@args
		string selector -> a css like selector.
			returns single object OR array of objects
	@methods
		.each(function(element object){});
==============================================*/
var $ = function(selector) {
	var selectorResults = document.querySelectorAll(selector);

	var kali = selectorResults.length > 1 ? selectorResults : selectorResults[0];
	if (kali != undefined)
	{
		//$.each()
		kali.each = function(whatToDo) {
			for (var el = this.length - 1; el >= 0; el--) {
				whatToDo(this[el]);
			}
		}
		return kali;
	}

	return false;
};