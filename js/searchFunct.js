/*searching through report table*/
const searchInput = document.getElementById('search-input');
const rows = document.querySelectorAll('.row');

// searchInput.addEventListener('keyup', searchFunc);

// function searchFunc(e) {
// 	const dataDetails = e.target.value;

// 	for (let i = 0; i < rows.length; i++) {
// 		rows[i].querySelector('td').textContent.includes(dataDetails)
// 			? (rows.style.display = 'table-row')
// 			: (rows.style.display = 'none');
// 	}
// }

/*adding event listener*/
searchInput.addEventListener('keyup', (e) => {
	//convert to lowerCase
	const textDetails = e.target.value.toLowerCase();

	//get tds
	let rowsTd = document.querySelectorAll('td');
	console.log(rowsTd);
	let tableData =
		/* Looping through the table rows */
		rows.forEach((row) => {
			row.querySelector('td').innerText.match(textDetails)
				? (row.style.display = 'table-row')
				: (row.style.display = 'none');
		});
});

// filter.addEventListener('keyup', (e) => {
// 	//convert to lowerCase
// 	let text = e.target.value.toLowerCase();

// 	//get lis
// 	let items = itemList.getElementsByTagName('li');

// 	//convert to an array
// 	Array.from(items).forEach(function (item) {
// 		let itemName = item.firstChild.textContent;
// 		if (itemName.toLowerCase().indexOf(text) != -1) {
// 			item.style.display = 'block';
// 		} else {
// 			item.style.display = 'none';
// 		}
// 	});
// });
