document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("resumeForm") as HTMLFormElement;
    const toggleSkillsButton = document.getElementById("toggleSkills") as HTMLButtonElement;
    const skillsInput = document.getElementById("skills") as HTMLInputElement;
    const skillsPreview = document.getElementById("skillsPreview") as HTMLParagraphElement;
    const profilePicInput = document.getElementById("profilePic") as HTMLInputElement;
    const profilePicPreview = document.getElementById("profilePicPreview") as HTMLImageElement;

    toggleSkillsButton.addEventListener("click", () => {
        if (skillsInput.style.display === "none") {
            skillsInput.style.display = "block";
            toggleSkillsButton.textContent = "Hide Skills";
        } else {
            skillsInput.style.display = "none";
            toggleSkillsButton.textContent = "Show Skills";
        }
    });

    form.addEventListener("submit", (event) => {
        event.preventDefault();
        // Save form data and update resume
        const name = (document.getElementById("name") as HTMLInputElement).value;
        const email = (document.getElementById("email") as HTMLInputElement).value;
        const education = (document.getElementById("education") as HTMLInputElement).value;
        const experience = (document.getElementById("experience") as HTMLInputElement).value;
        const skills = (document.getElementById("skills") as HTMLInputElement).value;

        document.querySelector(".resume-container h1")!.textContent = name;
        document.querySelector(".resume-container p")!.textContent = email;
        document.querySelector(".resume-container section:nth-of-type(1) p")!.textContent = education;
        document.querySelector(".resume-container section:nth-of-type(2) p")!.textContent = experience;
        skillsPreview.textContent = skills;

        if (profilePicInput.files && profilePicInput.files[0]) {
            const reader = new FileReader();
            reader.onload = (e) => {
                profilePicPreview.src = e.target!.result as string;
            };
            reader.readAsDataURL(profilePicInput.files[0]);
        }
    });

    document.getElementById("editButton")?.addEventListener("click", () => {
        window.location.href = "index.html";
    });
});

document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("resumeForm") as HTMLFormElement;
    const editButton = document.getElementById("editButton") as HTMLButtonElement;
    const toggleSkillsButton = document.getElementById("toggleSkills") as HTMLButtonElement;

    // Handle form submission (Generate Resume)
    form?.addEventListener("submit", (event) => {
        event.preventDefault();

        // Get form data
        const name = (document.getElementById("name") as HTMLInputElement).value;
        const email = (document.getElementById("email") as HTMLInputElement).value;
        const education = (document.getElementById("education") as HTMLInputElement).value;
        const experience = (document.getElementById("experience") as HTMLInputElement).value;
        const skills = (document.getElementById("skills") as HTMLInputElement).value;

        // Store form data in localStorage to pass it to the resume page
        localStorage.setItem("name", name);
        localStorage.setItem("email", email);
        localStorage.setItem("education", education);
        localStorage.setItem("experience", experience);
        localStorage.setItem("skills", skills);

        // Handle profile picture (if uploaded)
        const profilePic = (document.getElementById("profilePic") as HTMLInputElement).files?.[0];
        if (profilePic) {
            const reader = new FileReader();
            reader.onload = function() {
                localStorage.setItem("profilePic", reader.result as string);
            };
            reader.readAsDataURL(profilePic);
        }

        // Redirect to resume page after submission
        window.location.href = "resume.html";
    });

    // Load data on the resume page
    if (window.location.pathname.includes("resume.html")) {
        // Populate the resume fields with the stored data
        (document.getElementById("name") as HTMLElement).textContent = localStorage.getItem("name") || '';
        (document.getElementById("email") as HTMLElement).textContent = localStorage.getItem("email") || '';
        (document.getElementById("education") as HTMLElement).textContent = localStorage.getItem("education") || '';
        (document.getElementById("experience") as HTMLElement).textContent = localStorage.getItem("experience") || '';
        (document.getElementById("skillsPreview") as HTMLElement).textContent = localStorage.getItem("skills") || '';

        const profilePicSrc = localStorage.getItem("profilePic");
        if (profilePicSrc) {
            (document.getElementById("profilePicPreview") as HTMLImageElement).src = profilePicSrc;
        }
    }

    // Handle editing the resume
    editButton?.addEventListener("click", () => {
        window.location.href = "index.html";
    });

    // Toggle skills visibility
    toggleSkillsButton?.addEventListener("click", () => {
        const skillsField = document.getElementById("skillsPreview") as HTMLParagraphElement;
        if (skillsField.style.display === "none") {
            skillsField.style.display = "block";
        } else {
            skillsField.style.display = "none";
        }
    });
});

document.addEventListener("DOMContentLoaded", () => {
    const editResumeButton = document.getElementById("editResumeButton") as HTMLButtonElement;

    // Handle the "Edit Resume" button click
    editResumeButton?.addEventListener("click", () => {
        // Redirect to the form page for editing
        window.location.href = "index.html";
    });
});


