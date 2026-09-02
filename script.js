// ================================
// PORTFOLIO JAVASCRIPT
// ================================

// Initialize EmailJS with your Public Key
(function () {
    emailjs.init("YOUR_PUBLIC_KEY"); // <-- replace with your EmailJS Public Key
})();

// Contact Form
const contactForm = document.getElementById("contactForm");
if (contactForm) {
    contactForm.addEventListener("submit", function(event) {
        event.preventDefault();

        const name =
            document.getElementById("name").value;
        const email =
            document.getElementById("email").value;
        const subject =
            document.getElementById("subject").value;
        const message =
            document.getElementById("message").value;

        if (
            name === "" ||
            email === "" ||
            subject === "" ||
            message === ""
        ) {
            alert("Please fill in all fields.");
            return;
        }

        const submitBtn = contactForm.querySelector("button[type='submit']");
        const originalText = submitBtn.textContent;
        submitBtn.textContent = "Sending...";
        submitBtn.disabled = true;

        const templateParams = {
            from_name: name,
            from_email: email,
            subject: subject,
            message: message
        };

        emailjs.send("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", templateParams)
            .then(function () {
                alert(
                    "Thank you, " +
                    name +
                    "! Your message has been received."
                );
                contactForm.reset();
            })
            .catch(function (error) {
                console.error("EmailJS error:", error);
                alert("Sorry, something went wrong. Please try again or email me directly.");
            })
            .finally(function () {
                submitBtn.textContent = originalText;
                submitBtn.disabled = false;
            });
    });
}

// ================================
// Current Year
// ================================
const currentYear = new Date().getFullYear();
const copyright =
    document.querySelector(".copyright");
if (copyright) {
    copyright.innerHTML =
        "© " +
        currentYear +
        " MAHORO Bruce. All Rights Reserved.";
}
