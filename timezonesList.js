const timezoneList = new Map([
    ['Australia/Melbourne', 'Melbourne'],
    ['Australia/Sydney', 'Sydney'],

    ['Asia/Tokyo', 'Tokyo'],
    ['Asia/Seoul', 'Seoul'],

    ['Asia/Taipei', 'Taipei'],
    ['Asia/Shanghai', 'Beijing'],
    ['Asia/Hong_Kong', 'Hong Kong'],

    ['Asia/Kolkata', 'Bangalore'],

    ['Europe/Paris', 'Paris'],
    ['Europe/Berlin', 'Walldorf'],
    ['Europe/Budapest', 'Budapest'],
    ['Europe/Madrid', 'Madrid'],
    ['Europe/Zurich', 'Zurich'],
    ['Europe/Rome', 'Rome'],

    ['Europe/London', 'London'],
    ['Europe/Dublin', 'Dublin'],

    ['America/Sao_Paulo', 'São Leopoldo'],
    ['America/Argentina/Buenos_Aires', 'Buenos Aires'],

    ['America/Manaus', 'Manaus'],

    ['America/Vancouver', 'Vancouver'],
    ['America/Toronto', 'Toronto'],
    ['America/New_York', 'New York'],

    ['America/Los_Angeles', 'Los Angeles']
  ]);
  
const timezoneCardColorsList = [
    {
        color: '#120d29',
        white: true
    },
    {
        color: '#060d1a',
        white: true
    },
    {
        color: '#071117',
        white: true
    },
    {
        color: '#061021',
        white: true
    },
    {
        color: '#0e1f33',
        white: true
    },
    {
        color: '#2d5863',
        white: true
    },
    {
        color: '#2f8991',
        white: true
    },
    {
        color: '#70b8ba',
        white: false
    },
    {
        color: '#a3ccc0',
        white: false
    },
    {
        color: '#cedbc5',
        white: false
    },
    {
        color: '#edeabb',
        white: false
    },
    {
        color: '#f5e695',
        white: false
    },
    {
        color: '#ebd980',
        white: false
    },
    {
        color: '#f7cf77',
        white: false
    },
    {
        color: '#f7c383',
        white: false
    },
    {
        color: '#f0a46e',
        white: false
    },
    {
        color: '#cc8672',
        white: true
    },
    {
        color: '#996778',
        white: true
    },
    {
        color: '#69497a',
        white: true
    },
    {
        color: '#55406e',
        white: true
    },
    {
        color: '#1b0f38',
        white: true
    },
    {
        color: '#13082e',
        white: true
    },
    {
        color: '#110c2b',
        white: true
    },
    {
        color: '#16112e',
        white: true
    }
];
  
initializeTimezoneList();

function initializeTimezoneList() {
    let timezonesSelect = document.getElementById("timezonesSelect");
  
    timezoneList.forEach (function(value, key) {
        let option = document.createElement("option");
        option.value = value;
        option.key = key;
        timezonesSelect.appendChild(option);
    });
}

function getTimezoneByValue(searchValue) {
    for (let [key, value] of timezoneList.entries()) {
      if (value === searchValue)
        return key;
    }
}