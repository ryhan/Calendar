function updatesidebar(){
	var val = document.getElementById('addevent').value;
	
	document.getElementById('eventname').innerHTML = val;
	
	
	
}


function hidesidebar(){
	document.getElementById('cal').setAttribute('class','');
	document.getElementById('dates').setAttribute('class','');
	document.getElementById('sidebar').setAttribute('class','');
}
function showsidebar(){
	document.getElementById('cal').setAttribute('class','compressed');
	document.getElementById('dates').setAttribute('class','compressed');
	document.getElementById('sidebar').setAttribute('class','compressed');
}

function togglesidebar(){
	var comp = document.getElementsByClassName('compressed');
	if (comp.length==0){showsidebar();}
	else{hidesidebar();}
	
}

function detectsidebar(){
	if (document.getElementById('addevent').value.length==0){
		hidesidebar();
	}else{ 
		showsidebar();
		updatesidebar();
	}
	var t = setTimeout("detectsidebar();",100);
}