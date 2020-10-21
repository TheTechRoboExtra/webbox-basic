// RUNNING JQUERY
// Source for the following three lines:
// https://www.geeksforgeeks.org/how-to-include-a-javascript-file-in-another-javascript-file/
var script = document.createElement('script'); // create script object
script.src = "https://ajax.googleapis.com/ajax/libs/jquery/1.8.2/jquery.min.js" // add link to jquery creation script
document.head.appendChild(script) // run jquery creation script

// LOADING NAVBAR

$(function() {

    $("#nav").load("nav.html");

    function activeNav() {
        var pgurl = window.location.href.substr(window.location.href.lastIndexOf("/")+1);
         $("#nav ul li a").each(function(){
              if($(this).attr("href") == pgurl || $(this).attr("href") == '' )
              $(this).addClass("active");
         });
    }

    setTimeout(function() {
        activeNav();
    }, 100);

});

// Thanks to https://stackoverflow.com/a/39448407/9654083
