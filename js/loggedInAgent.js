// FOR DYNAMICALLY DISPLAYING CURRENT LOGGED IN AGENT

//local storage containing list of registered agents
let currentlyRegisteredAgent = JSON.parse(
  localStorage.getItem("agencyLoggedSession")
);


const pageReload =()=>{
  window.location.reload();
};


let currentAgencyShortHand = currentlyRegisteredAgent.Agency_shortHand;

// FOR GETTING AND DISPLAYING THE CURRENTLY LOGGED IN AGENT NAME
const currrentLoggedIn = document.querySelector(".forTheAgentID");
currrentLoggedIn.textContent = currentlyRegisteredAgent.Agent_Name;

// FOR GETTING AND DISPLAYING THE CURRENTLY LOGGED IN AGENT COMPANY NAME
const currrentLoggedInAgency = document.querySelector(".registeredAgencyName");
currrentLoggedInAgency.textContent = currentlyRegisteredAgent.Agency_Name;
// console.log(currrentLoggedIn);

// FOR THE AGENTS TABLE DYNAMISM
let reportData = JSON.parse(localStorage.getItem("reportData"));
// console.log(reportData);

// function viewModalContent(reportID){
//   let reportData = JSON.parse(localStorage.getItem("reportData"));
//   let forEachUniqueId = reportData.find((e) => e.reportID === reportID);

//   document.getElementById("uniqueReportId").innerHTML = forEachUniqueId.reportID;
// }

function agentsTable() {
  let table = document.querySelector("table");
  let headerRow = document.createElement("tr");
  headerRow.innerHTML = `<th>S/N</th>    
    <th>Date reported</th>
    <th>Report ID</th>
    <th>View Report</th>
    <th>Status</th>
    <th>Action</th>`;
  table.appendChild(headerRow);

  reportData = reportData.filter(
    (info) => info.agencyDetails === currentAgencyShortHand
  );

  //incrementing cards
  let card = document.querySelector(".theMetricItself");
  let card2 = document.querySelector(".openComplaint");

  card.innerHTML = `${reportData.length}`;
  card2.innerHTML = `${reportData.length}`;

  let i = 1;
  // WRITING INTO THE TABLE
  reportData.forEach(function (report) {
    let newRow = document.createElement("tr");
    newRow.innerHTML = `<td>${i++}</td> 
        <td>${report.dateReported}</td> 
        <td>${report.reportID}</td> 
        <td><a href="#" class="toViewMoreLinke trigger" onclick="renderModalContent(${report.reportID})")>Click to view</a>    
        </td>
        <td>
              <select>
                <option value="select" selected>Select</option>
                <option value="view">In View</option>
                <option value="completed">Completed</option>
              </select>
        </td>
        <td><div class="forTheUpdateAndDownloadButton">
              <a href="#" class="forTheDeleteButton triggerToDelete" onclick="deleteReport(${report.reportID})")">Delete</a><a href="#"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" style="fill: rgba(0, 0, 0, 1)"><path d="M19 7h-1V2H6v5H5a3 3 0 0 0-3 3v7a2 2 0 0 0 2 2h2v3h12v-3h2a2 2 0 0 0 2-2v-7a3 3 0 0 0-3-3zM8 4h8v3H8V4zm0 16v-4h8v4H8zm11-8h-4v-2h4v2z"></path></svg></a>
            </div>
        </td>`;
    table.appendChild(newRow);
  });

  // Prompt Modal
  const modal = document.querySelector(".modal");
  const trigger = document.querySelectorAll(".trigger");
  const closeButton = document.querySelector(".close-button");
 

  function toggleModal() {
    modal.classList.toggle("show-modal");
  }

  function windowOnClick(event) {
    if (event.target === modal) {
      toggleModal();
    }
  }


  // FOr rendering each report on click of the click to view
 trigger.forEach((e) => {
  e.addEventListener("click", toggleModal);
 }
 );
  closeButton.addEventListener("click", toggleModal);
  window.addEventListener("click", windowOnClick);
}


// Render function
const renderModalContent = (reportIDParam) => {
  const modalContainerInfo = reportData
    .find((e) => e.reportID === reportIDParam);
    // console.log(modalContainerInfo);
    // console.log(modalContainerInfo.reportID);

    document.getElementById("uniqueReportId").innerHTML = modalContainerInfo.reportID;
    document.getElementById("uniqueReportSource").innerHTML = modalContainerInfo.reportBy;
    document.getElementById("uniqueReportDateAndTime").innerHTML = modalContainerInfo.dateReported;
    document.getElementById("uniquecompanyAnddOrgansitaion").innerHTML = modalContainerInfo.agencyDetails;
    document.getElementById("uniquesubject").innerHTML = modalContainerInfo.reportDetails;
    document.getElementById("uniquemessage").innerHTML = modalContainerInfo.reportInfoDetails;
 
};


// delete function
const deleteReport = (reportIDParam) => {
  const deletedReport = reportData.filter((e) => e.reportID !== reportIDParam);
  localStorage.setItem("reportData", JSON.stringify(deletedReport));
  pageReload();
};