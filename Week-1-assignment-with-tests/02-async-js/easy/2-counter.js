let counter= 1;
function showCounter() {
    console.log(counter);
    counter = counter+1;
    setTimeout(showCounter, 1000);
}

// calling the function
showCounter();