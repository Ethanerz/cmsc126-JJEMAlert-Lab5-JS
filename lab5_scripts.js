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

function numGen(){
        let num;
		do {
			num = "2024" + (Math.floor(Math.random() * 90000) + 10000);
		} while (students.some(s => s.studentNo === num));
		document.getElementById("snum").value = num;
		return num;
    }

function add_student() {
    const studentNo = document.getElementById("snum").value;
    const name = document.getElementById("uname").value;
    const age = Number(document.getElementById("age").value);
    const email = document.getElementById("mail").value;
    const course = document.getElementById("course").value;

    const student = new Student(studentNo, name, age, email, course);
    students.push(student);
    console.log("Student added!", students);

    document.getElementById("snum").value = "";
    document.getElementById("uname").value = "";
    document.getElementById("age").value = "";
    document.getElementById("mail").value = "";
    document.getElementById("course").selectedIndex = 0;
}

class Student {
    constructor(studentNo, name, age, email, course) {
        this.studentNo = studentNo;
        this.name = this.nameVer(name);
        this.age = this.ageVer(age);
        this.email = this.emailVer(email);
        this.course = course;
    }
    
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
    courseVer(course){
                const courses = [
            "BA Food Appreciation",
            "BA Applied Poetry of the Future",
            "BS Computer Repair Shop",
            "BS Video Gaming",
            "BS Installing and Downloading"
        ];
        if (courses.includes(course)) {
            return course;
        } else {
            console.log("Invalid course!");
        }
    }
}