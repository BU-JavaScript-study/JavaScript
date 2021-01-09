const API_KEY = "9b1d08ca7a1d10ff6d116cbf54a68f6e";
const COORDS = 'coords';

function saveCoords(coordsObj){
    localStorage.setItem(COORDS, JSON.stringify(coords));

}
function handleGeoSucces(position){
 const latitude = position.coords.latitude;
 const longitude = position.coords.longitude;
 const coordsObj = {
     latitude,
     longitude 
 };
 saveCoords(coordsObj);
}
function handleGeoError(){
    console.log('cant access geolocation');
   }
function askForCoords(){
    navigator.geolocation.getCurrentPosition(handleGeoSucces, handleGeoError);
}
function loadCoords(){
    const loadedCords = localStorage.getItem(COORDS);
    if(loadedCords === null){
        askForCoords();
    } else{
        //getweather
    }
}
function init(){
    loadCoords();
}
init();