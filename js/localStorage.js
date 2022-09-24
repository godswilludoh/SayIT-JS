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
	let reportData = {
		sectorDetails: document.getElementById('sector').value,
		agencyDetails: document.getElementById('agency').value,
		reportDetails: document.getElementById('report-org').value,
		reportInfoDetails: document.getElementById('report-info').value,
		affiliationDetails: document.getElementById('affiliation').value,
		uploadDetails: document.getElementById('upload').value,
	};
	localStorage.setItem('reportData', JSON.stringify(reportData));
	console.log(localStorage.getItem('reportData'));
	e.preventDefault();
	sectorOutput();
};

function sectorOutput() {
	let { sectorDetails } = JSON.parse(localStorage.getItem('reportData'));
	console.log(sectorDetails);
	let sectorData = document.getElementsByClassName('sector');
	sectorData.innerHTML = `<p>${sectorDetails}</p>`;
	const para = document.createElement('p');
	para.innerHTML = 'This is a paragraph';
	sectorData.appendChild(para);
}
