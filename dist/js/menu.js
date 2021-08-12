window.addEventListener('DOMContentLoaded', function () {

	let currentWWidth = document.documentElement.clientWidth;

	let tagNav = document.querySelector('.header__tags'),
		tagItems = document.querySelector('.header__tag-menu'),
		headerInfo = document.querySelector('.header__info'),
		headerMenuContainer = document.querySelector('.header__menu-container'),
		headerLogo = document.querySelector('.header__logo'),
		headerToggle = document.querySelector('.header__nav-toggle'),
		headerMenu = document.querySelector('.header__menu'),
		hMC = document.querySelector('.header__menu-container'),
		headerNav = document.querySelector('.header__nav');

	let promo = document.querySelector('.main__promo');

	function adjustPadding() {
		if (currentWWidth > 1024) {
			headerInfo.style.paddingTop = '90px';
		} else if (currentWWidth > 768) {
			headerInfo.style.paddingTop = '160px';
		} else if (currentWWidth > 425) {
			headerMenu.classList.remove('fixed');
			headerInfo.style.paddingTop = '0';
		} else {
			headerInfo.style.paddingTop = '130px';
			headerMenu.classList.add('fixed');
		}
	}

	adjustPadding();

	window.addEventListener('resize', adjustPadding, false);
	window.addEventListener('orientationchange', adjustPadding, false);

	window.addEventListener('scroll', raz, false);
	window.addEventListener('resize', raz, false);

	function raz() {

		let rect = tagNav.getBoundingClientRect(),
			rect2 = headerInfo.getBoundingClientRect();

		currentWWidth = document.documentElement.clientWidth;
		//tagNav.innerHTML = 'top: ' + rect.top + '<br>bottom: ' + rect.bottom;
		//promo.innerHTML = 'top: ' + rect2.top + '<br>bottom: ' + rect2.bottom;

		if (currentWWidth > 1024) {

			if (rect.top <= 90) {
				tagNav.classList.add('fixed');
				tagNav.style.padding = '5px';
				tagNav.style.top = '40px';
				headerMenu.style.minHeight = '40px';

				headerLogo.style.margin = '0';
				headerNav.style.margin = '0';
			}
			if (rect2.top >= -106) {
				tagNav.classList.remove('fixed');
				headerMenu.style.minHeight = '90px';
				tagNav.style.padding = '15px';

				tagNav.style.top = '';

				headerLogo.style.margin = '';
				headerNav.style.margin = '';
			}
		} else if (currentWWidth > 768) {

			if (rect.top <= 160) {
				tagNav.classList.add('fixed');

				tagNav.style.padding = '5px';
				tagNav.style.top = '96px';
				headerMenu.style.minHeight = '40px';

				hMC.style.padding = '0';
				headerNav.style.margin = '0';
			}
			if (rect2.top >= -112) {
				tagNav.classList.remove('fixed');

				headerMenu.style.minHeight = '90px';
				tagNav.style.padding = '15px';
				tagNav.style.top = '';

				hMC.style.padding = '15px 25px';
				headerNav.style.margin = '10px';
			}
		} else if (currentWWidth > 425) {
			headerMenu.classList.remove('fixed');
		} else {

			if (rect.top <= 130) {
				headerLogo.style.marginTop = '5px';
				headerLogo.style.marginLeft = '-80px';
				headerToggle.style.top = '18px';
				headerToggle.style.left = 'auto';
				headerToggle.style.right = '-14px';
				headerMenu.style.minHeight = '70px';
				headerMenu.style.height = '76px';

			}
			if (rect2.top >= -112) {
				headerLogo.style.marginLeft = '';
				headerLogo.style.marginTop = '20px';
				headerToggle.style.top = '75px';
				headerToggle.style.left = '50%';
				headerToggle.style.right = 'auto';
				headerMenu.style.height = '140px';
				headerMenu.style.minHeight = '90px';

			}
		}
	}



});