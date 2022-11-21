$(document).ready(function() {
    $.get("http://www.boredapi.com/api/activity/", function(data) {
        console.log(data);
    })
})