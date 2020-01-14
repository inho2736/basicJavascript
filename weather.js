const API_KEY =  "43b4d504ce8cce6a9a184d9630f6982d"
const COORDS = 'coords';

const weather = document.querySelector(".js-weather");

function getWeather(lat, lng){
    //``백틱
    fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}&units=metric`
    )
    .then(function(response){
        //console.log(response);
        return response.json();
    })
    .then(function(json){        
        const temperature = json.main.temp;
        const place = json.name;        
        weather.innerText = `${temperature} @ ${place}`;
    }); 
}

function saveCoords(coordsObj){
    localStorage.setItem(COORDS, JSON.stringify(coordsObj));
}

function handleGeoSuccess(position){
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    const coordsObj = {
        // latitude : latitude,
        // longitude : longitude
        // key 와 value가 같은걸 저장할때는 아래와 같이 간단하게 바꿀수있다.
        latitude,
        longitude
    };
    saveCoords(coordsObj);
    getWeather(latitude, longitude);
}

function handleGeoError(){
    console.log(`Can't access geo location`); 
}

function askForeCoords(){
    navigator.geolocation.getCurrentPosition(handleGeoSuccess, handleGeoError);
}

function loadCoords(){
    const loadedCoords = localStorage.getItem(COORDS);
    if (loadedCoords === null){
        askForeCoords();
    } else{
        const parseCoords = JSON.parse(loadedCoords);
        getWeather(parseCoords.latitude, parseCoords.longitude);
    }
}

function init(){
    loadCoords();
}
init();