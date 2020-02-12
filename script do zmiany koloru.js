var slajd = 0;

function odjac() {
  slajd--;
  if (slajd == -1) {
    slajd = 2;
  }
  if (slajd == 2) {
    document.querySelector('body').style.background = 'red';
  }
  if (slajd == 1) {
    var bg = document.querySelector('body');
    bg.style.background = 'blue';
  }
  if (slajd == 0) {
    var bg = document.querySelector('body');
    bg.style.background = 'pink';
  }
}
function dodac() {
  slajd++;
  if (slajd == 3) {
    slajd = 0;
  }
  if (slajd == 2) {
    var bg = document.querySelector('body');
    bg.style.background = 'red';
  }
  if (slajd == 1) {
    var bg = document.querySelector('body');
    bg.style.background = 'blue';
  }
  if (slajd == 0) {
    var bg = document.querySelector('body');
    bg.style.background = 'pink';
  }
}
