javascript:var num = prompt("How times do you want this page to show up in your history/?\nMade By: BlazerHM");
done = false;
x = window.location.href;
for (var i = 1; i <= num; i++) {
	history.pushState(0, 0, i == num?x:i.toString());
	if(i == num) {
		done = true;
	}
}
if(done === true) {
	alert("History Flooding Successful!\n " + window.location.href + " \nNow Appears In Your History " + num + (num == 1?" times.":" Times. \nMade By: BlazerHM"));
}