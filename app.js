console.log("Hello World!\n==========\n");
console.log(
  "Follow the steps in the README.md file to complete the exercises:\n==========\n"
);
 //My Code
//console.log("Exercise 1");

//let favNum = 62;
//let guess = window.prompt("Guess My Favorite Number!");

//if (guess < favNum){ 
  //console.log("too low");
//} else if (guess > favNum) {
  //console.log("too high");
//} else {
  //console.log("Congrats!");
//}

console.log("Exercise 2")

/*let userBirth = window.prompt("What is your birth month?");

switch (userBirth){
  case "dec" :
  case "jan" :
  case "feb" :
    console.log("born in winter")
    break;
  case "mar" :
  case "apr" :
  case "may" :
    console.log("born in spring")
    break;
  case "jun" :
  case "jul" :
  case "aug" :
    console.log("born in summer")
    break;
  case "sep" :
  case "oct" :
  case "nov" :
    console.log("born in fall")
    break;
  default :
  console.log("default");
}*/

console.log("Exercise 3");

let typeId = "01";
let colorId = "PU";
let sizeId = "L";

let type = "";  /*I need to declare these values still*/
let color = "";
let size = "";

/*if (typeId == "01") {
  type = "Tank top";
} else if (typeId == "02") {
  type = "T-Shirt";
} else if (typeId == "03") {
  type = "Long Sleeve";
} else if (typeId == "04") {
  type == "Sweat Shirt";
} else {
  type = "Other";
}*/

switch(typeId) {
  case "01" :
    type = "tank top";
    break;
  case "02" :
    type = "t-shirt";  
    break;
  case "03" :
    type = "long sleeve";
    break;  
  case "04" :
    type = "sweat shirt";
    break;
  default : 
    type = "other";
}

/*if (colorId == "BL") {
  color = "Black";
} else if (colorId == "BL") {
  color = "Blue";
} else if (colorId == "RD") {
  color = "Red";
} else if (colorId == "PU") {
  color = "Purple";
} else {
  color = "White";
}*/

switch (colorId) {
  case "BL" :
  color = "black";
  break;
  case "BU" :
  color = "blue";
  break;  
  case "RD" :
  color = "red";
  break;
  case "PU" :
  color = "purple"
  break;
  default :
    color = "white";  
}

/*if (sizeId == "S") {
  size = "Small";
} else if (sizeId == "M") {
  size = "Medium";
} else if (sizeId == "L") {
  size = "Large";
} else if (sizeId == "XL") {
  size = "Extra Large";
} else {
  size = "One Size Fits All";
}*/

switch (sizeId) {
  case "S" : 
  size = "small";
  break;
  case "M" : 
  size = "medium";
  break;
  case "L" : 
  size = "large";
  break;
  case "XL" :
  size = "extra large";
  break;
  default :
    size = "one size fits all";
}

console.log(`Product: ${size} ${color} ${type}`);
