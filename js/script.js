"use strict";

const inputUah = document.querySelector("#uah");
const inputUsd = document.querySelector("#usd");

inputUah.addEventListener("input", () => {
    const request = new XMLHttpRequest();

    request.open("GET", "js/current.json");
    request.setRequestHeader("Content-Type", "application/json");
    request.send();

    request.addEventListener("load", () => {
        if (request.status === 200) {
            const data = JSON.parse(request.response);
            inputUsd.value = (+inputUah.value / data.current.usd).toFixed(2);
        } else {
            inputUsd.value = "щось не так ";
        }
    });
});
