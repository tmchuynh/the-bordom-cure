btn = document.querySelector(".btn-24");
joke = document.querySelector(".statement");

jokes = [];

btn.addEventListener("click", function () {
    $.get("https://v2.jokeapi.dev/joke/Any?amount=10", function (data) {
        console.log(data);
        d = {}
        if (data.jokes[0].setup == undefined) {
            jokes.push(data.jokes[0].joke)
            console.log(jokes);
        } else {
            s = data.jokes[0].setup
            p = data.jokes[0].delivery;
            d[s] = p;
            console.log(d);

        }

    })
})