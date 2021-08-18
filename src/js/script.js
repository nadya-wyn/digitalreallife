window.addEventListener('DOMContentLoaded', function () {

	//Set variables

	let progressIcons = document.querySelectorAll('.progress'),
		progressItems = document.querySelectorAll('.dashboard__list-item__progress-item'),
		filterSwitches = document.querySelectorAll('.filterswitch'),
		starCheckers = document.querySelectorAll('.dashboard__list-item__star'),
		tagCheckers = document.querySelectorAll('.content-tag');

	//Progress Open-Close
	function openProgress(item) {
		item.addEventListener('click', function () {
			if (this.classList.contains('progress-active')) {
				this.classList.remove('progress-active');
				this.classList.add('progress-close');

				let thisid = this.id.slice(8);

				let progressDiv = document.getElementById('progresslist' + thisid);
				progressDiv.classList.remove('visually-hidden');
			} else {
				this.classList.remove('progress-close');
				this.classList.add('progress-active');

				let thisid = this.id.slice(8);

				let progressDiv = document.getElementById('progresslist' + thisid);
				progressDiv.classList.add('visually-hidden');
			}
		});
	}
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
	//Tag active
	function tagActive(item) {
		item.addEventListener('click', function () {
			if (this.classList.contains('tag-active')) {
				this.classList.remove('tag-active');
			} else {
				this.classList.add('tag-active');
			}
		});
	}
	progressIcons.forEach(openProgress);
	progressItems.forEach(setItemColor);
	filterSwitches.forEach(chooseSwitch);
	starCheckers.forEach(starActive);
	tagCheckers.forEach(tagActive);

});