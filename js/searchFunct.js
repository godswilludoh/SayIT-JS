let searchInput, filter, table, tr;

searchInput = document.getElementById('search-input');
filter = searchInput.value.toLowerCase();
table = document.getElementById('user-table');
tr = table.getElementsByTagName('tr');

searchInput.addEventListener('keyup', searchFunction);

function searchFunction() {
	for (let i = 0; i < tr.length; i++) {
		let td = tr[i].getElementsByTagName('td')[2];
		console.log(td.innerText);
		if (td.innerText.includes) {
		}
	}
}
