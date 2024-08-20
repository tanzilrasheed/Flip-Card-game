const body = document.body;


// setting 3 second countdown for showing the all the card to users before starting
let count = 3
let timer3 = document.getElementById('timer3');
let countdown = setInterval(() => {
    count--;
    timer3.innerText = count;
    if (count === 0) {
        clearInterval(countdown);
        let startText = document.querySelector('.start');
        let timerDiv = document.querySelector('.timer-div');
        startText.style.display = 'flex';
        timerDiv.style.display = 'none'
        setTimeout(() => {
            timer3.style.display = 'none'
            startText.style.display = 'none';
        }, 1000)
    }
}, 1000)


//images 

// let imgLinks = [
//     'gun.png',
//     'jace.png',
//     'jay.png',
//     'koc.png',
//     'mary.png',
//     'vasco.png',
//     'vin-jin.png',
//     'zack.png'
// ];



// image links
let imgLinks = [
    'gun.png',
    'jace.png',
    'koc.png',
    'vasco.png',
    'vin-jin.png',
    'zack.png'
];

// ids to set images
let divImageIds = ['img1', 'img2', 'img3', 'img4', 'img5', 'img6', 'img7', 'img8', 'img9', 'img10', 'img11', 'img12'];


// shuffling 'divImgeIds' to set images randomly
divImageIds.forEach((Element, index) => {
    let i = Math.floor(Math.random()*divImageIds.length);
    let k = divImageIds[index];
    divImageIds[index] = divImageIds[i];
    divImageIds[i] = k;
});



// setting images
for (let i = 0, j = 0; i < imgLinks.length; i++, j += 2) {
    document.getElementById(divImageIds[j]).src = imgLinks[i];
    document.getElementById(divImageIds[j + 1]).src = imgLinks[i];
}


// main game logics
let secondCard = false;
let lastImg;
let lastElement;
let cardInner = document.querySelectorAll('.card-inner');  // selecting all the cards
setTimeout(() => {   // using setTimeout to show the cards to user for 3 seconds
    cardInner.forEach(Element => {
        Element.style.transform = 'rotateY(0deg)'            // fliping back all the cards after 3 secconds
        Element.addEventListener("click", (eventObj) => {      // adding event listener to all card-inner class divs
            Element.style.transform = "rotateY(180deg)";       // fliping the card which is clicked
            Element.style.pointerEvents = 'none';       // setting inline-styling on the card which is clicked to make it unclickable
            if (secondCard) {                      // if the clicked card is second card
                document.documentElement.style.setProperty('--pointer-events', 'none');
                let img = Element.children[1].children[0].src;
                if (lastImg == img) {              // cehcks if first and second element are same
                    Element.style.transform += 'scale(1.2) ';    // zooming the image
                    lastElement.style.transform += 'scale(1.2)';
                    setTimeout(() => {
                        Element.style.transform = ' rotateY(180deg) scale(1)';         //zooming out to normal size
                        lastElement.style.transform = 'rotateY(180deg) scale(1)';
                        document.documentElement.style.setProperty('--pointer-events', 'auto');
                    }, 500)
                }
                else {                  // if first and second images are different
                    setTimeout(() => {
                        Element.style.transform = 'rotateY(0deg)';      // rotate back
                        lastElement.style.transform = 'rotateY(0deg)';
                        Element.style.removeProperty('pointer-events');
                        lastElement.style.removeProperty('pointer-events');
                        document.documentElement.style.setProperty('--pointer-events', 'auto');
                        
                    }, 1000)
                }
                secondCard = false;
            }
            else {
                lastElement = Element;
                lastImg = Element.children[1].children[0].src;
                secondCard = true;
            }
        });
    });
}, 3000)
console.log(document.styleSheets[0]);



