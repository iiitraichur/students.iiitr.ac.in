/** @format */

$(function () {
	// MENU
	$('.navbar-collapse a').on('click', function () {
		$('.navbar-collapse').collapse('hide')
	})

	// AOS ANIMATION
	AOS.init({
		disable: 'mobile',
		duration: 800,
		anchorPlacement: 'center-bottom',
	})

	// SMOOTHSCROLL NAVBAR
	$(function () {
		$('.navbar a, .hero-text a').on('click', function (event) {
			var $anchor = $(this)
			$('html, body')
				.stop()
				.animate(
					{
						scrollTop: $($anchor.attr('href')).offset().top - 49,
					},
					1000
				)
			event.preventDefault()
		})
	})
})

const createUser = (user) => {
	axios
		.post('https://backend-iiitr.puppalakoushik.repl.co/contact', user)
		.then((response) => {
			console.log(response)
		})
		.catch((error) => console.error(error))
}

const form = document.getElementById('submit-button')

const formEvent = form.addEventListener('submit', (event) => {
	event.preventDefault()

	const Name = document.getElementById('Name').value
	const Email = document.getElementById('Email').value
	const Phone = document.getElementById('Phone').value
	const Subject = document.getElementById('Subject').value
	const Message = document.getElementById('Message').value

	const user = { Name, Email, Phone, Subject, Message }
	createUser(user)
})
