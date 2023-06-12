
   
        $(document).ready(function () {
            // Function to handle the form submission
            $("form").submit(function (event) {
                event.preventDefault(); // Prevent the default form submission
                var username = $("#username").val();
                var password = $("#password").val();

                // Create the login request object
                var loginRequest = {
                    username: username,
                    password: password
                };

                // Make an AJAX POST request to the login endpoint
                $.ajax({
                    url: "http://localhost:8080/api/login",
                    type: "POST",
                    contentType: "application/json",
                    data: JSON.stringify(loginRequest),
                    success: function (response) {
                        alert("Succesfull Login " );
                        window.location.href = "../success/success-page.html";
                    },
                    error: function (xhr, textStatus, errorThrown) {
                        // Handle the error response
                        alert("Login failed: " + xhr.responseText);
                    }
                });
            });
        });
   