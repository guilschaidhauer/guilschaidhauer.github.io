//let savedTimezones = localStorage.getItem('savedTimezones');

function loadSettings() {
    let savedTimezones = getSavedTimezones();

    for (let i=0; i<savedTimezones.length; i++) {
        createTimezoneCard(savedTimezones[i]);
    }
}

function addTimezoneToSavedTimezones(timezoneName) {
    let savedTimezones = getSavedTimezones();

    savedTimezones.push(timezoneName);

    parseAndSaveTimezonesArray(savedTimezones);
}

function removeTimezoneFromSavedTimezones(timezoneName) {
    let savedTimezones = getSavedTimezones();

    for(var i=0; i<savedTimezones.length; i++){ 
        if (savedTimezones[i] === timezoneName) { 
            savedTimezones.splice(i, 1); 
        }
    }

    parseAndSaveTimezonesArray(savedTimezones);
}

function getSavedTimezones() {
    let savedTimezonesString = localStorage.getItem('savedTimezones');
    let savedTimezones;

    if (savedTimezonesString === null) {
        savedTimezones = [];
    } else {
        savedTimezones = JSON.parse(savedTimezonesString);
    }

    return savedTimezones;
}

function parseAndSaveTimezonesArray(timezones) {
    const string = JSON.stringify(timezones);

    localStorage.setItem('savedTimezones', string);
}