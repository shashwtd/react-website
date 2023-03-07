export function setTransformOrigin(listItem) {
	const rect = listItem.getBoundingClientRect(); // get position and size of list item
	const y = event.clientY - rect.top; // calculate y-coordinate of mouse relative to list item

	const origin = y >= rect.height / 2 ? 'center bottom' : 'center top'; // set origin based on mouse position
    listItem.style.setProperty('--transform-origin', origin); // set css variable
}
