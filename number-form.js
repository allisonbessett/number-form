// TODO: add sum and average buttons
//find sum and average functions 
//add reset button
//

//function addEvent(el, event, callback) { // Check to see if using IE5-8
//  if ('addEventListener' in el) {
//    el.addEventListener(event, callback, false);
//  } else {
//    el['e' + event + callback] = callback;
//    el[event + callback] = function () {
//      el['e' + event + callback](window.event);
//    };
//    el.attachEvent('on' + event, el[event + callback]);
//  }
//} //End of IE check

//function () {
//var form = document.getElementById('numberForm'); // get form id 
//var el, e; 
//function target(e) {
//  var el, e; 
//  if (!e) { // check to see if IE supports event 
//    e = window.event;
//  }
//  return e.target || e.srcElement;
//}


//addEvent (form, 'submit', function(e) {   //when form is submitted
//  var number = document.getElementById('number').value;
//  if (e.preventDefault) { //stops form from being sent
//  e.preventDefault();
//} else {
//  e.returnValue = false;
//} 
//});

var countMsg = document.createElement('h4'); // pg 285
var countText = document.createTextNode('Count: ');
countMsg.appendChild(countText);
document.body.appendChild(countMsg);

var submitButton = document.getElementById('submit');
submitButton.addEventListener('click', function (e) {
  var number = document.getElementById('number').value;
   countText.nodeValue += number;
  if (e.preventDefault) { //stops form from being sent
  e.preventDefault();
  } else {
  e.returnValue = false;
  }                                                     
}, false);
  
countText.nodeValue += document.getElementById('number').value;
console.log(countText);


//var updateCount .addEventListener('click', addItem, false);
//document.body.addEventListener('DOMNodeInserted', addCount, false);

//var updateForm = document.createElement('div');
//updateForm.setAttribute('id', 'form');
//var countMsg = '<div id="count"><h4>Count: <h4></div>';
// updateForm.innerHTML = countMsg;
//
//var sumMsg.innerHTML = '<div id="sum"><h4>Sum: <h4></div>';
//
//var aveMsg = '<div id="average"><h4>Average: <h4></div>';
  

//updateForm.innerHTML = countMsg;
//updateForm.innerHTML = sumMsg;
//updateForm.innerHTML = aveMsg;

//document.body.appendChild(updateForm);