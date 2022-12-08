let slideIndex = 0;
showSlides();
function showSlides() {
     let i;
     let dots = document.getElementsByClassName("dot");
     let slides = document.getElementsByClassName("mySlides");

     for (i = 0; i < slides.length; i++) {
          slides[i].style.display = "none";
     }
     slideIndex++;
     if (slideIndex > slides.length) {
          slideIndex = 1;
     }
     for (i = 0; i < dots.length; i++) {
          dots[i].className = dots[i].className.replace(" active", "");
     }
     slides[slideIndex - 1].style.display = "block";
     dots[slideIndex - 1].className += " active";
     setTimeout(showSlides, 4000);
}

function responsiveBar() {
     var x = document.getElementById("topnav");
     if (x.className == "topnav") {
          x.className += " responsive";
     } else {
          x.className = "topnav";
     }
}

const toggleButton = document.getElementsByClassName("toggle-button")[0];
const navBarLinks = document.getElementsByClassName("navbar-links")[0];

toggleButton.addEventListener("click", () => {
     navBarLinks.classList.toggle("active");
});
