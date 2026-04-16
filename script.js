function playRandom() {
  let number = Math.floor(Math.random() * (100 - 1 + 1) + 1);
  console.log(number);
  let userNumber = Number(prompt("Угадайте какое число загадал компьютер"));
  do {
    if (userNumber == number) {
      alert("Поздравляю! Вы угадали!!!");
      break;
    } else if (confirm("Вы не угадали. Будете угадывать дальше?")) {
      if (userNumber < number) {
        userNumber = prompt("Подсказка: загаданное число больше");
      } else if (userNumber > number) {
        userNumber = prompt("Подсказка: загаданное число меньше");
      } else {
        alert("Поздравляю! Вы угадали!!!");
        break;
      }
    } else {
      break;
    }
  } while (userNumber !== number);
}

function playMath() {
  const operations = ["+", "-", "*", "/"];
  const operation = operations[Math.floor(Math.random() * 4)];
  let num1 = Math.floor(Math.random() * 20) + 1;
  let num2 = Math.floor(Math.random() * 20) + 1;

  let answer;
  switch (operation) {
    case "+":
      answer = num1 + num2;
      break;
    case "-":
      answer = num1 - num2;
      break;
    case "*":
      answer = num1 * num2;
      break;
    case "/":
      answer = Math.floor(num1 / num2);
      break;
  }

  let userAnswer = Number(
    prompt(
      `Решите пример (если ответ - дробное число, введите только целую часть). \n ${num1} ${operation} ${num2}`
    )
  );

  do {
    if (userAnswer === answer) {
      alert(`Верно`);
    } else {
      if (confirm(`Не верно. Попробовать ещё раз?`)) {
        userAnswer = Number(prompt(`${num1} ${operation} ${num2}`));
      } else {
        break;
      }
    }
  } while (answer !== userAnswer);
}

function playReverse() {
  let userStr = prompt("Введите текст").toLowerCase();
  alert(`Перевёрнутый текст: ${userStr.split("").reverse().join("")}`);
}

function playQuiz() {
  const quiz = [
    {
      question: "Какого цвета небо?",
      options: ["1. Красный", " 2. Синий", " 3. Зеленый"],
      correctAnswer: 2,
    },
    {
      question: "Сколько дней в неделе?",
      options: ["1. Шесть", " 2. Семь", " 3. Восемь"],
      correctAnswer: 2,
    },
    {
      question: "Сколько у человека пальцев на одной руке?",
      options: ["1. Четыре", " 2. Пять", " 3. Шесть"],
      correctAnswer: 2,
    },
  ];
  
  let counter = 0;
  
  
  for (let i = 0; i < quiz.length; i++) {
    const input = prompt(`${quiz[i].question} \n${quiz[i].options} \nВведите номер ответа.`);
    if (input === null) {
          break; 
        }
    const userAnswer = Number(input);    
    if (userAnswer === quiz[i].correctAnswer) {
      counter++;
      alert("Верно");
    } else {
      alert("Неверно");
    } 
  
  }
  alert(`Верных ответов: ${counter}`);
}

function RockPaperScissors() {
  const choices = ["камень", "ножницы", "бумага"];

  let userChoice = prompt(
    "Сделайте свой выбор: камень, ножницы или бумага"
  ).toLowerCase();

  if (!choices.includes(userChoice)) {
    alert(
      "Некорректный ввод! Пожалуйста, введите 'камень', 'ножницы' или 'бумага'."
    );
  } else {
    const computerChoice = choices[Math.floor(Math.random() * choices.length)];

    if (userChoice === computerChoice) {
      result = "Ничья!";
    } else if (
      (userChoice === "камень" && computerChoice === "ножницы") ||
      (userChoice === "ножницы" && computerChoice === "бумага") ||
      (userChoice === "бумага" && computerChoice === "камень")
    ) {
      result = "Вы победили!";
    } else {
      result = "Компьютер победил!";
    }

    alert(
      `Ваш выбор: ${userChoice}\nВыбор компьютера: ${computerChoice}\n${result}`
    );
  }
}


function RandomColorGenerator() {
  const color = '#' + Math.floor(Math.random() * 16777215)
                               .toString(16)
                               .padStart(6, '0')
                               .toUpperCase();

  console.log (color);                                      
  document.body.style.backgroundColor = color;
        
}