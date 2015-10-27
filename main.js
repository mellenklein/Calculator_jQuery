
document.addEventListener("DOMContentLoaded", function(event) {

//-----Variables----//
var num_one = $('#num_one');
var num_two = $('#num_two');
var opBox = $('#operator');
var solution = $('#solution');

var digit = $('.number');
var operators = $('.operator');
var equals = $('.equalBtn');
var clear = $('.clearBtn');
var printAnswer = document.getElementById('answer');
var x;
var y;
var operator;
var z;

digit.click(function(){
  console.log(this.value);
  if(!x && !operator){
    x = this.value;
    num_one.val(x);
  } else if(x && !operator){
      x += this.value;
      num_one.val(x);
  } else if (!y && operator) {
      y = this.value;
      num_two.val(y);
  } else if (y && operator) {
      y += this.value;
      num_two.val(y);
  } else if (z) {
      // x = z;
  }
  printAnswer.innerHTML += this.value;
});

operators.click(function() {
  if (z) {
    x = z;
    y = "";
  }
  operator = $(this).val();
  printAnswer.innerHTML += operator;
  opBox.val(operator);
});

equals.click(function(){
  z = eval(x + operator + y);
  printAnswer.innerHTML = z;
  solution.val(z);
});


$(document).on('keypress', function(event){
  console.log('keypress');
  event.preventDefault();
  if(event.keyCode === 13){
    event.preventDefault();
    z = eval(x + operator + y);
    printAnswer.innerHTML = z;
    solution.val(z);
  }
  if(event.keyCode === 32){
    event.preventDefault();
    x = "";
    y = "";
    operator = "";
    z = "";
    printAnswer.innerHTML = "";
  }

});

// $(document).on('keypress', function(event){
//   console.log('keypress');
// });


clear.click(function(){
  printAnswer.innerHTML = "";
  x = "";
  y = "";
  operator = "";
  z = "";
});


})//end of DOM content


///////---HOMEWORKREVIEW-----////////
// var numbers = Array.from(document.getElementsByClassName('numbers'));
// //to convert this obj into an array, wrap it in Array.from
// //query the dom
//
// //loop over one by one each element and set an eventListener for each digit:
// var numbers.addEventListener('click', function(){
//
// })
//

// numbers.forEach(function(element){
//   element.addEventListener('click', function(event){
//     var target = event.target;
//
//     if(!x && !operator){
//       x = value;
//     } else if (x && !operator){
//       x += value;
//     } else if (!y && operator) {
//       y = value;
//     } else if (y && operator) {
//       y += value;
//     }
//     answer.value += value;
//   });
// })
//
// operators.forEach(function(element){
//   element.addEventListener('click', function(event){
//     var value = event.target.value;
//
//
// });
