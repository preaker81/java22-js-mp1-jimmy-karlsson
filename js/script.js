// Creating all elements
createElements(5, 'p', document.body); //creates p elements
createElements(1, 'div', document.body); // creates div element

const div = document.querySelector('div'); //fetches the div
createElements(3, 'ol', div); // creates ol in the div

// Styling div element
div.style.margin = '3em 10%';
div.style.border = '2px Solid Black';
div.style.width = '80%';
div.style.display = 'flex';
div.style.justifyContent = 'space-around';

const olAll = document.querySelectorAll('ol'); // fetches all ol
for (let i = 0; i < olAll.length; i++) {
    olAll[i].classList.add(`ol-${i + 1}`); // adds unique class to each ol
};


const numberTextList = ['ett', 'två', 'tre', 'fyra', 'fem', 'sex', 'sju', 'åtta', 'nio', 'tio']; 

// saves ol whit specific class to a variable
const firstList = document.querySelector('ol.ol-1');
const secondList = document.querySelector('ol.ol-2');
const thirdList = document.querySelector('ol.ol-3');

// creates li elements in specific ol
createElements(10, 'li', firstList);
createElements(10, 'li', secondList);
createElements(10, 'li', thirdList);

// First list manipulations
const firstListItems = document.querySelectorAll('ol.ol-1 > li'); // saves all child li to specific ol whit class
for (let i = 0; i < firstListItems.length; i++) {
    firstListItems[i].innerText = `${i}`;
    firstListItems[i].style.textAlign = 'center';

    if (i % 2 == 0) {
        firstListItems[i].style.background = 'black';
        firstListItems[i].style.color = 'white';
    } else if (i % 2 == 1) {
        firstListItems[i].style.background = 'white';
        firstListItems[i].style.color = 'black';
    }
    if (i == 4) {
        firstListItems[i].style.background = '#706efa';
    }
};

// Second list manipulations
const secondListItems = document.querySelectorAll('ol.ol-2 > li'); // saves all child li to specific ol whit class
let index = 9;
for (let i = 0; i < secondListItems.length; i++) {
    secondListItems[i].innerText = `${index}`;
    secondListItems[i].style.textAlign = 'center';

    if (i % 2 == 0) {
        secondListItems[i].style.background = 'black';
        secondListItems[i].style.color = 'white';
    } else if (i % 2 == 1) {
        secondListItems[i].style.background = 'white';
        secondListItems[i].style.color = 'black';
    }
    if (index == 8) {
        secondListItems[i].style.background = '#706efa';
    }
    index--;
};

// Third list manipulations
const thirdListItems = document.querySelectorAll('ol.ol-3 > li'); // saves all child li to specific ol whit class
for (let i = 0; i < thirdListItems.length; i++) {
    thirdListItems[i].innerText = `${numberTextList[i]}`;
    thirdListItems[i].style.textAlign = 'center';

    if (i % 2 == 0) {
        thirdListItems[i].style.background = 'black';
        thirdListItems[i].style.color = 'white';
    } else if (i % 2 == 1) {
        thirdListItems[i].style.background = 'white';
        thirdListItems[i].style.color = 'black';
    }
    if (i == 5) {
        thirdListItems[i].style.background = '#706efa';
    }
};

const pAll = document.querySelectorAll('p'); // fetches all p
// Styling on all P elements
for (let i = 0; i < pAll.length; i++) {
    pAll[i].innerText = `Rad ${i + 1}`;
    pAll[i].style.background = `hsl(${112 + (i * 22.5)}, 92%, 86%)`;
    pAll[i].style.textAlign = 'center';
    pAll[i].style.font = `bold ${10 * (i + 1)}px Times New Roman`;
    pAll[i].style.color = '#706efa';
    pAll[i].style.margin = `${10 + (i * i)}px 10%`;
};



// Styling on all ol elements
for (let i = 0; i < olAll.length; i++) {
    olAll[i].style.padding = '10px';
    olAll[i].style.width = '80px';
    olAll[i].style.background = '#706efa';
    olAll[i].style.listStyle = 'none';
};

/* Function for creating elements.
* amount = How many
* elementType = what element type
* target = where do you want to append it
*/
function createElements(amount, elementType, target) {
    for (let i = 0; i < amount; i++) {

        const createdElement = document.createElement(`${elementType}`);
        console.log(elementType);
        target.append(createdElement);
    }
};