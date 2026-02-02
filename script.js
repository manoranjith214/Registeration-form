function validateForm() {
   
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const mobile = document.getElementById('mobile').value.trim();


    if (name === "" || email === "" || mobile === "") {
        alert("All text fields (Name, Email, and Mobile) must be filled out.");
        return false; 
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        alert("Please enter a valid email address (e.g., username@example.com).");
        return false;
    }

 
    const mobilePattern = /^[0-9]{10}$/;
    if (!mobilePattern.test(mobile)) {
        alert("Mobile number must be exactly 10 digits and contain no letters/symbols.");
        return false;
    }


    alert("Form submitted successfully!");
    return true;
}