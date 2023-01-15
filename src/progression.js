import readlineSync from 'readline-sync';
import { getUserName, getRandomNumber } from './lib.js';

const getUserAnswer = () => {
  const userAnswer = readlineSync.question('Your answer: ');
  return userAnswer;
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
  const item = getRandomNumber();
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
