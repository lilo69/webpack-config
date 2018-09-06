window.onscroll = function () {
	let boxHeaderStickTop = 0;
	const stick = document.getElementsByClassName('stick');
	if (stick.length > 0) {
		boxHeaderStickTop = stick[0].offsetTop;
	}
	const elements = document.getElementsByClassName('stick__content');
	if (elements.length > 0) {
		const element = elements[0];
		if ((document.documentElement.scrollTop + 50) >= boxHeaderStickTop) {
			if (element.className.indexOf('stick--active') === -1) {
				element.classList.add('stick--active');
			}
		}
		else {
			element.classList.remove('stick--active');
		}
	}
};