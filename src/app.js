import "bootstrap";
import "./style.css";
import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
let who = ['El dragon', 'El señor de la tienda', 'Messi', 'Mi jefe'];
let action = ['se cayo en', 'se murio en', 'choco con', 'rompio'];
let what = ['mi computador', 'mi almuerzo', 'el ascensor'];
let when = ['cuando iba saliendo', 'mientras estaba corriendo', 'durante mi descanso', 'cuando veiamos el partido'];


function NumRandom(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

function GeneradorDeExcusas() {
  let ranWho = NumRandom(who);
  let ranWhat = NumRandom(what);
  let ranAction = NumRandom(action);
  let ranWhen = NumRandom(when);
  let excusa = ranWho+" "+ranAction+" "+ranWhat+" "+ranWhen;
  document.getElementById('excuse').innerHTML = excusa;
}

GeneradorDeExcusas();}