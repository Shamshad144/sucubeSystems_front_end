// Handle registration form submission
document.getElementById("registrationForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form submission

    // Fetch form data
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData.entries());

    // Send data to backend for registration
    fetch("/api/register", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    })
    .then(response => response.json())
    .then(result => {
        // Display response from backend
        document.getElementById("result").textContent = result.message;
    })
    .catch(error => {
        console.error("Error:", error);
    });
});
