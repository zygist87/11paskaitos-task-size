var width = prompt("Įveskite marškinėlių plotį");
var length = prompt("Įveskite marškinėlių ilgį");
var sleeve = prompt("Įveskite marškinėlių rankovių dydį");

if (width === "28" && length === "34" && sleeve === "10.13") {
  console.log("Your size is 3XL");
} else if (width === "26" && length === "33" && sleeve === "9.63") {
  console.log("Your size is 2XL");
} else if (width === "24" && length === "31" && sleeve === "8.88") {
  console.log("Your size is XL");
} else if (width === "22" && length === "30" && sleeve === "8.63") {
  console.log("Your size is L");
} else if (width === "20" && length === "29" && sleeve === "8.38") {
  console.log("Your size is M");
} else if (width === "18" && length === "28" && sleeve === "8.13") {
  console.log("Your size is S");
} else {
  console.log("Vienas arba keli matmenys priklauso skirtingiems drabužių dydžiams");
};



var shirtWidth = 28;
var shirtLength = 34;
var shirtSleeve = 10;
