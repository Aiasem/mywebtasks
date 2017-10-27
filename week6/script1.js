function finish(event) {
	var a = event.currentTarget.parentNode.childNodes[1];
	a.innerHTML = "<strike>" + a.innerHTML + "</strike>";
	console.log(a);
}
var size = document.querySelectorAll("#tasks button").length;
console.log(size);
for (var index = 0; index < size; index++) {
	document.querySelectorAll("#tasks button")[index].addEventListener('click',finish);
}
