"use strict";
document.addEventListener("DOMContentLoaded", () => {
    var _a;
    const form = document.getElementById("resumeForm");
    const toggleSkillsButton = document.getElementById("toggleSkills");
    const skillsInput = document.getElementById("skills");
    const skillsPreview = document.getElementById("skillsPreview");
    const profilePicInput = document.getElementById("profilePic");
    const profilePicPreview = document.getElementById("profilePicPreview");
    toggleSkillsButton.addEventListener("click", () => {
        if (skillsInput.style.display === "none") {
            skillsInput.style.display = "block";
            toggleSkillsButton.textContent = "Hide Skills";
        }
        else {
            skillsInput.style.display = "none";
            toggleSkillsButton.textContent = "Show Skills";
        }
    });
    form.addEventListener("submit", (event) => {
        event.preventDefault();
        // Save form data and update resume
        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        const education = document.getElementById("education").value;
        const experience = document.getElementById("experience").value;
        const skills = document.getElementById("skills").value;
        document.querySelector(".resume-container h1").textContent = name;
        document.querySelector(".resume-container p").textContent = email;
        document.querySelector(".resume-container section:nth-of-type(1) p").textContent = education;
        document.querySelector(".resume-container section:nth-of-type(2) p").textContent = experience;
        skillsPreview.textContent = skills;
        if (profilePicInput.files && profilePicInput.files[0]) {
            const reader = new FileReader();
            reader.onload = (e) => {
                profilePicPreview.src = e.target.result;
            };
            reader.readAsDataURL(profilePicInput.files[0]);
        }
    });
    (_a = document.getElementById("editButton")) === null || _a === void 0 ? void 0 : _a.addEventListener("click", () => {
        window.location.href = "index.html";
    });
});
document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("resumeForm");
    const editButton = document.getElementById("editButton");
    const toggleSkillsButton = document.getElementById("toggleSkills");
    // Handle form submission (Generate Resume)
    form === null || form === void 0 ? void 0 : form.addEventListener("submit", (event) => {
        var _a;
        event.preventDefault();
        // Get form data
        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        const education = document.getElementById("education").value;
        const experience = document.getElementById("experience").value;
        const skills = document.getElementById("skills").value;
        // Store form data in localStorage to pass it to the resume page
        localStorage.setItem("name", name);
        localStorage.setItem("email", email);
        localStorage.setItem("education", education);
        localStorage.setItem("experience", experience);
        localStorage.setItem("skills", skills);
        // Handle profile picture (if uploaded)
        const profilePic = (_a = document.getElementById("profilePic").files) === null || _a === void 0 ? void 0 : _a[0];
        if (profilePic) {
            const reader = new FileReader();
            reader.onload = function () {
                localStorage.setItem("profilePic", reader.result);
            };
            reader.readAsDataURL(profilePic);
        }
        // Redirect to resume page after submission
        window.location.href = "resume.html";
    });
    // Load data on the resume page
    if (window.location.pathname.includes("resume.html")) {
        // Populate the resume fields with the stored data
        document.getElementById("name").textContent = localStorage.getItem("name") || '';
        document.getElementById("email").textContent = localStorage.getItem("email") || '';
        document.getElementById("education").textContent = localStorage.getItem("education") || '';
        document.getElementById("experience").textContent = localStorage.getItem("experience") || '';
        document.getElementById("skillsPreview").textContent = localStorage.getItem("skills") || '';
        const profilePicSrc = localStorage.getItem("profilePic");
        if (profilePicSrc) {
            document.getElementById("profilePicPreview").src = profilePicSrc;
        }
    }
    // Handle editing the resume
    editButton === null || editButton === void 0 ? void 0 : editButton.addEventListener("click", () => {
        window.location.href = "index.html";
    });
    // Toggle skills visibility
    toggleSkillsButton === null || toggleSkillsButton === void 0 ? void 0 : toggleSkillsButton.addEventListener("click", () => {
        const skillsField = document.getElementById("skillsPreview");
        if (skillsField.style.display === "none") {
            skillsField.style.display = "block";
        }
        else {
            skillsField.style.display = "none";
        }
    });
});
document.addEventListener("DOMContentLoaded", () => {
    const editResumeButton = document.getElementById("editResumeButton");
    // Handle the "Edit Resume" button click
    editResumeButton === null || editResumeButton === void 0 ? void 0 : editResumeButton.addEventListener("click", () => {
        // Redirect to the form page for editing
        window.location.href = "index.html";
    });
});
