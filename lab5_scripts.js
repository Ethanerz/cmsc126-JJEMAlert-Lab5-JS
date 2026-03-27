const students = [];

function time_now(){
    const now = new Date();
    const options ={
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    }
    const optionsTime = {
        hour: 'numeric',
        minute: 'numeric'
    }
    document.getElementById("output").innerHTML = 'Today is ' + now.toLocaleDateString('en-US', options) + "<br>The current time is " + now.toLocaleTimeString('en-US',optionsTime);
}
/*---STEP 2 END---*/

// Error handling
function input_validation(name, age, email) {
    let is_valid = true;

    // helper function
    function set_error(field_id, message) {
        const field = document.getElementById(field_id);
        const error_id = field_id + "_error";

        // Create the error element the first time it's needed
        let error_element = document.getElementById(error_id);
        if (!error_element) {
            error_element = document.createElement("span");
            error_element.id = error_id;
            error_element.style.color      = "red";
            error_element.style.fontSize   = "0.85em";
            error_element.style.display    = "block";
            error_element.style.marginTop  = "2px";
            field.insertAdjacentElement("afterend", error_element);
        }

        if (message) {
            error_element.textContent = message;
            field.style.outline = "2px solid red";
            is_valid = false;
        } else {
            error_element.textContent = "";
            field.style.outline = "";
        }
    }

    if (name.trim() == "") {
        set_error("uname", "Name is required.");
    } else if (!name.includes(" ")) {
        set_error("uname", "Please enter both first and last name.");
    } else if (name.trim().length <= 5) {
        set_error("uname", "Name must be longer than 5 characters.");
    } else {
        set_error("uname", null);
    }

    const age_num = Number(age);
    if (age.trim() == "") {
        set_error("age", "Age is required.");
    } else if (isNaN(age_num) || !Number.isInteger(age_num)) {
        set_error("age", "Age must be a whole number.");
    } else if (age_num <= 18) {
        set_error("age", "Age must be greater than 18");
    } else if (age_num >= 99) {
        set_error("age", "Age must be less than 99.");
    }else {
        set_error("age", null);
    }

    const email_trimmed = email.trim();
    const up_email_regex = /^[^\s@]+@up\.edu\.ph$/;

    if (email_trimmed == "") {
        set_error("mail", "E-mail is required.");
    } else if (!up_email_regex.test(email_trimmed)) {
        set_error("mail", "E-mail must be a valid @up.edu.ph address.");
    } else {
        set_error("mail", null);
    }

    return is_valid;
}

function add_student() {
    const name = document.getElementById("uname").value;
    const age = document.getElementById("age").value;
    const email = document.getElementById("mail").value;
    const course = document.getElementById("course").value;
	// use Try-Catch here i guess to stop it creating a student if there's an invalid input

    if (!input_validation(name, age, email)) {
        return;
    }

    const student = new Student(name, Number(age), email, course);
    students.push(student);
    console.log("Student added!", students);
	
	//Resets the text fields and dropdown window to default after student creation
    document.getElementById("uname").value = "";
    document.getElementById("age").value = "";
    document.getElementById("mail").value = "";
    document.getElementById("course").selectedIndex = 0;
}

class Student {
    constructor(name, age, email, course) {
        this.studentNo = this.numGen();
        this.name = name
        this.age = age
        this.email = email
        this.course = course;
    }
    
	numGen(){
        let num;
		do {
			num = "2024" + (Math.floor(Math.random() * 90000) + 10000);
		} while (students.some(s => s.studentNo === num));
		return num;
	}
}

function find_student() {
    const searchId = document.getElementById("searchId").value.trim();
    const result = document.getElementById("searchResult");

    const foundStudent = students.find(student => student.studentNo === searchId);

    if (foundStudent) {
        result.innerHTML = `
            Student Number: ${foundStudent.studentNo}<br>
            Name: ${foundStudent.name}<br>
            Age: ${foundStudent.age}<br>
            E-mail: ${foundStudent.email}<br>
            Course: ${foundStudent.course}
        `;
    } else {
        result.textContent = "Student record does not exist";
    }
}

function display_list() {
    const allStudentsDiv = document.getElementById("allStudents");

    if (students.length === 0) {
        allStudentsDiv.textContent = "No student records available.";
        return;
    }

    let output = "";

    for (let i = 0; i < students.length; i++) {
        output += `
            <p>
                Student Number: ${students[i].studentNo}<br>
                Name: ${students[i].name}<br>
                Age: ${students[i].age}<br>
                E-mail: ${students[i].email}<br>
                Course: ${students[i].course}
            </p>
        `;
    }

    allStudentsDiv.innerHTML = output;
}

function close_list() {
    const allStudentsDiv = document.getElementById("allStudents");
    allStudentsDiv.innerHTML = "";
}