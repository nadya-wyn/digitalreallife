window.addEventListener('DOMContentLoaded', function () {

	//Set variables

	let progressIcon = document.querySelector('.progress'),
		progressDiv = document.querySelector('.dashboard__list-item__progress'),
		progressItems = document.querySelectorAll('.dashboard__list-item__progress-item'),
		filterSwitches = document.querySelectorAll('.filterswitch'),
		starCheckers = document.querySelectorAll('.dashboard__list-item__star');

	//Progress Open-Close
	progressIcon.addEventListener('click', function () {
		if (this.classList.contains('progress-active')) {
			this.classList.remove('progress-active');
			this.classList.add('progress-close');

			progressDiv.classList.remove('visually-hidden');
		} else {
			this.classList.remove('progress-close');
			this.classList.add('progress-active');
			progressDiv.classList.add('visually-hidden');
		}
	});

	//Progress-Item active-inactive

	function setItemColor(item) {
		item.addEventListener('click', function () {
			if (this.classList.contains('pi-active')) {
				this.classList.remove('pi-active');
			} else {
				this.classList.add('pi-active');
			}
		});
	}

	progressItems.forEach(setItemColor);

	//Filter Switches

	function chooseSwitch(item) {
		item.addEventListener('click', function () {
			if (this.classList.contains('sw-active')) {
				this.classList.remove('sw-active');
				let thisid = this.id.slice(12);

				let listToShow = document.getElementById('list' + thisid);

				listToShow.classList.add('visually-hidden');

			} else {
				this.classList.add('sw-active');
				let thisid = this.id.slice(12);

				let listToShow = document.getElementById('list' + thisid);

				listToShow.classList.remove('visually-hidden');
			}
		});
	}

	filterSwitches.forEach(chooseSwitch);

	//Star active
	function starActive(item) {
		item.addEventListener('click', function () {
			if (this.classList.contains('star-active')) {
				this.classList.remove('star-active');
			} else {
				this.classList.add('star-active');
			}
		});
	}

	starCheckers.forEach(starActive);
});