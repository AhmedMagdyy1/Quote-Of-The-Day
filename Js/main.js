var addBtn = document.getElementById('btn-quote');
var firstArr = [`“Be yourself; everyone else is already taken.”<br>
-- Oscar Wilde
`,`“I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best.”<br>
-- Marilyn Monroe`,
`“Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.”<br>
-- Albert Einstein`,
`“So many books, so little time.”<br>
-- Frank Zappa`,
`“A room without books is like a body without a soul.”<br>
-- Marcus Tullius Cicero`,
`“Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind.”<br>
-- Bernard M. Baruch`,
`“You know you're in love when you can't fall asleep because reality is finally better than your dreams.”<br>
--Dr. Seuss`,
`“You only live once, but if you do it right, once is enough.”<br>
--Mae West`,
`“Be the change that you wish to see in the world.”<br>
--Mahatma Gandhi`,
`“In three words I can sum up everything I've learned about life: it goes on.”<br>
--Robert Frost`
]
var firstArrLength = firstArr.length;
addBtn.onclick=function(){
    showQuote();
}
function showQuote(){
    var quoteBox = '';
    for(var i = 0 ; i < firstArr.length ; i++ ){
        quoteBox = firstArr[Math.random()*firstArrLength | 0];
        // quoteBox = firstArr[Math.floor(Math.random()*firstArrLength)];
    }
    document.getElementById('quote-info').innerHTML = quoteBox;
}

