const form = document.getElementById('agent-form');
form.addEventListener('submit', (e) => {
	e.preventDefault();
	window.location = 'agentdashboard.html';
});
