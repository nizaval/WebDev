// create the array
names = new Array();
var i = 0;

//creating an alert to prompt the user to enter 10 names
alert('This is exercise 2, it prompts the user.\nPlease enter 10 names')

// loop and prompt for names
do {  
  next = window.prompt("Enter the Next Name", ""); 
  if (next > " ") names[i] = next;
  i++;
} while (next > " ");

var sortedNames = names.sort();
document.write("<h2>" + (sortedNames.length) + " names entered.</h2>");

// display all of the names
document.write("<ol>");
for (i in sortedNames) { 
  document.write("<li>" + sortedNames[i] + "</li>");
}
// close the list
document.write("</ol>");
