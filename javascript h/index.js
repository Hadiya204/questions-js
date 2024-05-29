// class activity
// question:01
// let age = 20; 

// if (age >= 18) {
//     console.log('You are eligible to vote.');
// }
// else {
//     console.log('You are not eligible to vote yet.');
// }
// // question:02
// let temperature = 28; 

// if (temperature > 25) {
//     console.log("It's a hot day!");
// }
// else {
//     console.log("It's a normal day.");
// }
// // question:03
// let student_grade = +prompt("enter your score");

// if (student_grade >= 60) {
//     console.log('You passed the test!');
// }
// else {
//     console.log('You failed the test.');
// }
// // question:04
// let is_raining = true;

// if (is_raining) {
//     console.log('Remember to bring an umbrella.');
// } else {
//     console.log('Enjoy the sunny weather!');
// }
// //question:05
// let student__age = +prompt("enter your age")
// if (student__age>18) {
//     console.log("You are an adult");    
// }
// else if(student__age<18){
//     console.log("You are a minor");
// }
// //question:06
// let number = +prompt("enter the number")
// if (number > 0) {
//     console.log("The number is positive");
//     }
//  else if(number == 0){
//     console.log( "The number is negative");
// }
// else if (number < 0) {
//     console.log("The number is negative");
// }
// else{
//     console.log("all number are integers");
// }
// // class work
// // logical operation
// let score = +prompt("enter your score")
// if(score >= 80 || score >= 60){
//     console.log("you passed");
// }else{
// console.log("you failed");
// }
// let issunny = true;
// let iswarm = false;
// if (issunny && iswarm) {
//     console.log("perfect weather for outdoor activities!");
// }else{
//     console.log("may be another day.");
// }
// let israining = false;
// if(israining){
//     console.log("it's not raining. enjoy the day!");
// }else{
//     console.log("don't forget your umbrella");
// }
// let weight = +prompt("enter weight")
// let time = +prompt("enter time")
// if(weight > 300 && time <6){//weight =244 && time= 4
//     alert("come to our tryout");
// }else{
//     alert("come to our cookout"); 
// }
// let weight = +prompt("enter weight")
// let time = +prompt("enter time")
// let age = +prompt("enter age")
// let gender = +prompt("enter gender")
// if (weight > 300 || time < 6 || age > 17 || gender === "male") {
//     // 78 > 300 || 5 < 6 || 16 > 17 || male === "male"
//     alert("come to our tryout");
// }
// else{
//     alert("come to our cookout");
// }
// let weight = +prompt("enter weight")
// let time = +prompt("enter time")
// if (!(weight > 300 || time < 6 )){
//     alert("come to our tryout");
// }
// else{
//     alert("come to our cookout");
// }
// let x = 10;
// let y = 5;

// if (x > 5) {
//     if (y > 2) {
//         console.log("Both x and y are greater than their respective thresholds.");
//     } else {
//         console.log("x is greater than 5, but y is not greater than 2.");
//     }
// } else {
//     console.log("x is not greater than 5, so the inner condition is not checked.");
// }
// let temperature = 15;
// let isSunny = true;

// if(temperature > 25){
//   console.log("It's hot outside!");

//   if(isSunny){
//       console.log("Don't forget to wear sunscreen.");
//   }
//   else{
//     console.log("You might still want to wear sunscreen.");
//   }
// }
// else if(temperature >= 15 && temperature <= 25){
//     console.log("It's a pleasant day.");
//   if(isSunny){
//     console.log("Enjoy the sunshine!");
//   }
//   else{
//     console.log("Even if it's cloudy, it's still nice outside.");
// }
// }
// else{
//     console.log("It's a bit chilly.");
//     if (isSunny) {
//         console.log("Don't be fooled by the sun, it's still cool.");
//     } else {
//         console.log("It might be cloudy, so bring a jacket just in case.");
//     }
// }
//question no .1
// let city = +prompt("enter your city name");
// if (city ="karachi"){
//     console.log("welcome to city of lights");
// }
// else if (city="another city"){
// console.log("welcome to your city");
// }
// else{
//     console.log("welcome to your city");
// }
// //question no .2
// let gender = +prompt("enter your gender");
// if (gender = "male"){
//     console.log("good morning sir");
// }
// else if(gender === "female"){
// console.log("good morning ma'am");
// }
// else{
//     console.log("other");
// }
// //question no . 3
// let signals = +prompt("enter the signal")
// if (signals = "red"){
//     console.log("must stop");
// }
// else if (signals === "Yellow"){
// console.log("ready to move");
// }
// else if (signals === "Green"){
//     console.log("move now");
// }
// else{
//     console.log("move on now");
// }
// //Arrays
// var city0 = "Atlanta";
// var city1 = "Baltimore";
// var city2 = "Chicago";
// var city3 = "Denver";
// var city4 = "Los Angeles";
// var city5 = "Seattle";
// console.log("Welcome to " + city3);
// let cities = ["atlanta","baltimore","chicago","denver","los Angeles","seatle"];
// console.log(cities);
// console.log(cities[0].length);
// console.log(cities[1].length);
// let number = [1,4,3,7,8,9,11,43,67,];
// console.log(number[6].lenght);//undefined

// let info =["hadiya",21,"zari",21,"rimsha",20];
// console.log(info[1].lenght);//undefined
// let mixedArray = [1, "Bob", "Now is", true];
// console.log(mixedArray[2].lenght);
// //arrays method()
// let citiesm=["atlanta","baltimore","chicago","denver","los Angeles","seatle"];
// console.log(citiesm.push("pakistan","india"));
// console.log(citiesm);
// citiesm.pop("india");
// console.log(citiesm);
// let citieso=["atlanta","baltimore","chicago","denver","los Angeles","seatle"];
// citieso.push(12,22)
// console.log(citieso);
// console.log(citieso.toString());
//question no.01
let futureStudentNames = [];
console.log(futureStudentNames);
//question no .02
let stringsArray = ["monday", "tuesday", "wednesday"];
console.log(stringsArray);
//question no.03
let numbers = ["02", "04", "06"];
console.log(numbers);
//question no.04
let booleanArray = [true, false, true];
console.log(booleanArray);
//question no.05
let mixedArray = [42, "apple", true, null, { name: "John", age: 25 }];
console.log(mixedArray);
//question no .06
let qualifications = ["SSC", "HSC", "BCS", "BS", "BCOM", "MS", "M. Phil.", "PhD"];

document.write("<h2>Educational Qualifications in Pakistan:</h2>");
document.write("<ul>");
qualifications.forEach(function(qualification) {
    document.write("<li>" + qualification + "</li>");
});
document.write("</ul>");
console.log(qualifications);
//question no .07
const StudentsName = ["micheal" , "john" , "tony"];
const studentsScore = [320 , 230 , 480];
let total = 500;
const percentage1 = (studentsScore[0]/total)*100;
const percentage2 = (studentsScore[1]/total)*100;
const percentage3 = (studentsScore[2]/total)*100;
document.write("score of " + StudentsName[0] + " is " + studentsScore[0] +  ". percentage: "+ percentage1 + "%");
document.write("<br> score of " + StudentsName[1] + " is "  + studentsScore[1] + ". percentage: "+ percentage2 + "%");
document.write("<br> score of " + StudentsName[2] + " is " + studentsScore[2] + ". percentage: "+ percentage3 + "%");
// for loops
// console.log("hello world");
// console.log("hello world");
// console.log("hello world");
// console.log("hello world");
// console.log("hello world");
// console.log("hello world");
// console.log("hello world");
// console.log("hello world");
// console.log("hello world");
// console.log("hello world");
// console.log("hello world");
// console.log("hello world");
// console.log("hello world");
// console.log("hello world");
// console.log("hello world");
// console.log("hello world");
// console.log("hello world");
for (let i = 0;i<10;i++){
    console.log("hello world");
}
for (let i = 0;i>10;i++){
    console.log("hello world");
}
//tables in loop
for(let i = 5;i<51;i=i + 5){
    console.log("table of 5\n");
    console.log(i + "\n");
}
//reverse table
for(let i = 50;i>4;i=i - 5){
    console.log(i );
}














