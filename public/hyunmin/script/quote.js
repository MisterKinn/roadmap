const quotes = [
    {
    quotes: 'to infinity and beyond!',
    author: '무한한 공간 저 너머로!'
    },
    {
    quotes: 'All it takes is faith and trust',
    author: '필요한 것은 믿음과 신뢰야'
    },
    {
    quotes: 'Even miracles take a little time',
    author: '기적도 시간이 필요해'
    },
    {
    quotes: 'We are who we choose to be',
    author: '현재의 우리는 우리의 선택의 결과야'
    },
    {
    quotes: 'After All, tomarrow is another day',
    author: '결국 내일은 또 다시 내일의 해가 뜬다'
    },
    {
    quotes: 'I have just met you and I love you',
    author: '너를 방금 만났고 사랑해'
    },
    {
    quotes: 'you make me want to be a bettr man',
    author: '당신은 내가 더나은 남자가 되고 싶게 만들어'
    },
    {
    quotes: 'it,s hard for a good man to be a king',
    author: '착한사람은 왕이 되기 어려운 법이다'
    },
    {
    quotes: 'If you don,t think, then you shouldn,t talk',
    author: '생각하지 않고 말하지마'
    },
    {
    quotes: 'Today is the first day of the rest of your life',
    author: '오늘은 당신의 남은 생의 첫 날 입니다'
    },
    {
    quotes: 'Great man not born great they grow great',
    author: '위대한 사람들은 위대하게 태어나는 것이 아니야, 위대하게 성장하는거야'
    },
    {
    quotes: 'With great power comes great responsibility',
    author: '큰 힘에는 큰책임이 따른다'
    },
    {
    quotes: 'keep your friends close but your enemies closer',
    author: '친구를 가까이 두어라 하지만 적은 더 가까이 두도록 하거라'
    },
    {
    quotes: 'Just be the person that she already thinks you are',
    author: '그녀가 생각하는 그런 사람이 되려고 해봐'
    },
    {
    quotes: 'Life is like a box of chocolate you never know what you,re gonna get',
    author: '인생은 초콜릿 상자와 같아서 어떤 것을 잡을지 알 수 없다'
    },
    {
    quotes: 'Coward never start the weak never finish and the winners never quit',
    author: '겁쟁이들은 시작도 하지 않지 약한 자들은 끝까지 해내는 법이 없으며 승자는 절대로 포기하지 않아'
    },
];

const containerElement = document.querySelector("#quote-container");
const quoteElement = document.querySelector("#quote");
const authorElement = document.querySelector("#author");

const quoteLength = quotes.length;

const todayQuote = quotes[Math.floor(Math.random() * 16)];

quoteElement.innerText = todayQuote.quotes;
authorElement.innerText = todayQuote.author;