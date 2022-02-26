// initialize the counter and the array
var numbernames=0;
var names = new Array();
var num = 0;
function SortNames() {
   // Get the name from the text field
   let thename=document.theform.newname.value;
   // Add the name to the array
   thename = thename.toUpperCase();
   // making a number list
   names[numbernames] = ++num + ". " + thename;
   // Increment the counter
   numbernames++;
   // Sort the array
   names.sort();
   document.theform.sorted.value=names.join("\n");
}
