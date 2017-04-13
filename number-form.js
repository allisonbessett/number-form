var countMsg = document.createElement('h4'); // pg 285
var countText = document.createTextNode('Count: ');
countMsg.appendChild(countText);
document.body.appendChild(countMsg);

var sumMsg = document.createElement('h4');
var sumText = document.createTextNode('Sum: ');
sumMsg.appendChild(sumText);
document.body.appendChild(sumMsg);

var aveMsg = document.createElement('h4');
var aveText = document.createTextNode('Average: ');
aveMsg.appendChild(aveText);
document.body.appendChild(aveMsg);

var count = 0; 
var sum = 0; 
var avg = 0;


function updateForm() {
  countText.nodeValue = 'Count: ' + count;
  sumText.nodeValue = 'Sum: ' + sum;
  aveText.nodeValue = 'Average: ' + avg;
}

var submitButton = document.getElementById('submit');
submitButton.addEventListener('click', function (e) {
  var number = document.getElementById('number').value;
  count++;
  sum += parseInt(number, 10);
  avg = sum / count;
  updateForm();
  if (e.preventDefault) { //stops form from being sent
    e.preventDefault();
  } else {
    e.returnValue = false;
  }                                                
}, false);


var resetButton = document.getElementById('reset');
resetButton.addEventListener('click', function (e) {
  count = 0;
  sum = 0;
  avg = 0;
  updateForm();
  if (e.preventDefault) { //stops form from being sent
    e.preventDefault();
  } else {
    e.returnValue = false;
  }                                                
}, false);