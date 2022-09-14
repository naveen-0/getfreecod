const card = document.querySelectorAll(".card");
for(let i = 0; i < card.length; i++) {
  //const width = card[i].offsetWidth;
  console.log(card[i].offsetWidth)
  card[i].style.minHeight = card[i].offsetWidth + "px";
}