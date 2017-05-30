// JavaScript Document

	if (document.images)
	{
	    image1 = new Image;
	    image2 = new Image;
	    image1.src = "./global/leer.gif";
	    image2.src = "./global/ronny1a.gif";
	}

function chgImg(name, image)
	{
	    if (document.images)
	    {
	        document[name].src = eval(image+".src");
	    }
	}
	
	
/* Verschleierung von Email-Angaben zur Abwehr von SPAM-Sammler */
function emailverschleierung(position1, position2)
	{
			var em = '';
			var tmp;
			for(i=0;i<erp.length;i++){
				tmp = erp[i];
				if(Math.floor((tmp/Math.pow(256,3)))>0){
					em += String.fromCharCode(Math.floor((tmp/Math.pow(256,3))));	};
				tmp = tmp - (Math.floor((tmp/Math.pow(256,3))) * Math.pow(256,3));
				if(Math.floor((tmp/Math.pow(256,2)))>0){
					em += String.fromCharCode(Math.floor((tmp/Math.pow(256,2))));
				};
				tmp = tmp - (Math.floor((tmp/Math.pow(256,2))) * Math.pow(256,2));
				if(Math.floor((tmp/Math.pow(256,1)))>0){
					em += String.fromCharCode(Math.floor((tmp/Math.pow(256,1))));
				};
				tmp = tmp - (Math.floor((tmp/Math.pow(256,1))) * Math.pow(256,1));
				if(Math.floor((tmp/Math.pow(256,0)))>0){
					em += String.fromCharCode(Math.floor((tmp/Math.pow(256,0))));
				};
			};
			var tmp = new Array;
			tmp = em.split('>>><<<');
			em = tmp[0];
			var anhang = '<img src="./global/link-email.gif" alt="" border="0" width="15" height="13">' + tmp[1];
			var nl = document.createElement('a');
			nl.setAttribute('id', position2);
			nl.setAttribute('href', 'mailto:' + em);
			document.getElementById(position1).appendChild(nl);
			document.getElementById(position2).innerHTML = anhang;
	}
