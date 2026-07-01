// ==========================
// MOBILE MENU
// ==========================

const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", () => {

    navMenu.classList.toggle("active");

});

// Close menu when clicking a menu item

document.querySelectorAll(".nav-menu a")
.forEach(link => {

    link.addEventListener("click", () => {

        navMenu.classList.remove("active");

    });

});


// ==========================
// HERO IMAGE SLIDER
// ==========================

const slides =
document.querySelectorAll(".slide");

let currentSlide = 0;

function showSlide(){

    slides.forEach(slide => {

        slide.classList.remove("active");

    });

    slides[currentSlide]
    .classList.add("active");

}

setInterval(() => {

    currentSlide++;

    if(currentSlide >= slides.length){

        currentSlide = 0;

    }

    showSlide();

},4000);

function openModal(type){

    const modal =
    document.getElementById("popupModal");

    const title =
    document.getElementById("popupTitle");

    const body =
    document.getElementById("popupBody");


    // ==========================
    // TRAINING IMPORTANCE
    // ==========================

    if(type === "training"){

        title.innerHTML =
        "Training Importance";

        body.innerHTML = `

        <div class="popup-scroll">

            <p>
                Training is an essential process that helps
                individuals develop the knowledge, skills,
                and abilities required to perform their
                tasks effectively. It improves employee
                performance, increases productivity,
                and enhances confidence in the workplace.
            </p>

            <p>
                Regular training keeps employees updated
                with the latest technologies, industry
                standards and best practices.
            </p>

            <h3>Importance of Training</h3>

            <ul>
                <li>Improves technical and practical skills.</li>
                <li>Increases employee productivity and efficiency.</li>
                <li>Enhances job performance and work quality.</li>
                <li>Builds confidence and motivation.</li>
                <li>Reduces errors and workplace accidents.</li>
                <li>Helps employees adapt to new technologies.</li>
                <li>Improves teamwork and communication.</li>
                <li>Supports career growth and development.</li>
                <li>Increases customer satisfaction.</li>
                <li>Contributes to business success.</li>
            </ul>

            <p>
                Training benefits both employees and
                organizations by creating a skilled
                workforce capable of achieving
                business goals efficiently.
            </p>

        </div>
        `;
    }


    // ==========================
    // PRIVACY POLICY
    // ==========================

    else if(type === "privacy"){

        title.innerHTML =
        "Privacy Policy";

        body.innerHTML = `

        <div class="popup-scroll">

            <ol>

                <li>
                    <b>Acceptance of Terms</b><br>
                    By registering for or using our
                    training programs, website,
                    mobile applications or related
                    services, you agree to these
                    policies.
                </li>

                <li>
                    <b>Registration</b><br>
                    Users must provide accurate
                    and complete information.
                    False information may result
                    in cancellation.
                </li>

                <li>
                    <b>Training Services</b><br>
                    We provide training,
                    internships, workshops and
                    certification programs.
                </li>

                <li>
                    <b>Attendance & Conduct</b><br>
                    Participants must maintain
                    attendance and follow
                    professional conduct.
                </li>

                <li>
                    <b>Certificates</b><br>
                    Certificates are issued
                    after successful completion.
                </li>

                <li>
                    <b style="color:#ff0066">
                    Intellectual Property
                    </b><br>
                    All training materials,
                    software, videos,
                    presentations and documents
                    remain company property.
                </li>

                <li>
                    <b>Privacy</b><br>
                    Personal information
                    collected during registration
                    is protected.
                </li>

                <li>
                    <b>Limitation of Liability</b><br>
                    The company is not liable
                    for indirect damages.
                </li>

                <li>
                    <b>Termination</b><br>
                    Access may be suspended
                    for policy violations.
                </li>

                <li>
                    <b>Policy Review</b><br>
                    Policies will be reviewed
                    periodically and updated.
                </li>

            </ol>

        </div>
        `;
    }


    // ==========================
    // TERMS & CONDITIONS
    // ==========================

    else if(type === "terms"){

        title.innerHTML =
        "Terms & Conditions";

        body.innerHTML = `

        <div class="popup-scroll">

            <p>
                <b>Effective From:</b>
                1 July 2026
            </p>

            <h3>1. Introduction</h3>

            <p>
                These Terms govern the use of our
                IT services, software solutions,
                training programs, internships,
                certification courses, placement
                assistance and website.
            </p>

            <h3>2. Definitions</h3>

            <p>
                Company means ProductFormer.
                Student means an enrolled learner.
                Client means a purchaser of services.
                Services include software development,
                web/mobile development, cloud
                solutions, internships, training,
                consulting and support.
            </p>

            <h3>3. Eligibility</h3>

            <p>
                Training programs are open to
                students and professionals.
                Minors require guardian consent.
            </p>

            <h3>4. Training Programs</h3>

            <p>
                We offer training in:
            </p>

            <ul>
                <li>Java</li>
                <li>Python</li>
                <li>Android</li>
                <li>Full Stack Development</li>
                <li>Artificial Intelligence</li>
                <li>Machine Learning</li>
                <li>Cloud Computing</li>
                <li>IoT</li>
                <li>Software Testing</li>
                <li>DevOps</li>
                <li>UI/UX</li>
                <li>Cyber Security</li>
                <li>Data Analytics</li>
            </ul>

            <h3>5. Internship Programs</h3>

            <p>
                Interns must complete attendance,
                assignments and projects to receive
                certificates.
            </p>

            <h3>6. Fees</h3>

            <p>
                Fees must be paid as agreed.
                Registration fees are generally
                non-refundable.
            </p>

            <h3>7. Certification</h3>

            <p>
                Certificates are issued after
                successful completion,
                attendance and project evaluation.
            </p>

            <h3>8. Placement Assistance</h3>

            <p>
                Placement assistance is provided
                but employment is not guaranteed.
            </p>

            <h3>9. Intellectual Property</h3>

            <p>
                Training materials and software
                remain the property of ProductFormer.
            </p>

            <h3>10. Confidentiality</h3>

            <p>
                Both parties must protect
                confidential information.
            </p>

            <h3>11. Acceptable Use</h3>

            <p>
                Users must not misuse systems,
                copy content unlawfully or
                perform illegal activities.
            </p>

            <h3>12. Limitation of Liability</h3>

            <p>
                Liability is limited to the
                amount paid for the relevant
                service.
            </p>

            <h3>13. Governing Law</h3>

            <p>
                These Terms are governed
                by the laws of India.
            </p>

            <h3>14. Changes to Terms</h3>

            <p>
                ProductFormer may update
                these Terms at any time.
            </p>

            <h3>15. Contact</h3>

            <p>
                <b>Company:</b> ProductFormer<br>
                <b>Email:</b> info@productformer.com<br>
                <b>Location:</b> Chh. Sambhaji Nagar,
                Maharashtra, India
            </p>

            <h3>16. Policy Review</h3>

            <p>
                These Terms will be reviewed
                periodically and updated
                as required.
            </p>

            

        </div>
        `;
    }

    modal.style.display = "flex";
}


function closeModal(){

    document
    .getElementById("popupModal")
    .style.display = "none";
}