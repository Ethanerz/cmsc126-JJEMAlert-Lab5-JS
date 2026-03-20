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


// Temporary Function to show added student info in console
function showStudents(){
	for (i=0; i < students.length; i++){
		console.log(students[i].studentNo)
		console.log(students[i].name)
		console.log(students[i].age)
		console.log(students[i].email)
		console.log(students[i].course)
	}
}
// Will remove in the future

function add_student() {
    const name = document.getElementById("uname").value;
    const age = Number(document.getElementById("age").value);
    const email = document.getElementById("mail").value;
    const course = document.getElementById("course").value;
	// use Try-Catch here i guess to stop it creating a student if there's an invalid input
    const student = new Student(name, age, email, course);
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
        this.name = this.nameVer(name);
        this.age = this.ageVer(age);
        this.email = this.emailVer(email);
        this.course = course;
    }
    
	numGen(){
        let num;
		do {
			num = "2024" + (Math.floor(Math.random() * 90000) + 10000);
		} while (students.some(s => s.studentNo === num));
		return num;
	}
	
	//Throw an error when Invalid user input
    nameVer(name){
         if (name.length > 5 && name.includes(" ")) {
            return name;
        } else {
            console.log("Invalid name!");
        }
    }
    ageVer(age){
         if (typeof age === "number" && age > 18 && age < 99) {
            return age;
        } else {
            console.log("Invalid age!");
        }
    }
    emailVer(email){
         if (email.endsWith("@up.edu.ph")) {
            return email;
        } else {
            console.log("Invalid email!");
        }
    }
}