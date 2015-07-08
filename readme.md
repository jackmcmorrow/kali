Kali
====

This is a simple document.querySelector and document.querySelectorAll wrapper using the $ symbol as shortcut and, thus, overriding jQuery if you loaded it at some point. It's currently used in my projects where I'm only targeting Chrome, such as Chrome Apps and Extensions, or private WebApps that can use Chrome Mobile.

##Example usage##

	//Simple selector
	var a = $(".someClass") //returns either a single element or an array of elements

	//Iterate over elements
	$(".lotsOfElements").each(function(index, element) {
			console.log(index, element.className); // "0, lotsOfElements"
	});