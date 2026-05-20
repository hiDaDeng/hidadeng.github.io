function timeTick() {
	var time = new Date();
	var minutes = time.getMinutes(); 
	var hours = time.getHours(); 

	//makes sure all numbers have two decimals (5 -> 05)
	if(minutes < 10) {
		minutes = "0" + minutes;
	}
	if(hours < 10) {
		hours = "0" + hours;
	}

	document.getElementById("title").innerHTML = (hours + ":" + minutes);

	setTimeout(timeTick, 10000);
}

function setDate() {
    var date = new Date();
    var year = date.getFullYear();
    var day = date.getDate();
	var month = date.getUTCMonth()+1;

    const monthNames = getMonthNames();

    //month = monthNames[month];
    document.getElementById("date").innerHTML = (year+'-'+month+'-'+day);
}


function getMonthNames() {
	var lan = navigator.languages[0];
	var monthNames;

	switch(lan) {
		case "da": //DANISH MONTH NAMES
			monthNames = ["Januar", "Februar", "Marts", "April", "Maj", "Juni",
			"Juli", "August", "September", "Oktober", "November", "December"];
			break;
		case "es": //SPANISH MONTH NAMES
			monthNames = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio",
			"Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
			break;
		default: //ENGLISH MONTH NAMES
			return ["January", "February", "March", "April", "May", "June",
			"July", "August", "September", "October", "November", "December"];
			break;
	}
	return monthNames;
}