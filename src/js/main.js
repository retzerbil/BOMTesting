import './../css/style.css'

const app = document.getElementById("app");

let windowWidth = window.innerWidth;
let windowHeight = window.innerHeight;
console.log("width: " + windowWidth + " height: " + windowHeight);

/*annoying code.
window.history.back();
*/

setTimeout(() => {
  alert("NU HAR TVÅ SEKUNDER PASERAT!!!");
}, 2000);

window.setInterval(()=>{
  alert("NU HAR TRE SEKUNDER PASSERAT SEDAN SENASTE ALERTEN!!!")
}, 3000);