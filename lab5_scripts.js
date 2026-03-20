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

