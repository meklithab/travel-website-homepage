const cityArray = [];


let arrowsLeft = document.querySelector("#left");
let arrowsRight = document.querySelector("#right");


arrowsLeft.addEventListener('click', toTheLeft)
arrowsRight.addEventListener('click', toTheRight)

function toTheRight() {


    const cityLinks = document.querySelectorAll('.city-links');
    const hovercaps = document.querySelectorAll('.hovercap');


    const lastImage = cityLinks[cityLinks.length - 1];
    const lastDesc = hovercaps[hovercaps.length - 1].textContent;


    for (let i = cityLinks.length - 1; i > 0; i--) {
        cityLinks[i].src = cityLinks[i - 1].src;
        cityLinks[i].name = cityLinks[i - 1].name;
        hovercaps[i].textContent = hovercaps[i - 1].textContent;

    }

    cityLinks[0].src = lastImage.src;
    cityLinks[0].name = lastImage.name;
    hovercaps[0].textContent = lastDesc;



}

function toTheLeft() {
    const cityLinks = document.querySelectorAll('.city-links');
    const hovercaps = document.querySelectorAll('.hovercap');

    const firstImage = cityLinks[0];
    const firstDesc = hovercaps[0].textContent;

    for (let i = 0; i < cityLinks.length - 1; i++) {
        cityLinks[i].src = cityLinks[i + 1].src;
        cityLinks[i].name = cityLinks[i + 1].name;
        hovercaps[i].textContent = hovercaps[i + 1].textContent;
    }

    cityLinks[cityLinks.length - 1].src = firstImage.src;
    cityLinks[cityLinks.length - 1].name = firstImage.name;
    hovercaps[hovercaps.length - 1].textContent = firstDesc;
}



