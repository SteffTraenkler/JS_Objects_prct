//Lev1_2
console.log('%c Lev1_2', 'Color:darkred; font-weight:900');

// let person = {
//     nameF: 'Zaj',
//     alter: 30,
//     sagNameAlter: () => {
//         console.log('tee');
//         alert(person.nameF + `  ` + person.alter);
//     }
// }
// person.sagNameAlter()

//Lev1_4
console.log(' ');
console.log('%c Lev1_4', 'Color:darkred; font-weight:900');

let unsereHaustiere = [
    {
        tiertyp: "Katze",

        names: [
            "Gipsy",
            "Nala",
            "Dinky"
        ]
    },
    {
        tiertyp: "Hunde",
        names: [
            "Knöpfchen",
            "Pinselchen",
            "Droopy"
        ]
    }
];
console.log(unsereHaustiere[0].names[1]);
console.log(unsereHaustiere[1].names[2]);
console.log(unsereHaustiere[1].names);

unsereHaustiere[1].names.splice(0, 1, 'Balu') + unsereHaustiere[1].names.splice(1, 1, 'Snoopy') + unsereHaustiere[1].names.pop();
console.log(unsereHaustiere[1].names);

//Lev1_5
console.log(' ');
console.log('%c Lev1_5', 'Color:darkred; font-weight:900');

let unserLager = {
    schreibtisch: {
        schublade: "Hefter"
    },
    schrank: {
        "Obere Schublade": {
            Ordner1: "Dokumente",
            Ordner2: "Geheimnisse"
        },
        "Untere Schublade": "Cola"
    }
};

console.log(unserLager.schrank["Obere Schublade"].Ordner2);
console.log(unserLager.schrank["Untere Schublade"]);
console.log(unserLager.schreibtisch.schublade);

//Lev1_6
console.log(' ');
console.log('%c Lev1_6', 'Color:darkred; font-weight:900');

let myMusic = [
    {
        artist: "The Beatles",
        title: "Abbey Road",
        release_year: 1969,
        medium: ["LP", "CD", "MC", "Download"],
        gold: true
    },
    {
        artist: "Pink Floyd",
        title: "Dark Side of the Moon",
        release_year: 1978,
        medium: ["CS", "CD", "LP", "Download"],
        gold: true
    },
    {
        artist: "Led Zeppelin",
        title: "Led Zeppelin IV",
        release_year: 1971,
        medium: ["CS", "LP", "Download"],
        gold: true
    },
    {
        artist: "Metallica",
        title: "Kill ’Em All und Ride the Lightning",
        release_year: 1983,
        medium: ["LP", "CD", "MC", "Download"],
        gold: true
    },
    {
        artist: 'TheGazette',
        title: 'Beautiful Deformity',
        release_year: 2013,
        medium: ['CD only', 'MP3', 'CD+DVD'],
        gold: null
    }
];
console.log(myMusic
);
console.log('"' + myMusic[0].artist + '"');
console.log('Von ' + myMusic[1].artist + ': "' + myMusic[1].medium[3] + '"');
console.log('Von ' + myMusic[1].artist + ': ' + myMusic[1].gold);
console.log(myMusic[2].release_year + ' und ' + myMusic[3].release_year);
console.log('Von ' + myMusic[3].artist + ': "' + myMusic[3].medium[2] + '"');

console.log('%ctest', 'color:yellowgreen', myMusic[3].title.indexOf('Ride'));
console.log('Von ' + myMusic[3].artist + ' das Wort: ' + myMusic[3].title.substring(17, 22));

console.log('%ctest', 'color:yellowgreen', myMusic[2].title.indexOf('IV'));
console.log('Von ' + myMusic[2].artist + ' das Wort: ' + myMusic[2].title.substring(13, 15));

console.log('%ctest', 'color:yellowgreen', myMusic[1].artist.indexOf('Floyd'));
console.log('Von ' + myMusic[1].artist + ' das Wort: ' + myMusic[1].artist.substring(5, 10));

//Lev1_7
console.log(' ');
console.log('%c Lev1_7', 'Color:darkred; font-weight:900');

let out = document.getElementById('artists');

myMusic.forEach(e => {
    console.log(e.artist);
    console.log(e.title);
    console.log(e.medium);
    let outinner = e.artist + `<br>` + e.title + `<br>` + e.medium + `<br>`;
    out.innerHTML += `<div> ${outinner}</div><br>`;
})

//Lev1_8
console.log(' ');
console.log('%c Lev1_8', 'Color:darkred; font-weight:900');

let studentData = [
    {
        name: "Alex",
        age: 23,
        coop: false,
        address: {
            street: "Don Valley Business Park",
            city: "Toronto",
            postalCode: "ONM3C3E5"
        },
        emails: ["alex69@gmail.com", "alex123@yahoo.com"]
    },
    {
        name: "Sandra",
        age: 22,
        coop: true,
        address: {
            street: "34 Lawrence Ave",
            city: "Toronto",
            postalCode: "ONM3C0E5"
        },
        emails: ["sandra@gmail.com", "sandra@yahoo.com"]
    }
];

studentData.forEach(e => {
    console.log(e.name);
    console.log(e.coop);
    console.log(e.address.city);
    console.log(e.emails);
})

//Lev2_2
console.log(' ');
console.log('%c Lev2_2', 'Color:darkred; font-weight:900');

const singers = [
    { name: 'The Beatles', country: 'United Kingdom', period_active: { start: 1960, end: 1970 }, genre: "Rock / Pop" },
    { name: 'Elvis Presley', country: 'United States', period_active: { start: 1954, end: 1977 }, genre: "Rock and roll" },
    { name: 'Michael Jackson', country: 'United States', period_active: { start: 1964, end: 2009 }, genre: "Pop / Rock / Dance / Soul / R&B" },
    { name: 'Elton John', country: 'United Kingdom', period_active: { start: 1964, end: "present" }, genre: "Pop / Rock" },
    { name: 'Madonna', country: 'United States', period_active: { start: 1979, end: "present" }, genre: "Pop / Dance / Electronica" },
    { name: 'Led Zeppelin', country: 'United Kingdom', period_active: { start: 1968, end: 1980 }, genre: "Hard rock / Blues rock / Folk rock" },
    { name: 'Rihanna', country: 'United States', period_active: { start: 2005, end: "present" }, genre: "R&B / Pop / Dance / Hip-hop" },
    { name: 'Pink Floyd', country: 'United Kingdom', period_active: { start: 1965, end: 1996, extra: 2014 }, genre: "Progressive rock / Psychedelic rock" },
];

singers.sort((a, b) => {
    if (a.name < b.name) {
        return -1;
    } else if (a.name > b.name) {
        return 1;
    } else { return 0; }
});
console.log(singers);