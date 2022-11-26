btn = document.querySelector(".btn-25");
text = document.querySelector(".text");

btn.addEventListener("click", function() {
    $.get("https://uselessfacts.jsph.pl/random.json", function(data) {
        console.log(data.text);
        text.innerHTML = data.text;
    })
})