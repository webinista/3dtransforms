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

if( persporigin ){
    persporigin.addEventListener('submit',function(e){ e.preventDefault(); },false);
    persporigin.addEventListener('change', function(e){
        e.preventDefault();
        var stage = document.getElementById('stage'),
            px = document.getElementById('perspectiveX'),
            py = document.getElementById('perspectiveY');

            stage.style.webkitPerspectiveOrigin = px.value+'px '+py.value+'px';
            stage.style.mozPerspectiveOrigin    = px.value+'px '+py.value+'px';
            stage.style.msPerspectiveOrigin     = px.value+'px '+py.value+'px';
            stage.style.perspectiveOrigin       = px.value+'px '+py.value+'px';

            e.target.nextElementSibling.innerHTML = e.target.value+'px';
    }, false);
    persporigin.addEventListener('reset',function(e){
        var px = document.getElementById('perspectiveX'),
            py = document.getElementById('perspectiveY');

            px.nextElementSibling.innerHTML = py.nextElementSibling.innerHTML = '';
            stage.removeAttribute('style');

    },false);
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

if(rxyz){
	rxyz.addEventListener('change', function(e){
		var stage = document.getElementById('stage');	
		stage.className = '';
		switch( e.target.id ){
			case 'rx':
				stage.classList.add('rotatex');
				break;
			case 'ry':
				stage.classList.add('rotatey');
				break;
			case 'rz':
				stage.classList.add('rotatez');
				break;		
		}
	}, false);
	
	rxyz.addEventListener('reset', function(e){
		var stage = document.getElementById('stage');	
		stage.className = '';	
	}, false);
	
	// Resets the form and stops the animation if the tab loses focus.
	document.addEventListener('visibilitychange', function(e){
		if( document.hidden ){
			rxyz.reset();
		}
	},false);
}
