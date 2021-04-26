let dropdowns = document.querySelectorAll('.dropdown');

dropdowns.forEach((dropdown) => {
	let span = dropdown.firstElementChild;
	span.addEventListener('click', function() {
		this.parentElement.classList.toggle('active');
	})
	
	let li = dropdown.querySelectorAll('li');
	li.forEach((item) => {
		item.addEventListener('click', function() {
			this.parentElement.nextElementSibling.value = this.textContent;
			this.parentElement.parentElement.classList.toggle('active');
		})
	});
});