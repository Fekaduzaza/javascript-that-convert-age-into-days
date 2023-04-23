function ageInDays(){
 var birthYear=prompt('what year you born?');
var ageInDayss=(2023-birthYear)*365;
var h1=document.createElement('h1');
var textAnswer=document.createTextNode('you have '+ ageInDayss + ' days old');
h1.setAttribute('id','ageIndays');
h1.appendChild(textAnswer);
document.getElementById('flex').appendChild(h1);
}

function reset(){
 document.getElementById('ageIndays').remove();
}