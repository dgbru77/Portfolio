<script>
const cards = document.querySelectorAll('.card');
let flipped = [];
let lock = false;
let matchedPairs = 0;
const totalPairs = cards.length / 2;

console.log("Total pairs expected:", totalPairs);

cards.forEach(card = {
  card.addEventListener('click', () => {
    if (lock || card.classList.contains('flipped')) return;

    card.classList.add('flipped');
    flipped.push(card);

    if (flipped.length === 2) {
      lock = true;

      if (flipped[0].dataset.name === flipped[1].dataset.name) {
        matchedPairs++;
        console.log("Matched:", flipped[0].dataset.name, "Total matched pairs:", matchedPairs);
        
        flipped = [];
        lock = false;

        if (matchedPairs === totalPairs) {
          console.log("🎉 You win condition reached");
          setTimeout(() => alert("🎉 You matched all cards!"), 300);
        }
      } else {
        setTimeout(() => {
          flipped.forEach(c => c.classList.remove('flipped'));
          flipped = [];
          lock = false;
        }, 1000);
      }
    }
  })
})
</script>
