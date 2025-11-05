
// Get all siblings between h2s in main
const nextUntil = (elem, selector, filter) => {

	// Setup siblings array
	var siblings = []

	// Get the next sibling element
	elem = elem.nextElementSibling

	// As long as a sibling exists
	while (elem) {

		// If we've reached our match, bail
		if (elem.matches(selector)) break

		// If filtering by a selector, check if the sibling matches
		if (filter && !elem.matches(filter)) {
			elem = elem.nextElementSibling
			continue
		}

		// Otherwise, push it to the siblings array
		siblings.push(elem)

		// Get the next sibling element
		elem = elem.nextElementSibling

	}

	return siblings

}

// Show an element
const show = (elem) => {
	elem.style.display = 'block'
	elem.ariaExpanded = 'expanded'
}

// Hide an element
const hide = (elem) => {
	elem.style.display = 'none'
  elem.ariaExpanded = 'collapsed'
}

const main = document.getElementById("observablehq-main")

// Handle h2 clicks to toggle show/hide
function handleClick(event) {
  const h2 = event.target.closest("h2")
  if (h2 === null) return

  if (h2 != null) {
    const sibs = nextUntil(h2, "h2")
    for (const sib of sibs) {

      if (sib.ariaExpanded == null || sib.ariaExpanded == 'expanded') {
        hide(sib)
      }
      else if (sib.ariaExpanded == 'collapsed') {
        show(sib)
      }

    }
  } else {
    const sibs = nextUntil(h2, "h2")
  }

}

// Add the click event listener
main.addEventListener("click", handleClick)
