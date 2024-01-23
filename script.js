document.addEventListener("DOMContentLoaded", function () {
	const addImageButton = document.getElementById("addImageButton");
	const imageUrlInput = document.getElementById("imageUrlInput");
	const imageContainer = document.getElementById("imageContainer");

	addImageButton.addEventListener("click", addImage);
	function addImage() {
		const url = imageUrlInput.value;
		if (url) {
			const imageBox = document.createElement("div");
			imageBox.className = "imageBox";

			const image = document.createElement("img");
			image.src = url;
			image.style.width = "100px";
			image.style.height = "100px";
			imageBox.appendChild(image);

			const removeButton = document.createElement("button");
			removeButton.textContent = "Remove";
			removeButton.addEventListener("click", function () {
				imageContainer.removeChild(imageBox);
			});

			imageBox.appendChild(removeButton);
			imageBox.addEventListener("click", function (event) {
				if (event.target.tagName !== "BUTTON") {
					this.classList.toggle("selected");
				}
			});

			imageContainer.appendChild(imageBox);
			imageUrlInput.value = "";
		}
	}
});
