// Select all draggable elements
const draggables = document.querySelectorAll(".draggable");

// Add dragging functionality to each draggable element
draggables.forEach((img) => {
	img.addEventListener("mousedown", (e) => {
		// Get initial position of the image
		const shiftX = e.clientX - img.getBoundingClientRect().left;
		const shiftY = e.clientY - img.getBoundingClientRect().top;

		const moveAt = (pageX, pageY) => {
			img.style.left = pageX - shiftX + "px";
			img.style.top = pageY - shiftY + "px";
		};

		// Mouse move event for dragging
		const onMouseMove = (event) => {
			moveAt(event.pageX, event.pageY);
		};

		// Stop dragging on mouse up
		const onMouseUp = () => {
			document.removeEventListener("mousemove", onMouseMove);
			document.removeEventListener("mouseup", onMouseUp);
		};

		// Add event listeners for mouse move and mouse up
		document.addEventListener("mousemove", onMouseMove);
		document.addEventListener("mouseup", onMouseUp);

		// Bring the image to the top while dragging
		img.style.position = "absolute";
		img.style.zIndex = 1000; // Ensure it’s above other elements
		moveAt(e.pageX, e.pageY); // Start dragging from the current position
	});

	// Disable default browser drag-and-drop behavior
	img.addEventListener("dragstart", () => false);
});
