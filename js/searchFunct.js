// let searchInput, filter, table, tr;

// searchInput = document.getElementById('search-input');
// filter = searchInput.value.toLowerCase();
// table = document.getElementById('user-table');
// tr = table.getElementsByTagName('tr');

// searchInput.addEventListener('keyup', searchFunction);

// function searchFunction() {
// 	for (let i = 0; i < tr.length; i++) {
// 		let td = tr[i].getElementsByTagName('td')[2];
// 		console.log(td.innerText);
// 		if (td.innerText.includes) {
// 		}
// 	}
// }

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
