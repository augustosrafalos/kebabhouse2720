const cards = document.querySelectorAll(".card");

cards.forEach(card=>{

card.addEventListener("click",()=>{

alert(
card.querySelector("h2").innerText +
"\nPris: " +
card.querySelector("p").innerText
);

});

});
