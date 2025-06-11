// REGISTER FORM
document.getElementById('registerForm').addEventListener('submit', function (e) {
  e.preventDefault();

  const formData = {
    username: this.querySelector('input[placeholder="Username"]').value,
    email: this.querySelector('input[placeholder="Email"]').value,
    password: this.querySelector('input[placeholder="Password"]').value
  };

  console.log("REGISTER FORM DATA:", formData);
});

// LOGIN FORM
document.getElementById('loginForm').addEventListener('submit', function (e) {
  e.preventDefault();

  const formData = {
    email: this.querySelector('input[placeholder="Email"]').value,
    password: this.querySelector('input[placeholder="Password"]').value
  };

  console.log("LOGIN FORM DATA:", formData);
});
