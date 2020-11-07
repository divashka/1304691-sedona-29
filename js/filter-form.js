var filter_button = document.querySelector(".filters__button");
var filter_form = document.querySelector(".filters__form");
var price = document.querySelector(".price__controls");
var min_input = document.querySelector(".price__input_min");
var max_input = document.querySelector(".price__input_max");
var checkbox = document.querySelector(".filters__checkbox");

filter_form.addEventListener("submit", function (evt) {
    if (!min_input.value || !max_input.value || !checkbox) {
        evt.preventDefault();
        price.classList.remove("price__controls_error");
        price.offsetWidth = price.offsetWidth;
        price.classList.add("price__controls_error");
    }
})