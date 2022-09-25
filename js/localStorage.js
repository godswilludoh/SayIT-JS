// /** DOM elements **/
// const reportForm = document.getElementById('form');
// const sectorDetails = reportForm['sector'];
// const agencyDetails = reportForm['agency'];
// const companyName = reportForm['report-org'];
// const reportAffiliation = reportForm['affiliation'];
// const reportInfo = reportForm['report-info'];
// const anonReport = reportForm['anonymous'];
// const upload = reportForm['upload'];

// const reports = [];

// const addReport = (sector, agency, affiliation, anonymous, upload) => {
// 	reports.push({
// 		sector,
// 		agency,
// 	});

// 	localStorage.setItem('reports', JSON.stringify(reports));

// 	return { sector, agency };
// };

// // const createReport = () => {};

// // reports.forEach((report) => {
// // 	console.log(report);
// // });

// // reportForm.onsubmit = (e) => {
// // 	e.preventDefault();

// // 	const newReport = addReport(sectorInput.value, agencyInput.value);
// // };

const reportForm = (e) => {
	let reportData = JSON.parse(localStorage.getItem('reportData')) || [];
	let reports = {
		sectorDetails: document.getElementById('sector').value,
		agencyDetails: document.getElementById('agency').value,
		reportDetails: document.getElementById('report-org').value,
		reportInfoDetails: document.getElementById('report-info').value,
		affiliationDetails: document.getElementById('affiliation').value,
		uploadDetails: document.getElementById('upload').value,
		dateReported: dateReported(),
		reportID: Math.floor(Math.random() * Date.now()),
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
