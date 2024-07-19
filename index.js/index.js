// function sendMail(){
//     let parms={
//         name: document.getElementById("name").value,
//         email: document.getElementById("email").value,
//         subject: document.getElementById("subject").value,
//         message: document.getElementById("message").value,
//     }

//     emailjs.send("service_mvrgjxi","template_esqjoef",parms)
//     .then(alert("Email Sent!!"))
// }

function sendMail() {
    let params = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        message: document.getElementById("message").value
    };

    emailjs.send('service_mvrgjxi', 'template_esqjoef', params)
        .then(function(response) {
            console.log('SUCCESS!', response.status, response.text);
            alert('Email sent successfully!');
        })
        .catch(function(error) {
            console.log('FAILED...', error);
            alert('Email sending failed. Please try again later.');
        });

    // Optional: Clear form fields after submission
    document.getElementById("name").value = "";
    document.getElementById("email").value = "";
    document.getElementById("message").value = "";
}
