// - Index -

// Navigation bar
function navBar() {
        var nav = '<div class="navGroup"><h1 class="navTitle">Portfolio</h1>'; // Portfolio Title
        nav += '<a class="navButton navItems" href="index.html">Home</a>'; // Home
        nav += '<a class="navButton navItems" href="portfolio.html">Portfolio</a>'; // Portfolio
        nav += '<a class="navButton navItems" href="contactme.html">Contact Me</a></div>'; // Contact Me
        return nav;
}

document.getElementById("navBar").innerHTML = navBar();

// Footer
function footer(){
    var foot = '<a class="navButton" href="https://github.com/Hamza2702"><img id="githubIcon" src="images/github.png" alt="GitHub" width="50"></a>'; // GitHub
    foot += '<a class="navButton" href="https://www.linkedin.com/in/hamza-khan-108635292/"><img id="linkedinIcon" src="images/linkedIn.png" alt="LinkedIn" width="50"></a>'; // LinkedIn
    return foot;
}

document.getElementById("footerBar").innerHTML = footer();

// Get current age
function getAge(){
    var dob = new Date("12/27/2002"); // My Date of Birth
    var today = new Date();
    var age = today.getFullYear() - dob.getFullYear();
    var m = today.getMonth() - dob.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < dob.getDate())) {
        age--;
    }
    return "<u>" + age + "</u> year old programmer."; // Return title message.
}

if(document.URL.includes("index.html")){ // Only on the index page, to stop errors on other pages.
    document.getElementById("age").innerHTML = getAge();
}

// - Contact me -

function validateForm(){ // Validate Form
    if (!checkEmails()){ // Validate emails
        alert("Emails must match.")
        return false;
    }

    if (!checkDate()){ // Validate Date
        alert("Date must be in the future")
        return false;
    }

    if (!checkDuration()){ // Validate Duration
        alert("Appointment duration must be valid.")
        return false;
    }

    showPopup(); // Show Pop up
    return false;
}

function checkEmails(){ // Check Emails
    let email1 = document.getElementById('form-email1').value;
    let email2 = document.getElementById('form-email2').value;

    if (email1 == "" || email2 == ""){ // If Empty
        return false;
    }
    return email1 === email2; // If equal.
} 

function checkDate(){ // Check Date
    let projectDate = new Date(document.getElementById('form-date').value);
    let currentDate = new Date();
    currentDate.setDate(currentDate.getDate() + 1); // 1 day into the future

    return projectDate >= currentDate; // If it's in the future

}

function checkDuration(){ // Check Duration
    let projectDuration = document.getElementById('form-duration').value;
    return projectDuration > 0; // If the duration is more than a day.
}

function showPopup(){
    // Get user values of everything
    let firstName = document.getElementById('form-name').value;
    let date = document.getElementById('form-date').value;
    let desc = document.getElementById('form-description').value;
    let duration = document.getElementById('form-duration').value;
    let email = document.getElementById('form-email1').value; 
    let number = document.getElementById('form-phone').value;
    let contactpref = document.getElementById('form-contact').value;

    let confirmationMessage = `Thank you for your enquiry.\n\n`; // Pop up message
    confirmationMessage += `Name: ${firstName}\n`;
    confirmationMessage += `Date: ${date}\n`;
    confirmationMessage += `Duration: ${duration} days\n`;
    confirmationMessage += `Description: ${desc}\n`;
    confirmationMessage += `Email: ${email}\n`;
    confirmationMessage += `Number: ${number}\n`;
    confirmationMessage += `Contact Preference: ${contactpref}\n\n`;
    confirmationMessage += `Is this correct?`;

    if (window.confirm(confirmationMessage)){
        alert("Submission sent to 230114030@aston.ac.uk"); // Aston Email Address
        document.getElementById('form').reset(); // Reset form
    }
}

    /* REFERENCES

    Icons - 
    Java Icon referenced from cdn-icons-png.flaticon.com
    Python Icon Referenced from cdn.freebiesupply.com
    C# Icon referenced from static-00.iconduck.com 
    JavaScript Icon referenced from banner2.cleanpng.com
    Lua Icon referenced from download.logo.wine
    PHP Icon referenced from banner2.cleanpng.com

    Github Icon referenced from cdn-icons.png.flaticon.com
    LinkedIn Icon referenced from image.similarpng.com

    Backgrounds from Licensed Adobe Stock Images.
    */