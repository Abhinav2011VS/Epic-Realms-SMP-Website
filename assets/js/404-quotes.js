// FINAL

document.addEventListener("DOMContentLoaded", function () {
  const stanzas = [
      ["What have we here? A curious plight,", "A broken path and a missing light.", "It could have been a treasure or mod to find,", "But alas, it's a 404—leave it behind."],
      ["A whisper floats through the digital mist,", "A path once clear is now dismissed.", "You’ve stumbled here by fate or chance—", "This 404’s your final dance."],
      ["Oh traveler bold, you’ve come this way,", "To find a mod? Perhaps to play?", "But no treasures lie in these broken halls—", "Only echoes of forgotten calls."],
      ["The stars have faded, the map’s unclear,", "The path you seek is no longer near.", "404 it reads, so please beware,", "Adventure's gone—lost in thin air."],
      ["This journey's end is not the prize,", "No hidden code or grand surprise.", "404 it reads with a ghostly hum—", "Looks like your search has met its numb."],
      ["A knight did ride with sword in hand,", "Across this broken, empty land.", "404 here marks the gate—", "No quest, no mod, just empty fate."],
      ["A thousand paths, and none are true,", "The journey ends with a broken view.", "404 marks the end of your quest—", "You’ve traveled far, but not the best."],
  ];

  // Randomly select one stanza from each group randomly
  function getRandomStanza() {
      const randomIndex = Math.floor(Math.random() * stanzas.length);
      return stanzas[randomIndex];
  }

  const selectedStanza = getRandomStanza();

  // Dynamically populate the slots with the 4 lines of the stanza
  document.getElementById("random-quote-1").innerText = selectedStanza[0];
  document.getElementById("random-quote-2").innerText = selectedStanza[1];
  document.getElementById("random-quote-3").innerText = selectedStanza[2];
  document.getElementById("random-quote-4").innerText = selectedStanza[3];
});
