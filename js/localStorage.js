const reportForm = (e) => {
	try {
		
		e.preventDefault();
	
	// alert("i'm here")
	// create an empty array to store the reports
	let reportData = JSON.parse(localStorage.getItem('reportData')) || [];
	let currentUser = JSON.parse(localStorage.getItem("currentUser"))|| {};
	


	let reports = {
		sectorDetails: document.getElementById('sector').value,
		agencyDetails: document.getElementById('agency').value,
		reportDetails: document.getElementById('report-org').value,
		reportInfoDetails: document.getElementById('report-info').value,
		affiliationDetails: document.getElementById('affiliation').value,
		uploadDetails: document.getElementById('upload').value,
		dateReported: dateReported(),
		reportID: Math.floor(Math.random() * Date.now()),
		reportBy: currentUser.username 
	};

	reportData.push(reports);
	localStorage.setItem('reportData', JSON.stringify(reportData));
	// card();
	// sectorOutput();
} catch (error) {
		console.log(error)
}
};

function userTable() {
	let table = document.querySelector('table');
	let headerRow = document.createElement('tr');
	headerRow.innerHTML = `<th>S/N</th>    
    <th>Date reported</th>
    <th>Report ID</th>
    <th>Sector</th>
    <th>Action</th>`;
	table.appendChild(headerRow);
	//getting the table details from local storage
	let { dateReported, reportID, sectorDetails } = JSON.parse(
		localStorage.getItem('reportData')
	);
	//console.log(dateReported, reportID, sectorDetails);
	//getting the whole report data details
	let reportData = JSON.parse(localStorage.getItem('reportData')) || [];
	reportData = reportData.filter((userData) => userData.reportBy !== "anonymous")

	//incrementing cards
	let card = document.querySelector('.p-bottom');
	let card2 = document.querySelector('.bottom2');
	card.innerHTML = `${reportData.length}`;
	card2.innerHTML = `${reportData.length}`;

	console.log(reportData);
	let i = 1;

	reportData.forEach(function (report) {
		let newRow = document.createElement('tr');
		newRow.innerHTML = `<td>${i++}</td> 
        <td>${report.dateReported}</td> 
        <td>${report.reportID}</td>       
        <td>${report.sectorDetails}</td> 
        <td>
                <div class="table-icons">
                  <div>
                    <a class="report-button view" href="#">View</a>
                  </div>
                  <div>
                    <box-icon name='printer' type='solid'></box-icon>
                  </div>
                </div>
              </td>`;
		table.appendChild(newRow);
	});

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

	function pagination() {
		const pageSize = 3;
		let currPage = 1;

		let pageCount = Math.ceil(reportData.length / pageSize);
		console.log(reportData.length);
		console.log(pageCount);

		let prevPage = document.querySelector('#prev-button');
		let nextPage = document.querySelector('#next-button');
		console.log(prevPage, nextPage);

		let next = document.getElementsByClassName('pagination');

		document
			.querySelector('#nextButton')
			.addEventListener('click', nextPage, false);
		document
			.querySelector('#prevButton')
			.addEventListener('click', prevPage, false);
	}
	pagination();

	const selectPage = (pageNum) => {
		currPage = pageNum;
		const prevRange = pageNum * pageSize;
		const nextRange = (pageNum + 1) * pageSize;
	};
}















function dateReported() {
	let currentdate = new Date();
	let date = currentdate.getDate();
	let month = currentdate.getMonth() + 1;
	let year = currentdate.getFullYear();
	let hours = currentdate.getHours();
	let minutes = currentdate.getMinutes();
	if (month < 10) {
		month = '0' + month;
	}
	return date + '/' + month + '/' + year + ' ' + hours + ':' + minutes;
}

// function init() {
// 	if (userTable == 0) {
// 		return 'Make your first report';
// 	} else {
// 		userTable();
// 	}
// }
