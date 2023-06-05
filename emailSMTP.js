window.onload = function () {
  const form = document.getElementById("contact-form2");
  form.addEventListener("submit", function(event){sendEmail(event, form)});
  const bottomForm = document.getElementById("contact-form")
  bottomForm.addEventListener("submit", function(event){sendEmail(event, bottomForm)});
};

function sendEmail(event, form) {
  event.preventDefault();
  // these IDs from the previous steps
  emailjs.sendForm("service_vzdy9yj", "template_xety1he", this).then(
    function () {
      form.reset();
      window.alert("הפרטים נשלחו בהצלחה!");
      console.log("SUCCESS!");
    },
    function (error) {
      console.log("FAILED...", error);
    }
  );
}
