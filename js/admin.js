
const adminform = document.getElementById("admin_Form");
adminform.addEventListener('submit', (e) => {
	e.preventDefault();

const adminLoginID = document.getElementById("adminID").value;
const adminPaswrd = document.getElementById("adminpassword").value;


let AdminsLoginData = JSON.parse(localStorage.getItem("AdminsLoginData"));

//  Checking and comapring the input with the database
let checkAdmin = AdminsLoginData.some(info => info.Admin_Name == adminLoginID && info.Admin_paswrd == adminPaswrd)

if(!checkAdmin){
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

// const togglePassword = document.querySelector('#togglePassword');
//     const password = document.querySelector('#password');

//     togglePassword.addEventListener('click', function (e) {
//       // toggle the type attribute
//       const type = password.getAttribute('type') === 'password' ? 'text' : 'password';
//       password.setAttribute('type', type);
//       // toggle the eye slash icon
//       this.classList.toggle('fa-eye-slash');
//     });