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
    PRICE = 0.5;
    ACCESS = 0.5;
    PARTICIPANTS = 1;
    TYPE = "recreational";
    KEY = "";
    price.oninput = function () {
        priceValue.innerHTML = this.value;
        if (this.value == null) {
            PRICE = ""
        } else {
            PRICE = this.value.trim();

        }
    }
    access.oninput = function () {
        accessValue.innerHTML = this.value;
        ACCESS = this.value.trim();
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
                PARTICIPANTS = Math.floor(Math.random(2, 5) * 5 + 1);
                console.log(PARTICIPANTS);
                alertPopUp = document.querySelector(".catLimit");
                alertPopUp.classList.remove("hide");
                setTimeout(function () {
                    alertPopUp.classList.add("hide");
                }, 5000);
                items = document.querySelectorAll(".dropdown-item");
                // console.log(items);
                for (var i = 0; i < items.length; i++) {
                    // console.log(items[i]);
                    if (items[i].innerHTML == "Busywork" || (items[i].innerHTML == "Busywork" && dropdownToggle.innerHTML == "Busywork")) {
                        items[i].remove();
                        dropdownToggle.innerHTML = "Social";
                        TYPE = "social";
                    } if (items[i].innerHTML == "Relaxation" || (items[i].innerHTML == "Relaxation" && dropdownToggle.innerHTML == "Relaxation")) {
                        items[i].remove();
                        dropdownToggle.innerHTML == "Music";
                        TYPE = "music";
                    } if (items[i].innerHTML == "DIY" || (items[i].innerHTML == "DIY" && dropdownToggle.innerHTML == "DIY")) {
                        items[i].remove();
                        dropdownToggle.innerHTML == "Cooking";
                        TYPE = "cooking";
                    } if (items[i].innerHTML == "Charity" || (items[i].innerHTML == "Charity" && dropdownToggle.innerHTML == "Charity")) {
                        items[i].remove();
                        dropdownToggle.innerHTML == "Social";
                        TYPE = "social";
                    } if (items[i].innerHTML == "Recreational" || (items[i].innerHTML == "Recreational" && dropdownToggle.innerHTML == "Recreational")) {
                        items[i].remove();
                        dropdownToggle.innerHTML == "Social";
                        TYPE = "social";
                    } if (items[i].innerHTML == "Education" || (items[i].innerHTML == "Education" && dropdownToggle.innerHTML == "Education")) {
                        items[i].remove();
                        dropdownToggle.innerHTML == "Cooking";
                        TYPE = "cooking";
                    }
                }
                console.log(TYPE);
            }
        })
    });

    keyNum.oninput = function () {
        console.log(this.value);
        KEY = this.value;
    }

    btn.addEventListener("click", function () {
        if (KEY != "") {
            if (KEY < 1000000 || KEY > 9999999) {
                keyAlert = document.querySelector(".keyLimit");
                keyAlert.classList.remove("hide");
                setTimeout(function () {
                    keyAlert.classList.add("hide");
                }, 5000);
            } else {
                $.get("http://www.boredapi.com/api/activity/?" + "key=" + KEY, function (data) {
                    console.log(data);
                })
            }
        } else if (document.getElementById('individual').checked) {
            $.get("http://www.boredapi.com/api/activity/?" + "&participants=" + PARTICIPANTS + "&type=" + TYPE, function (data) {
                console.log(data);
            })
        } else if (document.getElementById('multiple').checked) {
            PARTICIPANTS = Math.floor(Math.random(2, 5) * 5 + 1);

            $.get("http://www.boredapi.com/api/activity/?" + "maxaccessibility=" + ACCESS + "&maxprice=" + PRICE + "&participants=" + PARTICIPANTS + "&type=" + TYPE, function (data) {
                console.log(data);
            })
        } 
    })

})



function openCloseMenu() {
    dropdown.addEventListener("click", function () {
        if (dropdown.classList.contains("open")) {
            dropdown.classList.remove("open");
        } else {
            dropdown.classList.add("open");
            dropdownMenu.addEventListener("click", function (e) {
                activity = e.target.innerHTML;
                activity.toLowerCase();
                console.log(activity.toLowerCase());
                dropdownToggle.innerHTML = activity;
                TYPE = activity.toLowerCase();
            })
        }
    });
}

