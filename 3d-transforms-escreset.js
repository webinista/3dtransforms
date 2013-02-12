(function(){
	var escreset = function(e){
		if( document.forms && (e.keyCode == 27)){
			document.forms[0].reset();
		} 	
	}
	window.addEventListener('keydown', escreset, false);
})();