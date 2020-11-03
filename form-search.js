var button = document.querySelector(".conclusion__button");
var form = document.querySelector(".conclusion__form");

button.addEventListener("click", function () {
    form.classList.toggle("conclusion__close");
});

