function AddStudent(){
	
	var table = document.getElementById("students");
	let row = document.createElement("tr");
	console.log(row);
	let name = document.createElement("td");
	let surname = document.createElement("td");
	let faculty = document.createElement("td");

	let _name = document.querySelector("#name");
	_name.className = "";

	let _surname = document.querySelector("#surname");
	_surname.className ="";

	let _faculty = document.querySelector("#faculty");
	_faculty.className = "";

	if(_name.value == "" ){
		_name.className = "error";
	}
	if(_surname.value ==""){
		_surname.className = "error";
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