window.addEventListener('DOMContentLoaded', function () {

	//Set variables

	let progressIcon = document.querySelector('.progress'),
		progressDiv = document.querySelector('.dashboard__list-item__progress'),
		progressItems = document.querySelectorAll('.dashboard__list-item__progress-item');

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


});