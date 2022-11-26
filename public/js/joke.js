btn = document.querySelector(".btn-24");
joke = document.querySelector(".statement");

jokes = [];

btn.addEventListener("click", function () {
    do {
        if (jokes[jokes.length] == 1) {
            joke.innerHTML = jokes[jokes.length][0] + "<br><br>" + jokes[jokes.length][1];
        } else {
            joke.innerHTML = jokes[jokes.length]
        }
        console.log(jokes);
        break;
    } while (jokes.length > 0);
    if (jokes.length == 0) {
        $.get("https://v2.jokeapi.dev/joke/Any?amount=10", function (data) {
            console.log(data);
            d = []
            for (var i = 0; i < 10; i++) {
                if (data.jokes[i].joke != undefined) {
                    jokes.push(data.jokes[i].joke)
                    console.log(jokes);
                    break;
                } else if (data.jokes[i].setup != undefined) {
                    s = data.jokes[i].setup
                    p = data.jokes[i].delivery;
                    d.push([s,p]);
                    jokes.push(d);
                    console.log(d);
                }
            }


        })
    }

})