// Wait for the DOM to load
document.addEventListener("DOMContentLoaded", () => {
    // Get the form element
    const form = document.getElementById("pdf");

    // Add a submit event listener to the form
    form.addEventListener("submit", (event) => {
        // event.preventDefault(); // Prevent the form from submitting

        // Access all inputs
        const name = document.getElementById("inp1").value;
        const lastName = document.getElementById("inp2").value;

        // Get selected gender
        const gender = document.querySelector('input[name="gender"]:checked')?.value;

        const dob = document.getElementById("inp4").value;
        const contact = document.getElementById("inp5").value;
        const email = document.getElementById("inp6").value;

        // Get selected education
        const education = Array.from(document.querySelectorAll('input[name="degree"]:checked'))
            .map(input => input.value);

        // Get selected language
        const language = document.getElementById("language").value;

        // Log the values to the console
        console.log("Name:", name);
        console.log("Last Name:", lastName);
        console.log("Gender:", gender);
        console.log("Date of Birth:", dob);
        console.log("Contact:", contact);
        console.log("Email:", email);
        console.log("Education:", education);
        console.log("Language:", language);

        // Access file input (if needed)
        // const files = document.getElementById("files").files;
        // console.log("Files:", files);

        // Access GitHub account (if needed)
        // const github = document.getElementById("github")?.value;
        // console.log("GitHub Account:", github);
    });
});
