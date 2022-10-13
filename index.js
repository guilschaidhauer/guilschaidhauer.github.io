let timeDisplay = document.getElementById("time");

let timezoneCards = [];

let isLiveTime = true;

let wheelIsFree = true;

let timeOffsetInSeconds = 0;

const timeResetButton = document.getElementById("timeResetButton");

setInterval(refreshTime, 1000);

loadSettings();

function refreshTime() {
    if (isLiveTime) {
        refreshTimeForAllCards();
    }
}

function refreshTimeForAllCards() {
    for (let i=0; i<timezoneCards.length; i++) {
        refreshTimeForCard(timezoneCards[i]);
    }
}

function refreshTimeForCard(timezoneCard) {
    const date = getDateObject(timezoneCard.timezoneName);
    const hoursString = getHoursString(date);
    const minutesString = getMinutesString(date);

    const colorIndex = getColorIndex(hoursString);
    const colorObject = timezoneCardColorsList[colorIndex];

    updateTimezoneCardColor(timezoneCard, colorObject);

    getHoursDiv(timezoneCard).innerHTML = hoursString;
    getMinutesDiv(timezoneCard).innerHTML = minutesString;
    getDateDiv(timezoneCard).innerHTML = getDateString(timezoneCard.timezoneName);
}

function updateTimezoneCardColor(timezoneCard, colorObject) {
    const timezoneCardInfo =  timezoneCard.childNodes[0];

    if (!timezoneCardInfo.isSelected) {
        if (colorObject.white) {
            timezoneCardInfo.className = "timezone-info";
        } else {
            timezoneCardInfo.className = "timezone-info-dark";
        }
        timezoneCard.style.backgroundColor = colorObject.color;
    }
}

function getColorIndex(hoursString) {
    let colorIndex = hoursString - 1;

    if (colorIndex === -1) {
        colorIndex = 23;
    }

    return colorIndex;
}

function getHoursDiv(div) {
    return div.querySelector(".hours");
}

function getMinutesDiv(div) {
    return div.querySelector(".minutes");
}

function getDateDiv(div) {
    return div.querySelector(".date");
}

function addTimezoneCard() {
    const timezoneString = getTimezoneString();
    addTimezoneToSavedTimezones(timezoneString);
    createTimezoneCard(timezoneString);
}

function createTimezoneCard(timezoneName) {
    const div = createTimezoneCardDiv(timezoneName);
 
    document.getElementById('timezonesCardHolder').append(div);

    adjustTimezoneCardsWidth();

    closeForm();
    resetTime();
}

function removeTimeZoneCard(button) {
    const timezoneCard = button.parentElement.parentElement;

    for(var i=0; i<timezoneCards.length; i++){ 
        if (timezoneCards[i] === timezoneCard) { 
            timezoneCards.splice(i, 1); 
        }
    }

    removeTimezoneFromSavedTimezones(timezoneCard.timezoneName);
    timezoneCard.remove();
    adjustTimezoneCardsWidth();
}

function adjustTimezoneCardsWidth() {
    for (let i=0; i<timezoneCards.length; i++) {
        timezoneCards[i].style.width = getTimezoneCardWidth();
    }
}

function getTimezoneCardWidth() {
    return (100 / timezoneCards.length) + "%";
}

function openForm() {
    document.getElementById("addTimezoneButton").style.display = "none";
    document.getElementById("myForm").style.display = "flex";
}

function closeForm() {
    document.getElementById("addTimezoneButton").style.display = "block";
    document.getElementById("myForm").style.display = "none";
}

function handleOnTimezoneInfoMouseOver() {
    if (!this.isSelected) {
        this.isSelected = true;
        this.previousClass = this.classList[0];
        this.className = "timezone-info-selected";
        this.deleteButton.style.visibility = "visible";
    }
}

function handleOnTimezoneInfoMouseOut() {
    if (this.isSelected) {
        this.isSelected = false;
        this.className = this.previousClass;
        this.deleteButton.style.visibility = "hidden";
    }
}

addEventListener('wheel', (event) => {
    if (wheelIsFree && event.wheelDeltaY < -49) {
        addTimeOffset(3600);
    } else if (wheelIsFree && event.wheelDeltaY > 49) {
        addTimeOffset(-3600);
    }
});