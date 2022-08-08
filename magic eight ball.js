let userName = 'Jane';

userName === "Jane" ? console.log(`Hello, ${userName}!`) : console.log('Hello!')

const userQuestion = '';
let randomNumber = Math.floor(Math.random() * 8);

const responses = [
  'It is certain',
  'It is decidedly so',
  'Reply hazy try again',
  'Cannot predict now',
  'Do not count on it',
  'My sources say no',
  'Outlook not so good',
  'Signs point to yes',
];

const eightBall = responses[randomNumber];

console.log(`MagicBall: ${eightBall}`);