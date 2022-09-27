
const adminform = document.getElementById("admin_Form");
adminform.addEventListener('submit', (e) => {
	e.preventDefault();
	window.location.href = "adminDashboard.html";
});



//LOGOUT
const logout = document.getElementById('logout');
logout.addEventListener('click', (e) => {
    e.preventDefault();
	window.location = 'loginpage.html';
});

