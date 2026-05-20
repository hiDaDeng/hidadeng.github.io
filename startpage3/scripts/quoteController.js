//Picks a random quote per day
function pickQuote() {
    var today_expected = localStorage.today || 0; //default value of 0 for new users
    var today_actual = new Date().getDate(); //current day

    if(oneQuotePerDay) {
         if(today_expected != today_actual) {
            generateQuote();
            localStorage.today = today_actual;
        }
    } else {
        getRandomQuote();
    }
    updateQuoteDisplay();
    updateAuthorDisplay();
}

function randomIntFromInterval(min, max) { // min and max included 
    return Math.floor(Math.random() * (max - min + 1) + min)
}

async function getRandomQuote() {

    var albums = ["Within", "To Travel for Evermore", "Far From the Madding Crowd", "The Shadow Cabinet", "Salt"]
    var albumRanges = [19, 25, 27, 41, 67];

    //pick random album and select corresponding range
    var randomNumber = randomIntFromInterval(0, 4);
    var album = albums[randomNumber];
    var range = albumRanges[randomNumber];

    //pick random quote from collection
    var quoteIndex = randomIntFromInterval(1, range);
    var document = "Quote" + quoteIndex;

    await fetchAndSetQuote(album, document);
}

async function fetchAndSetQuote(album, document) {
    //fetch from firebase database
    //make sure fetching is done before doing operations
    const doc = await db.collection(album).doc(document).get().then((doc) => {

        //make sure linebreaks are converted from firebase format
        var quote = doc.data().Quote.replaceAll( " \\n ", "\n" );
        var author = doc.data().Song + " (" + album + ")";

        localStorage.quote = quote;
        localStorage.author = author;
    });
}

function updateQuoteDisplay() {
    document.getElementById("quote").innerHTML = localStorage.quote;
}

function updateAuthorDisplay() {
    document.getElementById("authorName").innerHTML = localStorage.author;
}


//with firebase this is redundant




/* 
function generateQuote() {
    var authors_id = ["To Travel For Evermore", "Far From the Madding Crowd", "The Shadow Cabinet", "Salt"]; //insert ID's for wanted authors
    let quotes = new Map(); //map of quotes. Content changed according to author.
    let idToSong = new Map(); //map of quotes. Content changed according to author.
    var N = authors_id.length;

    var rnd = randomPicker(N);
    var author = authors_id[rnd];

    //author = "Salt";

    switch(author) {
        case "To Travel For Evermore":
            quotes.set("0",
            "Burned are those who once loved the sun");
            idToSong.set("0",
            "When The Jester Cries");

            quotes.set("1",
            "The true philosopher's stones never shall turn nothing into gold");
            idToSong.set("1",
            "The Nevershining Stones");

            quotes.set("2",
            "The wealth of mine is not like thine: Of gold shining");
            idToSong.set("2",
            "The Nevershining Stones");

            quotes.set("3",
            "Dancer in the light, won't you dance for me?");
            idToSong.set("3",
            "Dancer in the Light");

            quotes.set("4",
            "Let me be afraid of the dark. Let me evaporate in sunlight");
            idToSong.set("4",
            "Lost Realms");

            quotes.set("5",
            "Would take a thousand floods to wash off my mistakes");
            idToSong.set("5",
            "A Sinner's Confession");

            quotes.set("6",
            "There is more to my soul than to my eyes");
            idToSong.set("6",
            "Through Within to Beyond");

            quotes.set("7",
            "I will shape my own path to travel for evermore.\n Through within to beyond");
            idToSong.set("7",
            "Through Within to Beyond");

            break;
        case "Far From the Madding Crowd":
            quotes.set("0",
            "No, I'm not antisocial, I am of another kind. And my road goes on and on");
            idToSong.set("0",
            "The Road Goes Ever On");

            quotes.set("1",
            "From a buried seed a forest will be.\n You may destroy, but you cannot undo");
            idToSong.set("1",
            "Tree");

            quotes.set("2",
            "Now the wind calls a storm from the past. \n Night falls, and they're longing for the woods");
            idToSong.set("2",
            "Longing For The Woods");

            quotes.set("3",
            "Thinking this is a good place to die, but a better place to live");
            idToSong.set("3",
            "Highland Winds");

            quotes.set("4",
            "It all seemed so impermanent though I think that it never will change");
            idToSong.set("4",
            "The Bollard");

            quotes.set("5",
            "But it was long ago and it was far away");
            idToSong.set("5",
            "Longing For The Woods (Part 1)");

            quotes.set("6",
            "A mounting cost of dreamers lost and growing old");
            idToSong.set("6",
            "Land of Olden Glory");

            quotes.set("7",
            "A dream now gone, a name in a song. \n The garden of the Gods, faded and lost");
            idToSong.set("7",
            "Lament for Lorien");

            break;
        case "The Shadow Cabinet":
            quotes.set("0",
            "I cannot fight my nature, the pleasant primitive");
            idToSong.set("0",
            "Demon Desire");

            quotes.set("1",
            "I hate the pity in your eyes. \n You know you'll always win the race, no matter how hard I try");
            idToSong.set("1",
            "Beatifool");

            quotes.set("2",
            "A black garment suits a black soul");
            idToSong.set("2",
            "The Raven");

            quotes.set("3",
            "O, apathy divine, forget it all in time");
            idToSong.set("3",
            "Apathy Divine: Faith");

            quotes.set("4",
            "But that envy is a safe ally is a lie");
            idToSong.set("4",
            "Envy");

            quotes.set("5",
            "When all is white no more red blood will flow");
            idToSong.set("5",
            "Apathy Divine: Snow");

            quotes.set("6",
            "I cannot trust in anyone, I know. To me my neighbour is my foe");
            idToSong.set("6",
            "I Shall Never Yield");

            quotes.set("7",
            "Wake up sleeping in soil covered in ice. \n Where will the roses grow?");
            idToSong.set("7",
            "Carpe Noctem");

            quotes.set("8",
            "If you cannot win the day, seize the night!");
            idToSong.set("8",
            "Carpe Noctem");

            quotes.set("9",
            "Shadow, for every light there be. Sorrow, not always dark is she");
            idToSong.set("9",
            "Midnight Song");

            quotes.set("10",
            "Hate not the darkness, \n it lets you see the light you hold");
            idToSong.set("10",
            "The Raven");

            quotes.set("11",
            "The colors of black \n The music of the night");
            idToSong.set("11",
            "Carpe Noctem");

            quotes.set("12",
            "And I shall count these, the last days of the sun \n And seek comfort in darkness 'til my life thread is spun");
            idToSong.set("12",
            "Carpe Noctem");

            break;
        case "Salt":
            quotes.set("0",
            "I would sing of the false ones who have taken up rule, \n and the true ones who were burned at the stake");
            idToSong.set("0",
            "The Desparate Poet");

            quotes.set("1",
            "A symphony of triumph for the day hope returns, \n  or a soundtrack to insanity when all the world burns!");
            idToSong.set("1",
            "The Desparate Poet");

            quotes.set("2",
            "There's no way to cut the Gordian Knot of past webs entangled");
            idToSong.set("2",
            "Tears");

            quotes.set("3",
            "I will write no solemn epitaphs for a world that's gone insane");
            idToSong.set("3",
            "The Mad Sailor");

            quotes.set("4",
            "Lesser sons of greater sires bearing wood to their own pyres");
            idToSong.set("4",
            "The Last Tribe");

            quotes.set("5",
            "The weight of the world proved much too tough. \n Just dragging myself along was more than enough");
            idToSong.set("5",
            "The Mad Sailor");

            quotes.set("6",
            "Tears of sorrow make a man of me");
            idToSong.set("6",
            "Tears");

            quotes.set("7",
            "Cause together we'll weather the storm");
            idToSong.set("7",
            "Weather the Storm");

            quotes.set("8",
            "With you, I believe we are forever");
            idToSong.set("8",
            "Weather the Storm");

            quotes.set("9",
            "Bringing warmth to the cold, helps a human heart be bold");
            idToSong.set("9",
            "Water of Life");

            break;
    }

    var M = quotes.size;
    var rnd = randomPicker(M);
    rnd += ""; //convert to string
    var quote = quotes.get(rnd);
    var song = idToSong.get(rnd);
    
    console.log("no. quotes: " + M);
    console.log("random number: " + rnd);
    console.log("quote: " + quote);

    localStorage.quote = quote;
    localStorage.author = song + " (" + author + ")";

    setQuote();
    setAuthor();
} */