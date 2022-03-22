
// random value generated 
var y = Math.floor(Math.random() * 100 + 1);

// counting the number of guesses 
// made for correct Guess 
var guess = 1;
var again = document.getElementById('again');
var out = document.getElementById('oPText');

document.getElementById("submitguess").onclick = function () {

    // number guessed by user	 
    var x = document.getElementById("guessField").value;

    if (x == y) {
        out.innerHTML = 'Congratulations! You got it in ' + guess + ' guesses!';
        out.style.color = 'lightblue';
    } 
    else if (x > y)
    {
        guess++;
        out.innerHTML = 'Your number is too high, try again.'
    } 
    else if (x < y) 
    {
        guess++;
        out.innerHTML = 'Your number is too low, try again.'
    }
    else
    {
        out.innerHTML = 'This is not a valid input, try again.'
    }
}

document.getElementById("again").onclick = function(){location.reload();}