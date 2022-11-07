var countryArr = {};

function setCookie(cName, cValue) {
        let date = new Date();
        date.setTime(date.getTime() + (30 * 24 * 60 * 60 * 1000));
        const expires = "expires=" + date.toUTCString();
        document.cookie = cName + cValue + ";" + expires + "; path=/";
        countryArr[cName] = cValue;
}

function initCookie() {
    querySnapshot.forEach((doc) => {
        var country = doc.id;
        //Sets different starting cookies for finland. REMEMBER TO REOMOVE!
        if (country === "fin"){
            setCookie(country, "=10,10,10,30");
        } else {
            setCookie(country, "=0,0,0,0");
        }
        if (!(Object.keys(countryArr).includes(country))){
            countryArr[country] = "0,0,0,0";
        }
    })
    console.log(countryArr)
}

function rate(valtio) {
    //var maa = valtio.toString();
    var total = Number(0);
    var show = document.getElementById("show").value.toString();
    if (show.length === 0) {
        show = "0"}
        else {
            total += Number(show);
        }
    var sing = document.getElementById("sing").value.toString();
    if (sing.length === 0) {
        sing = "0"}
        else {
            total += Number(sing);
        }
    var song = document.getElementById("song").value.toString();
    if (song.length === 0) {song = "0"}
    else {
        total += Number(song);
    }
    var points = show + "," + sing + "," + song + "," + total;
    var toCook = "=" + points
    setCookie(valtio, toCook)
}

function rank() {
    var container = [];
    //Ranking by total points only for now
    const nations = document.cookie.split(";");
    nations.forEach((c) =>{
        var performer = c.split("=");
        var id = performer[0].replace(/\s/g, "");
        var points = performer[1];
        points = points.split(",");
        points = Number(points[points.length - 1]);
        container.push({"country": id, "score": points})
    })
    container = container.sort(function (a,b) {return a.score - b.score}).reverse();
    console.log(container)
}