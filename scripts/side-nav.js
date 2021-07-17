$("side-nav").find("a").click(function(e) {
    e.preventDefault();
    var section = $(this).attr("href");
    $("html, body").animate({
        scrollTop: $(section).offset().top
    });
});
$("full-side-nav").find("a").click(function(e) {
    e.preventDefault();
    var section = $(this).attr("href");
    $("html, body").animate({
        scrollTop: $(section).offset().top
    });
});
function openNav() {
    var x = window.matchMedia('(max-width: 576px)');
    if (x.matches) { // If media query matches
        document.getElementById("R&DSidebar").style.width = "250px";
    } else {
        document.getElementById("R&DSidebar").style.width = "300px";
    }
    
}
  
function closeNav() {
    document.getElementById("R&DSidebar").style.width = "0";
}