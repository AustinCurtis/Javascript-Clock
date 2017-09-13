
function startTime() {
	var today = new Date();

	var wds = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
	var ms = ["January", "February", "March", "April", "May", "June",
"July", "August", "September", "October", "November", "December"];

	var hour = today.getHours();
	var min = today.getMinutes();
	var col = button.checked;
	if (hour<=4) {

	}else if(hour>4&&hour<=8){
		document.body.style.backgroundImage = "url('img/2.jpg')";
	}else if (hour>8&&hour<=12) {
		document.body.style.backgroundImage = "url('img/3.jpg')";
	}else if (hour>12&&hour<=16) {
		document.body.style.backgroundImage = "url('img/4.jpg')";
	}else if (hour>16&&hour<=20) {
		document.body.style.backgroundImage = "url('img/5.jpg')";
	}else{
		document.body.style.backgroundImage = "url('img/6.jpg')";
	}

	if (min < 10) {
		min = "0"+min;
	}
	if (hour > 12 && !col) {
		hour = hour -12;
		var car = "PM";
		tw.style.color = "#2196F3";
	}else if (!col){
		var car = "AM";
		tw.style.color = "#2196F3";
	}else{
		var car = null;
		tw.style.color = "#A9A9A9";
	}
	
	h.innerHTML = hour;
	m.innerHTML = min;
	c.innerHTML = car;

	var wday = today.getDay();
	var month = today.getMonth();
	var day = today.getDate();
	var year = today.getFullYear();

	w.innerHTML = wds[wday];
	mo.innerHTML = ms[month];
	d.innerHTML = day;
	y.innerHTML = year;
	//console.log(year);
	

}


var h = document.getElementById('hour');
var m = document.getElementById('min');
var c = document.getElementById('car');

var w = document.getElementById('wday');
var mo = document.getElementById('month');
var d = document.getElementById('day');
var y = document.getElementById('year');

var button =  document.getElementById('button');
var tw = document.getElementById('twelve');

var body = document.getElementById('body');

//console.log(hour)

startTime();

//startTime();
setInterval(startTime, 5000);