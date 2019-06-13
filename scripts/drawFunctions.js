//Changes the source attribute of the image and calls the function to print all Bounding Boxes.
function plotImage(imgUrl) {
	$("#qaImage").attr("src", imgUrl);

	// Get image dimensions before loading it completely, compute aspect ratio and change image dimenions.
	img = document.getElementById("qaImage");

	img.onload = function() {
		//Saves the original image size to get the difference when resizing.
		originalWidth = img.naturalWidth;
        originalHeight = img.naturalHeight;
        img.style.width = "100%";
	};
}