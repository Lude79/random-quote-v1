var usedQuotes = [];
var html = "";
var quotes = [
    { quote: "Men always want to be a woman's first love - women like to be a man's last  romance. ",
      source: "Oscar Wilde",
      tag: "[humor]"
                },
    { quote: "It is not titles that honor men, but men that honor titles.",
      source: "Niccolo Machiavelli",
      citation: "The Prince"
                },
    { quote: "To be or not to be",
      source: "William Shakespeare",
      citation: "The Prince of Denmark"
                },
    { quote: "Memory is the diary that we all carry about with us.",
      source: "Oscar Wilde",
      citation: "The Importance of Being Earnest",
      year: 1895
                },
     { quote: "Memory is the diary that we all carry about with us.",
      source: "Oscar Wilde",
      citation: "The Importance of Being Earnest",
      year: 1895
                }
];

// Returns a random integer between min (included) and max (included)
function getRandomQuote() {
    var quoteObj;
do {quoteObj = quotes[Math.floor(Math.random() * (quotes.length))]
   } while ( usedQuotes.indexOf(quoteObj) !== -1);
        usedQuotes.push(quoteObj);
        if (usedQuotes.length === quotes.length) {
            usedQuotes.length = 0;
        // console output to see if reset is working: console.log("quotes counter is reset");
        }
        return quoteObj;
}

//Display Selected Quote And Associated Properties
function printQuote() {
    var currentQuote = getRandomQuote();
     html = '<p class="quote">' + currentQuote.quote + '</p>';
    html += '<p class="source">' + currentQuote.source;
    if (currentQuote.hasOwnProperty("citation")) {
    html += '<span class="citation">' + currentQuote.citation + '</span>';
    }
    if (currentQuote.hasOwnProperty("year")) {
        html += '<span class="year">' + currentQuote.year + '</span>';
    }
     if (currentQuote.hasOwnProperty("tag")) {
        html += '<span class="tag">' + currentQuote.tag + '</span>';
    }
    html += '</p>';
    document.getElementById('quote-box').innerHTML = html;
}

//Change Quote on Click
document.getElementById('loadQuote').addEventListener("click", printQuote);

//Random Number Generator
function random256() {
    return Math.floor(Math.random() * 256);
}

//Random RGB Color Generator
function randomColor() {
var rgbColor = 'rgb(' + random256() + ',' + random256() + ',' + random256() + ')';
    document.body.style.backgroundColor = rgbColor;
}

//Change Color on Click
document.getElementById('loadQuote').addEventListener("click", randomColor);

//10 Second Timer for Quotes
function timer() {
    setInterval(function() {document.getElementById('loadQuote').click()}, 10000);
}
document.getElementById('loadQuote').addEventListener("click", timer);

//Launch Program When Page is Opened
window.onload = printQuote;


