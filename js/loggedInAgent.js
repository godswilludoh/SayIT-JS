
// FOR DYNAMICALLY DISPLAYING CURRENT LOGGED IN AGENT

//local storage containing list of registered agents
let currentlyRegisteredAgent = JSON.parse(localStorage.getItem("AgentDatabase"));


// FOR GETTING AND DISPLAYING THE CURRENTLY LOGGED IN AGENT NAME
const currrentLoggedIn = document.querySelector(".forTheAgentID");
currrentLoggedIn.textContent = currentlyRegisteredAgent[0].Agent_Name;

// FOR GETTING AND DISPLAYING THE CURRENTLY LOGGED IN AGENT COMPANY NAME
const currrentLoggedInAgency = document.querySelector(".registeredAgencyName");
currrentLoggedInAgency.textContent = currentlyRegisteredAgent[0].Agency_Name;
// console.log(currrentLoggedIn);

// FOR THE AGENTS TABLE DYNAMISM
let reportData = JSON.parse(localStorage.getItem("reportData"));

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
    (info) =>
      info.sectorDetails == "VIO" ||
      info.sectorDetails == "transportation" ||
      info.sectorDetails == "vehicle inspection officer" ||
      info.reportDetails == "VIO"
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
        <td><a href="#" class="toViewMoreLinke">Click to view</a>    
        </td>
        <td>
              <select>
                <option value="select" selected>Select</option>
                <option value="view">In View</option>
                <option value="completed">Completed</option>
              </select>
        </td>
        <td><div class="forTheUpdateAndDownloadButton">
              <a href="#" class="forTheDeleteButton">Delete</a><a href="#"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" style="fill: rgba(0, 0, 0, 1)"><path d="M19 7h-1V2H6v5H5a3 3 0 0 0-3 3v7a2 2 0 0 0 2 2h2v3h12v-3h2a2 2 0 0 0 2-2v-7a3 3 0 0 0-3-3zM8 4h8v3H8V4zm0 16v-4h8v4H8zm11-8h-4v-2h4v2z"></path></svg></a>
            </div>
        </td>`;
    table.appendChild(newRow);
  });
}
