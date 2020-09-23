//Changes the source attribute of the image and calls the function to print all Bounding Boxes.
function plotImage(imgUrl) {
	// $("#qaImage").attr("src", "https://raw.githubusercontent.com/rubenTito/AMT_ST-VQA/master/images/" + imgUrl);		// Previous github version
	$("#qaImage").attr("src", "https://raw.githack.com/rubenTito/AMT_ST-VQA/master/images/" + imgUrl);
	// $("#qaImage").attr("src", "https://rawcdn.githack.com/rubenTito/AMT_ST-VQA/b84d6f6878630383ee50b978c5845d98564274b8/images/" + imgUrl);	// Do not use this one since the random code varies!!

	// Get image dimensions before loading it completely, compute aspect ratio and change image dimensions.
	let img = document.getElementById("qaImage");

	img.onload = function() {
		//Saves the original image size to get the difference when resizing.
		originalWidth = img.naturalWidth;
        originalHeight = img.naturalHeight;
        img.style.width = "100%";
	};
}