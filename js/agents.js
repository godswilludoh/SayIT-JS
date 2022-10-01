const form = document.getElementById("agent-form");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  // getting agents inputed value from the form
  const agentID = document.getElementById("agentID").value;
  const agentpassword = document.getElementById("agentpassword").value;
  // NOW CHECKING IF THE LOGIN FUNCTION CORELATES WITH THAT OF THE DATABASE TO ALLOW AGENT LOGIN

  // 1) Getting the hardcoded registered database so that i can compare both inputs
  let agentsData = JSON.parse(localStorage.getItem("AgentDatabase"));

  // 2) Checking and comapring the input with the database
  let checkAgent = agentsData.some(
    (info) =>
      info.Agent_ID == agentID && info.Agent_Login_Password == agentpassword
  );
  // alert(JSON.stringify(checkAgent));

  if (!checkAgent) {
    alert("Invalid login");
  } else {
    window.location.href = "agentdashboard.html";
  }
});

//local storage containing list of registered agents
// YOU WILL BE NEEDING THEIR ID AND LOGINPASSWORD TO ACCESS THEIR DASHBOARD
let currentlyRegisteredAgent = [
  {
    Agency_Name: "Lagos State Vehicle Inspection Officers",
    Agency_Address: "gowan estate, VI, Lagos State",
    Agency_Customer_Care_Number: "08054546213",
    Agent_Name: "Funmi Bankole",
    Agent_Mail: "Bankole@gmail.com",
    Preferred_Username: "Bankole",
    Agent_Phone_Number: "080600012478",
    Gender: "female",
    Agent_ID: "#VIOFunmiBankole",
    Agent_Login_Password: "vioagency",
  },

  {
    Agency_Name: "Nigeria Police Force",
    Agency_Address: "jonathan estate, VI, Lagos State",
    Agency_Customer_Care_Number: "08054546213",
    Agent_Name: "Comrade Bayo",
    Agent_Mail: "comradebayo@gmail.com",
    Preferred_Username: "Senior Comrade",
    Agent_Phone_Number: "08033012478",
    Gender: "male",
    Agent_ID: "#NPFComradeBayo",
    Agent_Login_Password: "nigerianpoliceforce",
  },
];
localStorage.setItem("AgentDatabase", JSON.stringify(currentlyRegisteredAgent));
