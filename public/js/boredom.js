container = document.querySelector(".activites");
btn = document.querySelector(".btn-11");
price = document.querySelector("#price");
priceValue = document.querySelector(".priceNum");
access = document.querySelector("#access");
accessValue = document.querySelector(".accessNum");
keyNum = document.querySelector(".form-control");

dropdown = document.querySelector(".dropdown");
dropdownToggle = document.querySelector(".dropdown-toggle");
dropdownMenu = document.querySelector(".dropdown-menu");

var PRICE, ACCESS, TYPE, KEY, PARTICIPANTS;

$(document).ready(function () {
    openCloseMenu();
    price.oninput = function () {
        priceValue.innerHTML = this.value;
        PRICE = this.value;
    }
    access.oninput = function () {
        accessValue.innerHTML = this.value;
        ACCESS = this.value;
    }

    forms = document.querySelectorAll(".form-check");
    forms.forEach(element => {
        element.addEventListener("click", function () {
            if (document.getElementById('individual').checked) {
                console.log("indiv");
                PARTICIPANTS = 1;
            }
            else if (document.getElementById('multiple').checked) {
                console.log("multi");
                PARTICIPANTS = n;
            }
        })
    });

    keyNum.oninput = function () {
        console.log(this.value);
        KEY = this.value;
    }

    btn.addEventListener("click", function () {
        $.get("http://www.boredapi.com/api/activity/?" + "maxaccessibility=" + ACCESS + "&maxprice=" + PRICE + "&participants=" + PARTICIPANTS + "&type=" + TYPE + "&key=" + KEY, function (data) {
            console.log(data);
        })
    })

})


function openCloseMenu() {
    dropdown.addEventListener("click", function () {
        if (dropdown.classList.contains("open")) {
            dropdown.classList.remove("open");
        } else {
            dropdown.classList.add("open");
            dropdownMenu.addEventListener("click", function(e) {
                activity = e.target.innerHTML;
                activity.toLowerCase();
                console.log(activity.toLowerCase());
                dropdownToggle.innerHTML = activity;
                TYPE = activity.toLowerCase();
            })
        }
    });
}

