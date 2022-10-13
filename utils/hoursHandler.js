function handleHoursClick() {
    this.style.display = "none";
    this.hoursInputDiv.style.display = "inline-block";
    this.hoursInputDiv.hoursDiv = this;

    this.hoursInputDiv.placeholder = this.innerHTML;
    this.hoursInputDiv.focus();
}

function handleHoursInputBlur() {
    this.style.display = "none";
    this.hoursDiv.style.display = "inline-block";
    
    if (isValidHour(this.value)) {
        updateHours(this);
    } else {
        this.placeholder = this.hoursDiv.innerHTML;
    }
}

function updateHours(div) {
    const newHour = div.value;
    const previousHour = div.hoursDiv.innerHTML;

    const hoursOffset = newHour - previousHour;

    addTimeOffset(hoursOffset * 60 * 60);
}

function isValidHour(hour) {
    return (hour >= 0 && hour <= 23 && hour != '');
}

function handleMinutesClick() {
    this.style.display = "none";
    this.minutesInputDiv.style.display = "inline-block";
    this.minutesInputDiv.minutesDiv = this;

    this.minutesInputDiv.placeholder = this.innerHTML;
    this.minutesInputDiv.focus();
}

function handleMinutesInputBlur() {
    this.style.display = "none";
    this.minutesDiv.style.display = "inline-block";
    
    if (isValidMinutes(this.value)) {
        updateMinutes(this);
    } else {
        this.placeholder = this.minuteDiv.innerHTML;
    }
}

function updateMinutes(div) {
    const newMinutes = div.value;
    const previousMinutes = div.minutesDiv.innerHTML;

    const minutesOffset = newMinutes - previousMinutes;

    addTimeOffset(minutesOffset * 60);
}

function isValidMinutes(minute) {
    return (minute >= 0 && minute <= 59 && minute != '');
}

function addTimeOffset(offsetInSeconds) {
    isLiveTime = false;
    wheelIsFree = false;

    timeOffsetInSeconds += offsetInSeconds;

    refreshTimeForAllCards();
    setTimeout(function() { 
        wheelIsFree = true; 
    }, 250);

    timeResetButton.style.display = "grid";
}

function resetTime() {
    timeOffsetInSeconds = 0;
    isLiveTime = true;
    timeResetButton.style.display = "none";
    refreshTime();
} 