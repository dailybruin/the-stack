//Initial References
let draggableObjects;
let dropPoints;
const startButton = document.getElementById('start');
const result = document.getElementById('result');
const controls = document.querySelector('controls-container');
const dragContainer = document.querySelector('.draggable-objects');
const dropContainer = document.querySelector('.drop-points');
const data = ["Chae Campbell", "Selena Harris", "Nya Reed", "Sara Ulias", "Katie McNamara", "Emily Lee"]

let deviceType = "";
let initialX = 0, initialY = 0;
let currentElement = "";
let moveElement = false;

//touch device check
const isTouchDevice = () => {
    try {
        document.createEvent("TouchEvent");
        deviceType = "touch";
        return true;
    } catch (e) {
        deviceType = "mouse";
        return false;
    }
};

let count = 0;

//random data
const randomValueGenerator = () => {
    return data[Math.floor(Math.random() * data.length)];
};

//win game display
const stopGame = () => {
    controls.classList.remove("hide");
    startButton.classList.remove("hide");
};

//drag & drop
function dragStart(e) {
    if (isTouchDevice()) {
        initialX = e.touches[0].clientX;
        initialY = e.touches[0].clientY;
        moveElement = true;
        currentElement = e.target;
    } else {
        e.dataTransfer.setData('text', e.target.id);
    }
}

//drop target events
function dragOver(e) {
    e.preventDefault();
}

//touchscreen movement
const touchMove = (e) => {
    if (moveElement) {
        e.preventDefault();
        let newX = e.touches[0].clientX;
        let newY = e.touches[0].clientY;
        let currentSelectedElement = document.getElementById(e.target.id);
        currentSelectedElement.parentElement.style.top = currentSelectedElement.parentElement.offsetTop + (newY - initialY) + "px";
        currentSelectedElement.parentElement.style.left = currentSelectedElement.parentElement.offsetLeft + (newX - initialX) + "px";
        initialX = newX;
        initialY = newY;
    }
};

//touchscreen drop
const drop = (e) => {
    e.preventDefault();
    if (isTouchDevice()) {
        moveElement = false;
        const currentDrop = document.querySelector(`div[data-id='${e.target.id}']`);
        const currentDropBound = currentDrop.getBoundingClientRect();
        if (
            initialX >= currentDropBound.left &&
            initialX <= currentDropBound.right &&
            initialY >= currentDropBound.top &&
            initialY <= currentDropBound.bottom
        ) {
            currentDrop.classList.add("dropped");
            currentElement.classList.add("hide");
            currentDrop.innerHTML = ``;
            currentDrop.insertAdjacentHTML("afterbegin", `<img src="${currentElement.id}.png"`);
            count++;
        }
    } else {
        const data = e.dataTransfer.getData('text');
        const droppableElementData = e.target.getAttribute('data-id');
        if (draggedElementData === droppableElementData) {
            e.target.classList.add('dropped');
            draggedElement.classList.add('hide');
            draggedElement.setAttribute('draggable', false);
            e.target.innerHTML = ``;
            e.target.insertAdjacentHTML('afterbegin', `<img src="${draggedElementData}.png">`);
            count++;
        }
    }
    if (count === 3) {
        result.innerText = "You Win!";
        stopGame();
    }
};

//Creates flags and countries
const creator = () => {
    dragContainer.innerHTML = "";
    dropContainer.innerHTML = "";
    let randomData = [];
    //for string random values in array
    for (let i = 1; i <= 3; i++) {
        let randomValue = randomValueGenerator();
        if (!randomData.includes(randomValue)) {
            randomData.push(randomValue);
        } else {
            //If value already exists then decrement i by 1
            i -= 1;
        }
    }
    for (let i of randomData) {
        const photoDiv = document.createElement("div");
        photoDiv.classList.add("draggable-image");
        photoDiv.setAttribute("draggable", true);
        if (isTouchDevice()) {
            photoDiv.style.position = "absolute";
        }
        photoDiv.innerHTML = `<img src="${i}.png" id="${i}">`;
        dragContainer.appendChild(photoDiv);
    }
    //Sort the array randomly before creating country divs
    randomData = randomData.sort(() => 0.5 - Math.random());
    for (let i of randomData) {
        const songDiv = document.createElement("div");
        songDiv.innerHTML = `<div class='countries' data-id='${i}'>
      ${i.charAt(0).toUpperCase() + i.slice(1).replace("-", " ")}
      </div>
      `;
        dropContainer.appendChild(songDiv);
    }
};
//Start Game
startButton.addEventListener(
    "click",
    (startGame = async () => {
        currentElement = "";
        controls.classList.add("hide");
        startButton.classList.add("hide");
        //This will wait for creator to create the images and then move forward
        await creator();
        count = 0;
        dropPoints = document.querySelectorAll(".songs");
        draggableObjects = document.querySelectorAll(".draggable-image");
        //Events
        draggableObjects.forEach((element) => {
            element.addEventListener("dragstart", dragStart);
            //for touch screen
            element.addEventListener("touchstart", dragStart);
            element.addEventListener("touchend", drop);
            element.addEventListener("touchmove", touchMove);
        });
        dropPoints.forEach((element) => {
            element.addEventListener("dragover", dragOver);
            element.addEventListener("drop", drop);
        });
    })
);