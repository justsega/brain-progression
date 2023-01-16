import readlineSync from 'readline-sync';

export const getUserName = () => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}`);
  return userName;
};

export const getRandomNumber = () => {
  const min = 1;
  const max = 9;
  return Math.floor(Math.random() * (max - min)) + min;
};

export const getUserAnswer = () => {
  const userAnswer = readlineSync.question('Your answer: ');
  return userAnswer;
};

export const checkUserAnswer = (answer, control) => {
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
