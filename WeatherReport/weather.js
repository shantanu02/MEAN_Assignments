
const srchbtn = document.getElementById("search-btn");
srchbtn.addEventListener('click', showReport);


function showReport() {
    //event.preventDefault();

    const par = document.getElementById("postCont");
    let city = document.getElementById("search-box-city").value;
    let country = document.getElementById("search-box-country").value;

    let xh = new XMLHttpRequest();
    let url = "http://api.openweathermap.org/data/2.5/weather?q=" + city + "," + country + "&appid=24060611d6b664b49a70569445952941";

    xh.open("GET", url);

    xh.onreadystatechange = function () {

        console.log(xh.readyState);
        if (xh.readyState == 4) {

            let resText = xh.responseText;
            let mj = JSON.parse(resText);
            callingfunc(mj);
        }

    }

    xh.send();
}

function callingfunc(mj) {
    let par = document.getElementById("postCont");
    let newELe = par.children[0].cloneNode(true);
    newELe.style.display = "block";
    newELe.children[0].children[1].innerHTML = mj.name;
    newELe.children[2].children[3].innerHTML = mj.coord.lon;
    newELe.children[2].children[6].innerHTML = mj.coord.lat;

    newELe.children[4].children[2].innerHTML = mj.weather[0].main;
    newELe.children[4].children[4].innerHTML = mj.weather[0].description;

    newELe.children[6].children[3].innerHTML = mj.main.temp;
    newELe.children[6].children[6].innerHTML = mj.main.pressure;
    newELe.children[6].children[9].innerHTML = mj.main.humidity;
    newELe.children[6].children[12].innerHTML = mj.main.temp_min;
    newELe.children[6].children[15].innerHTML = mj.main.temp_max;
    newELe.children[6].children[18].innerHTML = mj.wind.speed;
    newELe.children[6].children[21].innerHTML = mj.wind.deg;

    par.appendChild(newELe);

    //document.getElementById("cname").innerHTML = mj.name;
    //document.getElementById("lon").innerHTML = mj.coord.lon;
    // document.getElementById("lat").innerHTML = mj.coord.lat;
    //document.getElementById("main").innerHTML = mj.weather[0].main;
    //document.getElementById("desc").innerHTML = mj.weather[0].description;
    //document.getElementById("tempavg").innerHTML = mj.main.temp;
    //document.getElementById("press").innerHTML = mj.main.pressure;
    //document.getElementById("hum").innerHTML = mj.main.humidity;
    //document.getElementById("tempmin").innerHTML = mj.main.temp_min;
    //document.getElementById("tempmax").innerHTML = mj.main.temp_max;

    //document.getElementById("winspeed").innerHTML = mj.wind.speed;
    //document.getElementById("deg").innerHTML = mj.wind.deg;

}