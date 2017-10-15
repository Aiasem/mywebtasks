function change_img(event){
	let image = document.querySelector("#bigImage").children[0];
	let change = document.querySelector("#carousel");
	carousel.addEventListener('click', function(event){
		image.src = event.target.src;
	});
}
change_img();
