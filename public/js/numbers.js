trivia_ = document.querySelector(".trivia");
year_ = document.querySelector(".year");
date_ = document.querySelector(".date");
math_ = document.querySelector(".math");
facts_ = document.querySelector(".facts");

trivia_.addEventListener("click", function() {
    console.log("clicked");
    $.get("http://numbersapi.com/random/trivia", function(data) {
        facts_.innerHTML = data;
    } )
})

year_.addEventListener("click", function() {
    console.log("clicked");
    $.get("http://numbersapi.com/random/year", function(data) {
        year_.innerHTML = data;
    } )
})

date_.addEventListener("click", function() {
    console.log("clicked");
    $.get("http://numbersapi.com/random/date", function(data) {
        date_.innerHTML = data;
    } )
})

math_.addEventListener("click", function() {
    console.log("clicked");
    $.get("http://numbersapi.com/random/math", function(data) {
        math_.innerHTML = data;
    } )
})