var script = document.createElement('script'); 
script.src = "https://ajax.googleapis.com/ajax/libs/jquery/1.8.2/jquery.min.js"
document.head.appendChild(script) 

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
