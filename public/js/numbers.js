trivia_ = document.querySelector(".trivia");
year_ = document.querySelector(".year");
date_ = document.querySelector(".date");
math_ = document.querySelector(".math");
facts_ = document.querySelector(".facts");
input = document.querySelector(".dateNum");
submit = document.querySelector(".dateSubmit");

trivia_.addEventListener("click", function () {
    console.log("trivia");
    $.get("http://numbersapi.com/random/trivia", function (data) {
        facts_.innerHTML = data;
    })
})

year_.addEventListener("click", function () {
    console.log("year");
    $.get("http://numbersapi.com/random/year", function (data) {
        facts_.innerHTML = data;
    })
})

date_.addEventListener("click", function () {
    console.log("date");
    $.get("http://numbersapi.com/random/date", function (data) {
        facts_.innerHTML = data;
    })
})

math_.addEventListener("click", function () {
    console.log("math");
    $.get("http://numbersapi.com/random/math", function (data) {
        facts_.innerHTML = data;
    })
})

input.addEventListener("keydown", function(e) {
    if (e.keyCode == 13) {
        inputValue();
    }
})

submit.addEventListener("click", function() {
    inputValue();
})

function inputValue() {
    console.log(input.value);
    $.get("http://numbersapi.com/" + input.value, function(data) {
        facts_.innerHTML = data;
    })
}