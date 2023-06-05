window.onload = function () {
  document
    .getElementById("contact-form2")
    .addEventListener("submit", sendEmail);
  document.getElementById("contact-form").addEventListener("submit", sendEmail);
};

function sendEmail(event) {
  event.preventDefault();
  // these IDs from the previous steps
  emailjs.sendForm("service_vzdy9yj", "template_xety1he", this).then(
    function () {
            window.alert("הפרטים נשלחו בהצלחה!");
      console.log("SUCCESS!");
    },
    function (error) {
      console.log("FAILED...", error);
    }
  );
}
