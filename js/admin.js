
const adminform = document.getElementById("admin_Form");
adminform.addEventListener('submit', (e) => {
	e.preventDefault();

const adminLoginID = document.getElementById("adminID").value;
const adminPaswrd = document.getElementById("adminpassword").value;


let AdminsLoginData = JSON.parse(localStorage.getItem("AdminsLoginData"));

// 2) Checking and comapring the input with the database
let checkAgent = agentsData.some(info => info.Agent_ID == agentID && info.Agent_Login_Password == agentpassword)
// alert(JSON.stringify(checkAgent));

if(!checkAgent){
	alert("Unrecognised Login");
}
else{
	window.location.href = "adminDashboard.html";
}
});

// ADMINS INFO TO BE STORED ON LOCAL STORAGE
let AdminsInfo = [
    {
        Admin_Name: "Godswill-Admin001",
        Admin_paswrd: "TechStars001",
    },
    {
        Admin_Name: "Theodora-Admin002",
        Admin_paswrd: "TechStars002",
    },
    {
        Admin_Name: "Ahmed-Admin003",
        Admin_paswrd: "TechStars003",
    },
    {
        Admin_Name: "Samuel-Admin004",
        Admin_paswrd: "TechStars004",
    },
    {
        Admin_Name: "Marvel-Admin005",
        Admin_paswrd: "TechStars005",
    },
    {
        Admin_Name: "Abbas-Admin006",
        Admin_paswrd: "TechStars006",
    },
];
localStorage.setItem("AdminsLoginData", JSON.stringify(AdminsInfo));
// AdminsInfo.push(AdminsLoginData)