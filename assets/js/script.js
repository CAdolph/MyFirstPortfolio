(function () {
  [...document.querySelectorAll(".control")].forEach((button) => {
    button.addEventListener("click", function () {
      document.querySelector(".active-btn").classList.remove("active-btn");
      this.classList.add("active-btn");
      document.querySelector(".active").classList.remove("active");
      document.getElementById(button.dataset.id).classList.add("active");
    });
  });
  document.querySelector(".theme-btn").addEventListener("click", () => {
    document.body.classList.toggle("light-mode");
  });
})();

var buttons = document.querySelectorAll(".download-btn");

buttons.forEach(function (button) {
  button.addEventListener("click", function (event) {
    event.preventDefault();
    var fileUrl = "assets/data/test.pdf";
    var fileName = "test.pdf";

    var link = document.createElement("a");
    link.href = fileUrl;
    link.download = fileName;
    link.target = "_blank";
    link.style.display = "none";

    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  });
});

const image = document.getElementById("my-image");

image.addEventListener("mouseenter", function () {
  image.classList.add("animate");
  image.style.animation =
    "rotateZoom 4s cubic-bezier(0.4, 0.25, 0.25, 0.4) infinite";
});

image.addEventListener("mouseleave", function () {
  image.classList.remove("animate");
  image.style.animation = "";
});

function sendEmail(event) {
  event.preventDefault();
  alert(
    "Thanks for contacting me! I would love to chat with you, but JavaScript does not support email natively."
  );
}
