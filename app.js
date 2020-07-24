

// CHAPTER 38-42


// TASK 01

//     Write a custom function power ( a, b ), to calculate the value of
// a raised to b.


// var a = 9;
// var b = 2;
// var h = power(a, b)
// console.log(h)
// function power(x, y) {
//     var z = x;
//     for (i = 1; i < y; i++) {
//         x = x * z;
//     }
//     return x;
// }




// TASK 02


//     Any year is entered through the keyboard. Write a function to
// determine whether the year is a leap year or not.


// var year = +prompt("Enter the year");
// if(year % 4 === 0){
//     alert("This is the leap year")
// }else{
//     alert("This is not a leap year");
// }


// TASK 03

//     If the lengths of the sides of a triangle are denoted by a, b, and c, then area of triangle is given by
// area = S(S − a)(S − b)(S − c) where, S = ( a + b + c ) / 2
// Calculate area of triangle using 2 functions


// var a = +prompt("Enter the length of the first side of triangle");
// var b = +prompt("Enter the length of the second side of triangle");
// var c = +prompt("Enter the length of the third side of triangle");
// alert("The area of this triangle is : " + result);
// var result = area(a, b, c);


// function area(x, y, z) {

//     var s = cal(x, y, z)
//     var ans = s(s - x)(s - y)(s - z);
//     return ans;
// }

// function cal(p, q, r) {
//     var t = (p + q + r) / 2;
//     return t;
// }



// TASK 04

//     . Write a function that receives marks received by a student in 3
// subjects and returns the average and percentage of these
// marks. there should be 3 functions one is the mainFunction
// and other are for average and percentage. Call those functions
// from mainFunction and display result in mainFunction


// mainFunction();

// function mainFunction() {
//     var a = +prompt("Enter the marks of first subject:");
//     var b = +prompt("Enter the marks of second subject:");
//     var c = +prompt("Enter the marks of third subject:");
//     var d = average(a, b, c);
//     var e = percentage(a, b, c);
//     alert("The average marks are"+ d);
//     alert("The percentage is "+ e);
    
// }


// function average(p, q, r) {
//     var ans = (p + q + r) / 3
//     return ans;
// }

// function percentage(x, y, z) {
//     var result = ((x + y + z) / 300) * 100
//     return result;
// }



    // TASK 05

    
    // TASK 06
    // TASK 07
    // TASK 08
    // TASK 09
    // TASK 10
