/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// For assistance: 
// Check the "Project Resources" section of the project instructions
// Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat

/*** 
 * `quotes` array 
 ***/
const quotes = [{
        source: 'Robin Sharma',
        quote: 'Make your faith larger than your fears and your dreams larger than your doubts.',
        citation: 'Unknown',
        year: NaN,
        tag: 'Inspiration'
    },
    {
        source: 'Dr. Seuss',
        quote: 'You have brains in your head. You have feet in your shoes. You can steer yourself any direction you choose.',
        citation: 'A book',
        year: 2001,
        tags: 'Children'
    },
    {
        source: 'Babe Ruth',
        quote: 'Never let the fear of striking out keep you from playing the game.',
        citation: 'TV',
        year: 1992,
        tag: 'Sports',

    },
    {
        source: 'Nelson Mandela',
        quote: 'The greatest glory in living lies not in never falling, but in rising every time we fall.',
        citation: 'That time and place',
        year: 1960,
        tag: 'History'
    },
    {
        source: 'Casey Neistat',
        quote: 'Do more.',
        citation: 'YouTube',
        year: 2017,
        tag: 'Social Media'
    }
]


/***
 * `getRandomQuote` function
 ***/
function getRandomQuote(arr) {
    // 1. Create a variable that generates a random number
    // between zero and the last index in the `quotes` array
    let random = Math.floor(Math.random() * arr.length);
    console.log(random);

    // 2. Use the random number variable and bracket notation 
    // to grab a random object from the `quotes` array, and 
    // store it in a variable
    let quote = arr[random];

    // 3. Return the variable storing the random quote object
    return quote
}

// console.log(getRandomQuote(quotes));

function getRandomInt(max) {
    // generate a random integer -- for background color
    return Math.floor(Math.random() * Math.floor(max));
}

/***
 * `printQuote` function
 ***/

function printQuote() {
    let quote = getRandomQuote(quotes);
    // console.log(quote);
    let newQuote = `<p class= 'quote'>${quote.quote}</p><p class='source'>${quote.source}</p>`;

    if (quote.citation && quote.year && quote.tags) {
        newQuote = `<p class= 'quote'>${quote.quote}</p><p class='source'>${quote.source} <span class='citation'>${quote.citation}</span><span class='year'>${quote.year}</span> <br><small class="tags">${quote.tags[0]}}</small></p>`
    } else if (quote.citation && quote.year) {
        newQuote = `<p class= 'quote'>${quote.quote}</p><p class='source'>${quote.source} <span class='citation'>${quote.citation}</span><span class='year'>${quote.year}</span></p>`;
    } else if (quote.citation && !quote.year) {
        newQuote = `<p class= 'quote'>${quote.quote}</p><p class='source'>${quote.source}<span class='citation'>${quote.citation}</span></p>`;
    } else if (quote.year && !quote.citation) {
        newQuote = `<p class= 'quote'>${quote.quote}</p><p class='source'>${quote.source}<span class='year'>${quote.year}</span></p>`;
    }

    document.getElementById('quote-box').innerHTML = newQuote;

    // change the background to be a random color
    let backgroundColor = `rgb(${getRandomInt(255)},${getRandomInt(255)},${getRandomInt(255)})`;
    console.log(`RGB Colors selected ${backgroundColor}`);
    document.body.style.backgroundColor = backgroundColor;
}

// call printQuote function with a random interval 10k miliseconds or 10seconds
setInterval(printQuote, 10000);

/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
 ***/
// console.log('test');
document.getElementById('load-quote').addEventListener("click", printQuote, false);