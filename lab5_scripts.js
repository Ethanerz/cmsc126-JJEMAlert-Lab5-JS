/*---STEP 2---*/
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




/*---STEP 3---*/
class Student{
    constructor(name, age, email, course){
        this.studentNo = "2024" + this.numGen();
        this.name = this.nameVer(name);
        this.age = this.ageVer(age);
        this.email = this.emailVer(email);
        this.course = this.courseVer(course);

    }
    numGen(){
        return Math.floor(Math.random()* 90000) + 10000
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
/*---STEP 3 END---*/
