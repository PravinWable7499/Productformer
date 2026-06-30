const form =
document.getElementById(
    "registerForm"
);

const message =
document.getElementById(
    "message"
);

form.addEventListener(
"submit",
async function(e){

    e.preventDefault();

    const form = document.getElementById("registerForm");

    const data = {
        name: form.fullname.value,
        mobile: form.mobile.value,
        email: form.email.value,
        college: form.college.value,
        course: form.course.value
    };

    try{

        const response =
        await fetch(
        "https://script.google.com/macros/s/AKfycbyd4XSiwV4x0nL1pTLb5rSgJdSHE4aeiRHlPWDF87FkR4cTjO_p2RDtVD9Ksaci_B7n8g/exec",
        {
            method:"POST",
            body:JSON.stringify(data)
        });

        // message.innerHTML =
        // "✅ Registration Successful";

        alert(
            "✅ Registration Submitted Successfully!"
            );

            document
            .getElementById(
            "registerForm"
            ).reset();

        message.style.color =
        "green";

        form.reset();

    }
    catch(error){

        message.innerHTML =
        "❌ Registration Failed";

        message.style.color =
        "red";
    }

});