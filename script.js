// Carousel
var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length} ;
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}

// Fact generator
var factList = [
  "At least twenty states insist they should be able to push people out of workplaces and education spaces for their gender identity.", /*0*/
  "At least twenty states states advocate for the end of protections for transgender youth which include the right to be called by their correct pronouns, use restrooms/locker rooms that matches their gender, and play on the sports team that matches their gender.", /*1*/
  "Monkeypox is not restricted to men who are intimate with other men. Labelling it “gay men’s disease” is not only disrespectful to bisexual men, but also blantantly wrong and may lead the same mistakes seen during the HIV/AIDS pandemic.", /*2*/
  "Transgender youth are not receiving gender affirming surgery. At most, they have a gender therapist and, after displaying an intense pattern of gender dysphoria, may be prescribed pubertal/hormone blockers, which suppress puberty and have shown to improve their mental wellbeing. Hormone blockers do not harm a person’s body and if no longer taken, will resume puberty.", /*3*/
  "Informing children that their sexuality and gender identity are valid is not grooming, indoctrinating, or sexualizing them! These terms have been warped to smear the motives of LGBTQ+ people who seek to teach and simply be themselves." /*4*/
];

var fact = document.getElementById("fact");
var myButton = document.getElementById("myButton");
var count = 0;

if (myButton){
  myButton.addEventListener("click", displayFact);
}
  
function displayFact(){
  fact.innerHTML = factList[count];
  count++;
  if (count == factList.length){
    count = 0;
  }
}