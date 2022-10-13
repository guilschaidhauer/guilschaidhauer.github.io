/**
 * Receives a timezone name and returns a date object considering the timezone offset
 * @param {*} timezoneName 
 * @returns 
 */

function getDateObject(timezoneName) {
    // Create original date "Date" object
    const originalDateString = new Date().toLocaleString("en-US", {timeZone: timezoneName}); 
    const parsedOriginalDate = Date.parse(originalDateString);
    const originalDate = new Date(parsedOriginalDate);

    if (isLiveTime) {
        return originalDate;
    }

    // Add offset to time
    const originalDateInMs = originalDate.getTime();
    const dateWithOffsetInMs = originalDateInMs + (timeOffsetInSeconds * 1000);
    const dateWithOffset = new Date(dateWithOffsetInMs);

    return dateWithOffset;
}

function getHoursString(date) {
    return date.toLocaleString("pt-BR", {hour: '2-digit'});
}

function getMinutesString(date) {
    return formatMinutesString(date.toLocaleTimeString("pt-BR", {minute: '2-digit'}));
}

function getTimezoneString() {
    return document.getElementById("timezonesSelect").value;
}

function getDateString(timezoneName) {
    return new Date().toLocaleDateString("pt-BR", {timeZone: timezoneName});
}