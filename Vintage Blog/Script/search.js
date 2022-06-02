// Search
    document.getElementById("input").onsearch = function() {myFunction()};
    let x = document.getElementById ("input");
    let message = document.getElementById ("message");
    
    function myFunction() {    
        message.innerHTML = "You are searching for : " + x.value ;
        alert ("Hallo, You are searching for : '" + x.value + "' unfortunately we found nothing. Please try again later :)!");
        }

    // if (x.value !== "") {
    //     function myFunction ()
    // }
    // else {
    //     message.style.display = "none"
    // }