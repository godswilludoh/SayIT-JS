// export function setData(key, value) {
// 	localStorage.setItem(key, value);
// }

// export function getData(key) {
// 	localStorage.getItem(key);
// }

// export function removeData(key) {
// 	localStorage.removeItem(key);
// }

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



const searchInput = document.getElementById('search-input');
const rows = document.querySelectorAll('.row');
//console.log(rows);

/*adding event listener*/
searchInput.addEventListener('keyup', (e) => {
	const textDetails = e.target.value;
	//console.log(textDetails);

	/* Looping through the table rows */
	rows.forEach((row) => {
		row.querySelector('td').textContent.toLowerCase().startsWith(textDetails)
			? (row.style.display = 'table-row')
			: (row.style.display = 'none');
	});
});
