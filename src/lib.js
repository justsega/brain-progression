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
