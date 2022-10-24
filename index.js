let timeDisplay = document.getElementById("time");

let timezoneCards = [];

let colonsArray = [];

let colonAreVisible = true;

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

    toggleColons();
}

function toggleColons() {
    colonsArray.forEach(colon => {
        if (colonAreVisible) {
            colon.className = "colon-off";
        } else {
            colon.className = "colon";
        }
    });

    colonAreVisible = !colonAreVisible;
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
    document.getElementById("addTimezoneButton").className = "new-timezone-button-off";
    document.getElementById("myForm").className = "form-popup";
}

function closeForm() {
    document.getElementById("addTimezoneButton").className = "new-timezone-button";
    document.getElementById("myForm").className = "form-popup-off";
}

function handleOnTimezoneInfoMouseOver() {
    if (!this.isSelected) {
        this.isSelected = true;
        this.previousClass = this.classList[0];
        this.className = "timezone-info-selected";
        this.deleteButton.className = "remove-button";
    }
}

function handleOnTimezoneInfoMouseOut() {
    if (this.isSelected) {
        this.isSelected = false;
        this.className = this.previousClass;
        this.deleteButton.className = "remove-button-off";
    }
}

addEventListener('wheel', (event) => {
    if (wheelIsFree && event.wheelDeltaY < -49) {
        addTimeOffset(3600);
    } else if (wheelIsFree && event.wheelDeltaY > 49) {
        addTimeOffset(-3600);
    }
});