var button = document.querySelector(".conclusion__button");
var form = document.querySelector(".conclusion__form");
var input_in = document.querySelector(".form__input_in");
var input_out = document.querySelector(".form__input_out");
var input_child = document.querySelector(".form__input_children");
var input_adults = document.querySelector(".form__input_adults");
var container = document.querySelector(".conclusion__form-container");

let isStorageSupport = true;
let storage = "";

try {
    storage = localStorage.getItem("login");
} catch (err) {
    isStorageSupport = false;
}

button.addEventListener("click", function (evt) {
    evt.preventDefault();
    form.classList.toggle("conclusion__form_hidden");
    container.classList.toggle("pointer-none");
});

form.addEventListener("submit", function (evt) {
    if (!input_in.value || !input_out.value || !input_child.value || !input_adults.value) {
        evt.preventDefault();
        form.classList.remove("conclusion__error");
        form.offsetWidth = form.offsetWidth;
        form.classList.add("conclusion__error");
    } else {
        if (isStorageSupport) {
            localStorage.setItem("Children", input_child.value);
            localStorage.setItem("Adults", input_adults.value);
        }
    }
});

window.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 27) {
        if (form.classList.contains("conclusion__form_visible")) {
            evt.preventDefault();
            form.classList.remove("conclusion__form_visible");
        }
    }
});

