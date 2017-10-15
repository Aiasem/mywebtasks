function AddStudent(){
	
	var table = document.getElementById("students");
	let row = document.createElement("tr");
	console.log(row);
	let name = document.createElement("td");
	let surname = document.createElement("td");
	let faculty = document.createElement("td");

	let _name = document.querySelector("#name");
	let _surname = document.querySelector("#surname");
	
	if(document.getElementById("name").value == "" || document.getElementById("surname").value == ""){
		_name.style.border = "2px solid red";
		_surname.style.border ="2px solid red";
	}
	else{
		name.innerHTML = _name.value;
		surname.innerHTML = _surname.value;
		faculty.innerHTML = document.getElementById("faculty").value;
		
		row.appendChild(name);
		row.appendChild(surname);
		row.appendChild(faculty);
		
		table.children[0].appendChild(row);
	}
	
}
const button = document.querySelector('#addStudent');
button.addEventListener('click',function(){
	AddStudent();
});