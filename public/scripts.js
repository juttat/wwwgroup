//import querySnapshot from './index.js';

var countryArr = {};

function setCookie() {
    querySnapshot.forEach((doc) => {
        //document.cookie = doc.id + "=0,0,0"
        let date = new Date();
        date.setTime(date.getTime() + (30 * 24 * 60 * 60 * 1000));
        const expires = "expires=" + date.toUTCString();
        document.cookie = doc.id + "=0,0,0; " + expires + "; path=/";
        var country = doc.id;
        if (!(Object.keys(countryArr).includes(country))){
            countryArr[country] = "0,0,0";
            //countryArr.push(doc.id: "0,0,0");
        }
    })
    console.log(countryArr)
}

function setCookie(cName, cValue, expDays) {
    let date = new Date();
        date.setTime(date.getTime() + (30 * 24 * 60 * 60 * 1000));
        const expires = "expires=" + date.toUTCString();
        document.cookie = doc.id + "=0,0,0; " + expires + "; path=/";
        var country = doc.id;
        if (!(Object.keys(countryArr).includes(country))){
            countryArr[country] = "0,0,0";
            //countryArr.push(doc.id: "0,0,0");
        }
}

function rate() {
    var show = document.getElementById("show").value.toString();
    var sing = document.getElementById("sing").value.toString();
    var song = document.getElementById("song").value.toString();

    var points = show + "," + sing + "," + song;
    var toCook = "=" + points
    console.log(points)
    countryArr.den = points;
    console.log(countryArr)
    document.cookie = den + toCook 
}