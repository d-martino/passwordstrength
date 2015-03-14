document.addEventListener('DOMContentLoaded', function () {
	document.getElementById('password').addEventListener('keyup', function () {
		var password = document.getElementById('password');
		var computedStrength = strength(password.value);
		if (computedStrength >= 0 && computedStrength <=4) {
			password.className = 'red-border';
		} else if (computedStrength > 4 && computedStrength <=10) {
			password.className = 'yellow-border';
		} else if(computedStrength > 10 && computedStrength <=15){
			password.className = 'green-border';
		}
		else {
			password.className = 'blue-border';
		}
	});
});



function toggle () {
	var password = document.getElementById('password');
	password.type = document.getElementById('show').checked ? "text" : "password";
	var label = document.getElementById('label');
	label.innerHTML = document.getElementById('show').checked ? "Hide characters" : "Show characters";
}

function strength (password) {
	var strength = password.length;

	return strength;
}