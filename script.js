// ================================
// PORTFOLIO JAVASCRIPT
// ================================


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


        alert(
            "Thank you, " +
            name +
            "! Your message has been received."
        );


        contactForm.reset();

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
