module.exports = function (){
  return {
    add: function(num1, num2) { 
         num1=num1+num2;
         console.log(num1); 
    },
    multiply: function(num1, num2) {
         num1=num1*num2;
         console.log(num1);
    },
    square: function(num) {
         num=num*num;
         console.log(num); 
    },
    random: function(num1, num2) {
        num1=Math.floor(Math.random() * num2) + num1;
        console.log(num1);
    }
  }
};