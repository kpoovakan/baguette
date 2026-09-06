"use strict";
// to ensure correct css styles, connect this javascript file to every html document
// if javascript isn't supported, the default "tofu" theme is used

/* url has dark mode first, with darkest to lightest

// sunshine and solarEclipse
// https://coolors.co/382d00-b19206-fcefb4-f6cd13-fae588-fdf8e1
// array has light mode first, with lightest to darkest
const sunshine = `[
    "fdf8e1",
    "fae588",
    "f6cd13"
]`;
const solarEclipse = `[
    "fcefb4",
    "b19206",
    "382d00"
]`;

// durian
// https://coolors.co/000966-ff33dd-f8ff33
// dark mode, with lightest to darkest
//4D0054 background substitute
const durian = `[
    "f8ff33",
    "ff33dd",
    "000966"
]`;

// deprecated
// https://coolors.co/182d3b-68a1b3-7cd5df-d6daff
// array has light mode first, with lightest to darkest
const pastelAll = `{
    "light": [
        "d6daff",
        "7cd5df",
        "182d3b"
    ],
    "dark": [
        "d6daff",
        "68a1b3",
        "182d3b"
    ]
}`;

// pastel
// https://coolors.co/182d3b-5d6f9e-d6daff
// light mode, with lightest to darkest
const pastel = `[
    "d6daff",
    "5d6f9e",
    "182d3b"
]`;

// tofu
// https://coolors.co/3b362b-a0b69e-d3dcd0
// dark mode, with lightest to darkest
const tofu = `[
    "d3dcd0",
    "a0b69e",
    "3b362b"
]`;

// madamoiselle
// https://coolors.co/123538-c8d4c4-f7deed
// dark mode, with lightest to darkest
const madamoiselle = `[
    "f7deed",
    "c8d4c4",
    "123538"
]`;
*/


const colorThemes = `{
    "sunshine": ["#fffcf0","#fae588","#c4a20e"],
    "solarEclipse": ["#382d00","#e4c84a","#fcefb4"],
    "durian": ["#000966","#f8ff33","#ff33dd"],
    "pastel": ["#d6daff","#5d6f9e","#182d3b"],
    "tofu": ["#3b362b","#a0b69e","#d3dcd0"],
    "madamoiselle": ["#123538","#c8d4c4","#d3b0c5"]
}`;


window.addEventListener("load", function() {
    const theme = window.localStorage.getItem("preferencesTheme");
    const colors = JSON.parse(colorThemes);

    if (theme == null || theme == undefined || theme == "") {
        return;
    }

    const array = colors[theme];
    const background = array[0];
    const accent = array[1];
    const foreground = array[2];
    const stylish = document.documentElement.style;

    stylish.setProperty("--colorBackground", background);
    stylish.setProperty("--colorForeground", foreground);
    stylish.setProperty("--colorAccent", accent);
});