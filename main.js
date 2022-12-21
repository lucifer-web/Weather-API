var inputval = document.querySelector('#cityinput')
var btn = document.querySelector('#add');
var city = document.querySelector('#cityoutput')
var descrip = document.querySelector('#description')
var temp = document.querySelector('#temp')
var wind = document.querySelector('#wind')

apik = "3045dd712ffe6e702e3245525ac7fa38"

function convertion(val) {
    return (val - 273).toFixed(2)
}

btn.addEventListener('click', function () {
    fetch('https://api.openweathermap.org/data/2.5/weather?q=' + inputval.value + '&appid=' + apik)
        .then(res => res.json())
        
        .then(data => {
            var nameval = data['name']
            var descrip = data['weather']['0']['description']
            var tempature = data['main']['temp']
            var wndspd = data['wind']['speed']
            
            city.innerHTML = `City: ${nameval}`
            temp.innerHTML = `Temperature: ${convertion(tempature)} C`
            description.innerHTML = `Conditions: ${descrip}`
            wind.innerHTML = `Wind Speed: ${wndspd} km/h`

        })
        .catch(err => alert('You entered Wrong city name'))
})

btn.addEventListener('click',function showTime() {
    var date = new Date();
    var h = date.getHours(); 
    var m = date.getMinutes(); 
    var s = date.getSeconds(); 
    var session = "am";

    if (h == 0) {
        h = 12;
    }

    if (h > 12) {
        h = h - 12;
        session = "pm";
    }

    h = (h < 10) ? "0" + h : h;
    m = (m < 10) ? "0" + m : m;
    s = (s < 10) ? "0" + s : s;

    var time = h + ":" + m + ":" + s + " " + session;
    document.getElementById("MyClockDisplay").innerText = time;
    document.getElementById("MyClockDisplay").textContent = time;

    setTimeout(showTime, 1000);

})

function showDate(){
        let newdate = new Date();
        let dt = newdate.getDate();
        let mt = newdate.getMonth();
        let yr = newdate.getFullYear();
        var date = dt+"/"+mt+"/"+yr;
        document.getElementById("MyDateDisplay").innerText = date;
        document.getElementById("MyDateDisplay").textContent = date;   
        setInterval(showDate, 1000);
}