// FOR DYNAMICALLY DISPLAYING CURRENT LOGGED IN AGENT

//local storage containing list of registered agents
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

// FOR GETTING AND DISPLAYING THE CURRENTLY LOGGED IN USER NAME
const currrentLoggedIn = document.querySelector(".forTheAgentID");
currrentLoggedIn.textContent = currentlyRegisteredAgent[0].Agent_ID;
console.log(currrentLoggedIn);

// // FOR GETTING AND DISPLAYING THE CURRENTLY LOGGED IN USER AGENCY
// const currrentLoggedIn = document.querySelector(".forTheAgentID");
// currrentLoggedIn.textContent = currentlyRegisteredAgent[0].Agent_ID;
// console.log(currrentLoggedIn);


