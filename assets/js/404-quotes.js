document.addEventListener("DOMContentLoaded", function () {
    const quotes = [
        `What have we here? A curious plight,
    A broken path and a missing light.
    It could have been a treasure or mod to find,
    But alas, it's a 404—leave it behind.`,

        `A whisper floats through the digital mist,
    A path once clear is now dismissed.
    You’ve stumbled here by fate or chance—
    This 404’s your final dance.`,

        `Oh traveler bold, you’ve come this way,
    To find a mod? Perhaps to play?
    But no treasures lie in these broken halls—
    Only echoes of forgotten calls.`,

        `The stars have faded, the map’s unclear,
    The path you seek is no longer near.
    404 it reads, so please beware,
    Adventure's gone—lost in thin air.`,

        `This journey's end is not the prize,
    No hidden code or grand surprise.
    404 it reads with a ghostly hum—
    Looks like your search has met its numb.`,

        `A knight did ride with sword in hand,
    Across this broken, empty land.
    404 here marks the gate—
    No quest, no mod, just empty fate.`,

        `A thousand paths, and none are true,
    The journey ends with a broken view.
    404 marks the end of your quest—
    You’ve traveled far, but not the best.`,

        `Oh, gentle soul, you sought and strayed,
    Through mist and paths and twilight shade.
    But here it rests—a lonely plea—
    404 is the lock and key.`,

        `The scroll is torn, the map’s erased,
    The journey’s lost with no retrace.
    404 whispers its gentle curse:
    "This journey’s end is this broken verse."`,

        `You may seek mods, or paths, or keys,
    But alas, this page is lost at sea.
    404 it hums, a ghostly tone—
    This digital path is all alone.`,

        `What lies here, traveler, is empty, I’m afraid,
    A broken path and a journey delayed.
    404 whispers its sad refrain—
    The mod you seek has left the plain.`,

        `Oh, hark to the wind and the echoes low,
    This path is broken, as you must know.
    404 stands as your journey's gate,
    A warning sign of a twisted fate.`,
    ];

    // Shuffle the quotes array for a random selection
    function shuffle(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    }

    const shuffledQuotes = shuffle([...quotes]);

    // Load 4 sets of 4 random sentences into slots
    document.getElementById("random-quote-1").innerText = shuffledQuotes[0];
    document.getElementById("random-quote-2").innerText = shuffledQuotes[1];
    document.getElementById("random-quote-3").innerText = shuffledQuotes[2];
    document.getElementById("random-quote-4").innerText = shuffledQuotes[3];
});
