//Changes the source attribute of the image and calls the function to print all Bounding Boxes.
function plotImage(imgUrl) {
	$("#qaImage").attr("src", "https://raw.githubusercontent.com/rubenTito/AMT_ST-VQA/master/images/" + imgUrl);

	// Get image dimensions before loading it completely, compute aspect ratio and change image dimensions.
	let img = document.getElementById("qaImage");

	img.onload = function() {
		//Saves the original image size to get the difference when resizing.
		originalWidth = img.naturalWidth;
        originalHeight = img.naturalHeight;
        img.style.width = "100%";
	};
}