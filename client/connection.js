// import axios from "axios";
// REGISTER FORM
document
  .getElementById("registerForm")
  .addEventListener("submit", function (e) {
    e.preventDefault();

    const formData = {
      name: this.querySelector('input[placeholder="Username"]').value,
      email: this.querySelector('input[placeholder="Email"]').value,
      password: this.querySelector('input[placeholder="Password"]').value,
    };
    const sendFormData = new FormData();
    sendFormData.append("name", formData.name);
    sendFormData.append("email", formData.email);
    sendFormData.append("password", formData.password);

    console.log("REGISTER FORM DATA:", sendFormData);

    axios
      .post("http://localhost:8000/api/v1/users/register", sendFormData)
      .then((response) => {
        console.log(response);
        alert(response.data.data.message || "Registration successful!");
      })
      .catch((error) => {
        console.error("Error during registration:", error);
        alert("Registration failed. Please try again.");
      });
  });

// LOGIN FORM
document.getElementById("loginForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const formData = {
    email: this.querySelector('input[placeholder="Email"]').value,
    password: this.querySelector('input[placeholder="Password"]').value,
  };

  console.log("LOGIN FORM DATA:", formData);
});
