//Working on time
setInterval(() => {
	const time = document.querySelector('.time-one');
	let date = new Date();
	let hours = date.getHours();
	let minutes = date.getMinutes();

	if (hours > 12) {
		hours = hours - 12;
	}

	if (hours < 10) {
		hours = '0' + hours;
	}

	if (minutes < 10) {
		minutes = '0' + minutes;
	}

	time.textContent = hours + ':' + minutes;
}, 1000);

//working on date
const date = document.querySelector('.time-two');
let today = new Date().getDate();
let month = new Date().getMonth() + 1;
let year = new Date().getFullYear();

if (month < 10) {
	month = '0' + month;
}
date.textContent = today + ':' + month + ':' + year;

//logout
let logout = document.getElementById('logout');
logout.addEventListener('click', () => {
	window.location = 'loginpage.html';
});

// testing the dynamic username
let localStorageUsername = JSON.parse(localStorage.getItem('currentUser'));

let username = document.getElementById('username').innerText =
localStorageUsername[0].username;
let profilename = document.getElementById('profilename').innerText =
localStorageUsername[0].username;
