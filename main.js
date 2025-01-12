function toggleText() {
    var dots = document.getElementById("dots");
    var moreText = document.getElementById("more");
    var btnText = document.getElementById("readMoreButton");

    if (dots.style.display === "none") {
        dots.style.display = "inline";
        btnText.innerHTML = "Citește mai mult";
        moreText.style.display = "none";
    } else {
        dots.style.display = "none";
        btnText.innerHTML = "Citește mai puțin";
        moreText.style.display = "inline";
    }
};
function myFunction() {
    var element = document.body;
    element.classList.toggle("dark-mode");
};
function mynavbar() {
    var x = document.getElementById("nav");
    if (x.style.display === "block") {
      x.style.display = "none";
    } 
    else {
      x.style.display = "block";
    }
  };
  function toggleNavbar() {
    const nav = document.getElementById('nav');
    nav.classList.toggle('active');
}