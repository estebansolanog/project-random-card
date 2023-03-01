/* eslint-disable */
import "./style.css";

window.onload = () => {
  //write your code here
  document.querySelector("button").addEventListener("click", () => {
    document
      .querySelector(".card")
      .classList.remove("spade", "diam", "heart", "club");
    document.querySelector(".card").classList.add(generateRandomSuit());
    document.querySelector(".number").innerHTML = generateRandomNumber();
  });
};

const generateRandomNumber = () => {
  const numbers = [
    "A",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "9",
    "10",
    "Q",
    "K"
  ];
  let cardNumber = Math.floor(Math.random() * numbers.length);
  return numbers[cardNumber];
};

const generateRandomSuit = () => {
  const suit = ["spade", "diam", "heart", "club"];
  let cardSuit = Math.floor(Math.random() * suit.length);
  return suit[cardSuit];
};
