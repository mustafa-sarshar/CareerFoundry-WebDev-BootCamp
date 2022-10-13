// jQuery
$("#click-me").click(function() {
    alert("Button is clicked");
});

$("#myList").addClass("center");
$("#myList").append("<li>Item 1</li>");
const liEl = "<li>Item 2</li>";
$("#myList").append(liEl);
$("#myList").append(liEl);
$("#myList").append(liEl);

$("#myBox").addClass("box");
$("#myBox")
    .addClass("bright-red")
    .delay(3000)
    .removeClass("bright-red")
    .delay(3000)
    .addClass("center");
const miniBoxEl = "<div></div>";
$("#myBox").append(miniBoxEl);
$("#myBox").children(0).addClass("mini-box");
$("#myBox").click(function (evt) {
    evt.preventDefault();
    $(this).hide();
})

$("#btn-test").click(function (evt) {
    evt.preventDefault();
    $("input").each(function (idx) {
        let inputVal = $(this).val();
        let inputName = $(this).attr("name");
        if (inputVal.length < 1)
            $(this).css("color", "red");
            $(this).attr("value", `please fill this field out! ${idx+1}`);
            console.warn(idx, inputName, " is required!!!");
    })
})

// Using jQuery
$.ajax("https://yesno.wtf/api", {
    dataType: "json"
}).then(function (responseJSON) {
    console.log(responseJSON); // This is the parsed JSON response
});

// Using Fetch API
fetch("https://yesno.wtf/api").then(function(data) {
    return data.json();
}).then( function(responseJSON) {
    console.log(responseJSON);
});

// Async Functions **************************
const resultsEl = document.querySelector("#div-async__results-text");
const btnResetEl = document.querySelector("#div-async__btn-reset");
const btnPromiseMethodEl = document.querySelector("#btn-fetch-promise");
const btnAsyncAwaitMethodEl = document.querySelector("#btn-fetch-async-await");

function resetResults() {
    resultsEl.innerText = "";
}

function showResults(from, message) {
    resultsEl.innerText = `Results (${from}):\n` + message;
}

btnResetEl.addEventListener("click", (evt) => resetResults() );
btnPromiseMethodEl.addEventListener("click", (evt) => {
    // const sub = "javascript";
    // const URL = `https://www.reddit.com/r/${sub}/top/.json?limit=5`;
    const URL = "https://yesno.wtf/api";
    fetch(URL).then((response) => {
        return response.json();
    }).then((responseJSON) => {
        showResults("Promise" ,responseJSON["image"]);
        console.log(responseJSON);
    }).catch((reason) => {
        showResults("Oops!" + reason);
    })
})

btnAsyncAwaitMethodEl.addEventListener("click", async (evt) => {
    // const sub = "javascript";
    // const URL = `https://www.reddit.com/r/${sub}/top/.json?limit=5`;
    const URL = `http://httpstat.us/404`; // Will return a 404
    const headers = new Headers();
    headers.append("Accept", "application/json");
    try {
        const fetchResult = fetch(URL, { method: "GET", cache: "reload", headers: headers });
        const response = await fetchResult;
        if (response.ok) {
            const jsonData = await response.json();
            showResults("Async Await", jsonData["data"]);
            console.log(jsonData);
        } else {
            showResults("Async Await", response.statusText);
            throw Error(response.statusText);
        }
    } catch (err) {
        showResults("Async Await", err);
        throw Error(err);
    }
})