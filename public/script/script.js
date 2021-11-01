// Example starter JavaScript for disabling form submissions if there are invalid fields
(function () {
  "use strict";

  // Fetch all the forms we want to apply custom Bootstrap validation styles to
  var forms = document.querySelectorAll(".needs-validation");

  // Loop over them and prevent submission
  Array.prototype.slice.call(forms).forEach(function (form) {
    form.addEventListener(
      "submit",
      function (event) {
        if (!form.checkValidity()) {
          event.preventDefault();
          event.stopPropagation();
        }

        form.classList.add("was-validated");
      },
      false
    );
  });
})();

function FormStorage() {
  var inputName = document.getElementById("fullname");
  var inputEmail = document.getElementById("email");
  var inputPhone = document.getElementById("phone");
  var inputNationality = document.getElementById("nationality");
  var inputMessage = document.getElementById("message");

  localStorage.setItem("fullname", inputName.value);
  localStorage.setItem("email", inputEmail.value);
  localStorage.setItem("phone", inputPhone.value);
  localStorage.setItem("nationality", inputNationality.value);
  localStorage.setItem("message", inputMessage.value);
}

var dataFullname = localStorage.getItem("fullname");
var dataEmail = localStorage.getItem("email");
var dataPhone = localStorage.getItem("phone");
var dataNationality = localStorage.getItem("nationality");
var dataMessage = localStorage.getItem("message");

if (
  dataFullname !== null &&
  dataEmail !== null &&
  dataPhone !== null &&
  dataNationality !== null &&
  dataMessage !== null
) {
  var fullname = document.getElementById("disp-fullname");
  var email = document.getElementById("disp-email");
  var phone = document.getElementById("disp-phone");
  var nationality = document.getElementById("disp-nationality");
  var message = document.getElementById("disp-message");

  fullname.textContent += dataFullname;
  email.textContent += dataEmail;
  phone.textContent += dataPhone;
  nationality.textContent += dataNationality;
  message.textContent += dataMessage;
}

function DeleteStorage() {
  localStorage.removeItem("fullname");
  localStorage.removeItem("email");
  localStorage.removeItem("phone");
  localStorage.removeItem("nationality");
  localStorage.removeItem("message");
  location.href = "home.html";
}
