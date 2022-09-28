const reportForm = (e) => {
	// create an empty array to store the reports
	let reportData = JSON.parse(localStorage.getItem('reportData')) || [];
	// let currentUser = JSON.parse(localStorage.getItem("currentUser"))|| []
	let reports = {
		sectorDetails: document.getElementById('sector').value,
		agencyDetails: document.getElementById('agency').value,
		reportDetails: document.getElementById('report-org').value,
		reportInfoDetails: document.getElementById('report-info').value,
		affiliationDetails: document.getElementById('affiliation').value,
		uploadDetails: document.getElementById('upload').value,
		dateReported: dateReported(),
		reportID: Math.floor(Math.random() * Date.now()),
		// reportBy: currentUser.username 
	};

	reportData.push(reports);
	localStorage.setItem('reportData', JSON.stringify(reportData));

	sectorOutput();
	e.preventDefault();
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
	// init();
}

function dateReported() {
	let currentdate = new Date();
	return (
		currentdate.getDate() +
		'/' +
		currentdate.getMonth() +
		'/' +
		currentdate.getFullYear() +
		' ' +
		currentdate.getHours() +
		':' +
		currentdate.getMinutes()
	);
}

// function init() {
// 	if (userTable == 0) {
// 		return 'Make your first report';
// 	} else {
// 		userTable();
// 	}
// }

function pagination() {}
const pageSize = 3;
let currPage = 1;

let prevPage = document.querySelector('#prev-button');
let nextPage = document.querySelector('#next-button');

let next = document.getElementsByClassName('pagination');

document
	.querySelector('#nextButton')
	.addEventListener('click', nextPage, false);
document
	.querySelector('#prevButton')
	.addEventListener('click', previousPage, false);
