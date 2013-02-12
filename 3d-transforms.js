var toggle = document.getElementById('toggle'),
    persprange = document.getElementById('persprange'),
    persporigin = document.getElementById('persporiginrange'),
    flipcards = document.getElementById('flipcards'),
    ct = document.getElementById('changetranslate'),
    rxyz = document.getElementById('rxyz');

if( toggle ){
    toggle.addEventListener('change', function(e){
        e.preventDefault();
        var stage = document.getElementById('stage');
        // consider adding support for non classList browsers
        e.target.checked ? stage.classList.add('perspective') : stage.classList.remove('perspective');
    }, false);
}

if( persprange ){
    persprange.addEventListener('submit',function(e){ e.preventDefault(); },false);
    persprange.addEventListener('change', function(e){
        e.preventDefault();
        var stage = document.getElementById('stage'),
            perspectivevalue = document.getElementById('perspectivevalue');

        stage.style.webkitPerspective = e.target.value+'px';
        stage.style.mozPerspective = e.target.value+'px';
        stage.style.msPerspective = e.target.value+'px';
        stage.style.perspective = e.target.value+'px';

        e.target.nextElementSibling.innerHTML = e.target.value+'px';
    }, false);
} 

if(flipcards){
    flipcards.addEventListener('submit', function(e){
        e.preventDefault();
        var deck = document.getElementById('deck');
        deck.classList.toggle('flipped');
    }, false);
}

if(ct){
	ct.addEventListener('change', function(e){
		e.preventDefault();
		var f = document.getElementsByClassName('facet'),
			update = document.getElementById('translateZvalue'),
			v = e.target.value;
		Array.prototype.map.call(f, function(o){
			o.style.webkitTransform = 'translateZ('+v+'px)';
			   o.style.MozTransform = 'translateZ('+v+'px)';
			    o.style.MsTransform = 'translateZ('+v+'px)';
			      o.style.transform = 'translateZ('+v+'px)';
		});	
		update.innerHTML = +(v);
	},true);
	
	ct.addEventListener('reset', function(e){
		var f = document.getElementsByClassName('facet'),
			update = document.getElementById('translateZvalue'),
			v = e.target.value;
		Array.prototype.map.call(f, function(o){
			o.removeAttribute('style');
		});	
		update.innerHTML = '0';
	},true);
} 

