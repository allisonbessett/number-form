// keywords to use 
// input() submit() reset() preventDefault;

function target(e) {
  if (!e) {
    e = window.event;
  }
  return e.target || e.srcElement;
}

var e = event;
function submitNumber(e) {
var elSubmit = document.getElementById('submit');
}
var el = document.getElementbyId('number');
el.addEventListener('input', submitNumber, false);
if (e.preventDefault) {
  e.preventDefault();
} else {
  e.returnValue = false;
}

var msg = '<div id="count"><h4>Count: <h4></div>';
msg += '<div id="sum"><h4>Sum: <h4></div>';
msg += '<div id="average"><h4>Average: <h4></div>';
var updateForm = document.createElement('div');
updateForm.setAttribute('id', 'form');
updateForm.innerHTML = msg;
document.body.appendChild(updateForm);