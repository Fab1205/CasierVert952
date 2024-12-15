function resizeHome() {
	var img = new Image();
	var windowWidth = window.innerWidth;
	
	if (windowWidth <= 600) {
		img.src = 'images/background_mobile_1.webp';
	}
	else{
		img.src = 'images/background.webp';
	}
	
	var imageWidth = img.width;
	var imageHeight = img.height;

	
	var new_div_width = windowWidth;
	var new_div_height = imageHeight * windowWidth / imageWidth;
	var homeSection = document.getElementById('home');

	homeSection.style.width = new_div_width + 'px';
	homeSection.style.height = new_div_height + 'px';
};

window.addEventListener('resize', resizeHome);

window.onload = function() {
	resizeHome();
};