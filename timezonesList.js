const timezoneList = new Map([
    ['Asia/Tokyo','Tokyo'],
    ['Asia/Shanghai','Shanghai'],
    ['Asia/Kolkata','Kolkata'],
    ['Europe/Berlin','Berlin'],
    ['Europe/London','London'],
    ['Europe/Rome','Rome'],
    ['America/Sao_Paulo','São Paulo'],
    ['America/New_York','New York'],
    ['America/Los_Angeles','Los Angeles']
  ]);
  
const timezoneCardColorsList = [
    {
        color: '#120d29',
        white: true
    },
    {
        color: '#071117',
        white: true
    },
    {
        color: '#060d1a',
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
        color: '#f7e58b',
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
        option.text = key;
        timezonesSelect.add(option);
    })
}