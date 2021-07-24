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

const form = document.getElementById('form')

const formEvent = form.addEventListener('submit', (event) => {
	event.preventDefault()

	if (Check()) {
		alert('There are Some errors check the form')
	} else {
		alert('Your Form Submitted Successfully')
		document.getElementById('contact-form').setAttribute('hidden', 'hidden')
		document.getElementById('submitted-form').removeAttribute('hidden')
	}
	Post()
})

const Name = document.getElementById('Name')
const Email = document.getElementById('Email')
const Phone = document.getElementById('Phone')
const Subject = document.getElementById('Subject')
const Message = document.getElementById('Message')

const Post = () => {
	axios
		.post('https://backend-iiitr.puppalakoushik.repl.co/contact', {
			Name: `${Name.value}`,
			Email: `${Email.value}`,
			Phone: `${Phone.value}`,
			Subject: `${Subject.value}`,
			Message: `${Message.value}`,
		})
		.then((response) => {
			console.log(response)
		})
		.catch((error) => console.error(error, error.response))
}

function SetError(input, message) {
	const formControl = input.parentElement
	const small = formControl.querySelector('small')
	formControl.classList.add('error')
	small.removeAttribute('hidden')
	small.innerText = message
}

function SetSuccess(input) {
	const formControl = input.parentElement
	const small = formControl.querySelector('small')
	formControl.classList.remove('error')
	small.setAttribute('hidden', 'hidden')
}

function isEmail(email) {
	return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
		email
	)
}

const Check = () => {
	let error
	if (Name.value.trim() === '') {
		SetError(Name, 'Name cannot be blank')
		error = true
	} else {
		SetSuccess(Name)
	}
	if (Email.value.trim() === '') {
		SetError(Email, 'Name cannot be blank')
		error = true
	} else if (!isEmail(Email.value.trim())) {
		SetError(Email, 'Not a valid email')
		error = true
	} else {
		SetSuccess(Email)
	}
	if (Phone.value.trim() === '') {
		SetError(Phone, 'Name Number cannot be blank')
		error = true
	} else {
		SetSuccess(Phone)
	}
	if (Subject.value.trim() === '') {
		SetError(Subject, 'Subject cannot be blank')
		error = true
	} else {
		SetSuccess(Subject)
	}
	if (Message.value.trim() === '') {
		SetError(Message, 'Message cannot be blank')
		error = true
	} else {
		SetSuccess(Message)
	}

	return error
}
