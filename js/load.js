function addhours(){
	for(var i= 0; i<7; i++){
		function addtoday(day){
			function addhour(day, hourtime){
				var hour = document.createElement('div');
				hour.setAttribute('class','hour');
				hour.setAttribute('id',day+'+'+hourtime);
				return hour;
			}
			today = document.createElement('div');
			for(var j=1; j<25; j++){
				today.appendChild(addhour(day, j));
			}
			return today;
		}
		document.getElementById(i+'').innerHTML=addtoday(i).innerHTML;
	}
}

function addevent(day, hour, length, desc, flag){
	var event = document.createElement('div');
	event.setAttribute('class','event ' + flag);
	event.setAttribute('style','position:absolute; top:' + Math.floor(hour*51+5) + 'px; height:'+Math.floor(length*50/60)+'px;');
	event.innerHTML="<span class=title>" + desc + "</span>";
	document.getElementById(day).appendChild(event);
}


function loaddemo(){
	addevent(0, 10.5, 120, 'Coffee with Kevin','cal1');
	
	addevent(1, 7, 45, 'Run with Akshay','main');
	addevent(1, 8, 45, 'Schatz Breakfast','cal1');
	
	addevent(1, 16, 120, '15-396 TA Hours','main');
	addevent(1, 20.5, 60, 'Dinner with Quintin','cal1');
	
	addevent(2, 10, 30, 'FB Interview','main');
	addevent(2, 13, 60, 'Lunch with Ben','cal1');
	
	addevent(3, 11.5, 45, 'Lunch with Nate','cal1');
	addevent(3, 13.5, 120, 'Dropbox Event','cal2');
	
	addevent(4, 9.5, 130, 'Meet with Stehlik','main');
	addevent(4, 13.5, 45, 'Lifting with Akshay','main');
	
	addevent(4, 16, 30, 'SIH Meeting','main');
	
	
	addevent(5, 16, 90, 'Yelp Tech Talk','cal2');
	addevent(5, 20, 180, 'Kickback Party','main');
	
	addevent(6, 8, 360, 'Vilcya\'s Party','main');
	
}



function loadjs(){
	addhours();
	
	detectsidebar();
	loaddemo();
	
	
}
