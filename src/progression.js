import readlineSync from 'readline-sync';

const getUserName = () => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}`);
  return userName;
};

const getUserAnswer = () => {
  const userAnswer = readlineSync.question('Your answer: ');
  return userAnswer;
};

const getRandomNumber = () => {
  const min = 1;
  const max = 9;
  return Math.floor(Math.random() * (max - min)) + min;
};

const getProgression = () => {
  const firstMemberOfProgression = getRandomNumber();
  const d = getRandomNumber();
  const progression = [];
  let sum = firstMemberOfProgression;
  let counter = 0;
  progression.push(firstMemberOfProgression);
  while (counter <= 8) {
    sum += d;
    progression.push(sum);
    counter += 1;
  }
  return progression;
};

const getQuestion = () => {
  console.log('What number is missing in the progression?');
  const arr = getProgression();
  const item = Math.floor(Math.random() * (arr.length - 1));
  const controlResult = arr[item];
  arr[item] = '..';
  const strArr = arr.join(' ');
  console.log(`Question: ${strArr}`);
  return [arr, controlResult];
};

const checkUserAnswer = (answer, control) => {
  const usrAnswer = Number(answer);
  const numControl = Number(control);
  switch (usrAnswer === numControl) {
    case true:
      console.log('Correct!');
      return true;
    case false:
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${control}'.`);
      return false;
    default:
      return false;
  }
};

const startGame = () => {
  const gameCounter = 3;
  const userName = getUserName();
  for (let i = 0; i < gameCounter; i += 1) {
    const question = getQuestion();
    const userAnswer = getUserAnswer();
    const checkedAnswer = checkUserAnswer(userAnswer, question[1]);
    if (checkedAnswer !== true) {
      console.log(`Let's try again, ${userName}!`);
      return;
    }
  }
  console.log(`Congratulations, ${userName}!`);
};

export default () => startGame();
