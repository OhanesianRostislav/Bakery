document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("contact-form");
  if (!form) return;

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    emailjs.send("service_rbyka3w", "template_bj5wpan", {
      name: document.getElementById("contact-name").value,
      phone: document.getElementById("contact-phone").value,
      email: document.getElementById("contact-email").value,
    })
    .then(() => {
      alert("Заявка успішно відправлена!");
      form.reset();
    })
    .catch((error) => {
      console.error(error);
      alert("Помилка відправки");
    });
  });
});
