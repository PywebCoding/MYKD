/* ==================== CONSTANTS ==================== */
const popup = document.querySelector('.popup'),
	popupClose = document.querySelector('.popup__close'),
	searchOpener = document.querySelector('.search')
scrollTopBtn = document.querySelector('.scroll-top')

/* ==================== EVENTS ==================== */
if (searchOpener) {
	searchOpener.addEventListener('click', () => {
		popup.classList.add('active')
	})
}
if (popupClose) {
	popupClose.addEventListener('click', () => {
		popup.classList.remove('active')
	})
}

scrollTopBtn.addEventListener('click', () => {
	window.scrollTo({
		top: 400,
	})
})

window.addEventListener('scroll', () => {
	if (
		document.body.scrollTop > 100 ||
		document.documentElement.scrollTop > 100
	) {
		scrollTopBtn.classList.add('opened')
	} else {
		scrollTopBtn.classList.remove('opened')
	}
})
