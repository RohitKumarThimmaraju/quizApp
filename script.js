// FUNCTION TO GET THE QUIZ DATA BASED ON CATEGORY SELECTED
function getQuizDataByCategory(category) {
  switch (category) {

    // AGES MCQ'S JSON
    case "ages":
      return [
        {
          id: "0",
          question: "What is Ram's present age, if after 8 years his age will be 10 times his age 10 years back?",
          options: [
            "11 years",
            "21 years",
            "12 years",
            "32 years",
          ],
          correct: "12 years",
        },
        {
          id: "1",
          question: "The present age of Kabir is 50 years and that of his wife, Sarah is 40 years. How long ago was the ratio of their ages 3:2?",
          options: [
            "20 years",
            "21 years",
            "15 years",
            "30 years",
          ],
          correct: "20 years",
        },
        {
          id: "2",
          question: "The sum of ages of 5 children born in a family at the intervals of 4 years each is 50 years. What is the age of the eldest child?",
          options: [
            "15 years",
            "30 years",
            "32 years",
            "20 years",
          ],
          correct: "20 years",
        },
        {
          id: "3",
          question: "The present ratio between the ages of Archana and Diksha is 4 : 3. After 5 years, Archana's age will be 25 years. What is the age of Diksha at present?",
          options: [
            "12 years",
            "20 years",
            "15 years",
            "22 years",
          ],
          correct: "15 years",
        },
        {
          id: "4",
          question: "The present ages of three persons, Raj, Rajesh and Ravi is in proportions 4: 7: 9. Eight years ago, the sum of their ages was 56. What is the present age of Ravi?",
          options: [
            "43 years",
            "76 years",
            "36 years",
            "24 years",
          ],
          correct: "36 years",
        },
        {
          id: "5",
          question: "The present age of Aradhana and Aadrika is in the ratio 3:4. 5 years back, the ratio of their ages was 2:3. What is the present age of Aradhana?",
          options: [
            "12 years",
            "15 years",
            "20 years",
            "10 years",
          ],
          correct: "15 years",
        },
        {
          id: "6",
          question: " If the total ages of Iqbal and Shikhar is 12 years more than the total age of Shikhar and Charu. Charu is how many years younger than Iqbal?",
          options: [
            "11 years",
            "15 years",
            "None of the above",
            "Cannot be Determined",
          ],
          correct: "None of the above",
        },
        {
          id: "7",
          question: "Arun is 2 years older than Bharat who is twice as old as Charat. If the total of the ages of Arun, Bharat and Charat be 27, then how old is Bharat?",
          options: [
            "10 years",
            "12 years",
            "15 years",
            "13 years",
          ],
          correct: "10 years",
        },
        {
          id: "8",
          question: " A father is twice as old as his daughter. If 20 years ago, the age of the father was 10 times the age of the daughter, what is the present age of the father?",
          options: [
            "40 years",
            "45 years",
            "32 years",
            "33 years",
          ],
          correct: "45 years",
        },
        {
          id: "9",
          question: "The sum of the ages of a daughter and mother is 56 years; after four years the age of the mother will be three times that of the daughter. What is the age of the daughter and the mother respectively?",
          options: [
            "12 years, 30 years",
            "11 years, 34 years",
            "12 years, 44 years",
            "21 years, 42 years",
          ],
          correct: "12 years, 44 years",
        },
      ];

    // PROBABILITY MCQ'S JSON
    case "probability":
      return [
        {
          id: "0",
          question: "What is the probability of an impossible event?",
          options: [
            "1",
            "0",
            "Insufficient data",
            "Not defined",
          ],
          correct: "0",
        },
        {
          id: "1",
          question: "Two unbiased coins are tossed. What is the probability of getting at most one head?",
          options: [
            "3/4",
            "1/6",
            "1/3",
            "1/2",
          ],
          correct: "3/4",
        },
        {
          id: "2",
          question: "What’s the probability of drawing a red card or a card with a face (king, queen, or jack) from a standard deck of 52 cards?",
          options: [
            "13/52",
            "21/52",
            "29/52",
            "8/13",
          ],
          correct: "8/13",
        },
        {
          id: "3",
          question: "Who provided the definition for probability?",
          options: [
            "Archimedes",
            "Einstein",
            "Euclid",
            "Simon Laplace",
          ],
          correct: "Simon Laplace",
        },
        {
          id: "4",
          question: "Company A produces 10% defective products, Company B produces 20% defective products and C produces 5% defective products. If choosing a company is an equally likely event, then find the probability that the product chosen is defective",
          options: [
            "0.11",
            "0.21",
            "0.22",
            "0.12",
          ],
          correct: "0.12",
        },
        {
          id: "5",
          question: "A problem in mathematics is given to three students A, B and C. If the probability of A solving the problem is 1⁄2 and B not solving it is 1⁄4. The whole probability of the problem being solved is 63⁄64 then what is the probability of solving it?",
          options: [
            "1/2",
            "7/8",
            "1/64",
            "1/8",
          ],
          correct: "7/8",
        },
        {
          id: "6",
          question: "Which of the following is a table with all possible values of a random variable and its corresponding probabilities?",
          options: [
            "Probability Density Function",
            "Probability Mass Function",
            "Probability Distribution",
            "Cumulative distribution function",
          ],
          correct: "Probability Distribution",
        },
        {
          id: "7",
          question: "When rolling a fair six-sided die, what is the probability of obtaining an even number?",
          options: [
            "1/6",
            "1/3",
            "1/2",
            "2/3",
          ],
          correct: "2/3",
        },
        {
          id: "8",
          question: "Let there be two newly launched phones A and B. The probability that phone A has good battery life is 0.7 and the probability that phone B has a good battery life is 0.8. Then find the probability that a phone has good battery life.",
          options: [
            "0.45",
            "0.85",
            "0.75",
            "0.65",
          ],
          correct: "0.75",
        },
        {
          id: "9",
          question: "Suppose box A contains 4 green and 5 black coins and box B contains 6 green and 3 black coins. A coin is chosen at random from the box A and placed in box B. Finally, a coin is chosen at random from among those now in box B. What is the probability a blue coin was transferred from box A to box B given that the coin chosen from box B is green?",
          options: [
            "14/29",
            "15/29",
            "7/10",
            "1/2",
          ],
          correct: "15/29",
        },
      ];

    // PIPES AND CISTERNS MCQ'S JSON
    case "pipes":
      return [
        {
          id: "0",
          question: "It takes 6 hours for three pipes, X, Y and Z to fill a tank. When the three worked together for 2 hours, Z was closed and, X and Y filled the remaining tank in 7 hours. How many hours would it take Z alone to fill the tank?",
          options: [
            "15 hours",
            "23 hours",
            "12 hours",
            "14 hours",
          ],
          correct: "14 hours",
        },
        {
          id: "1",
          question: "It takes two pipes A and B, running together, to fill a tank in 6 minutes. It takes A 5 minutes less than B to fill the tank, then what will be the time taken by B alone to fill the tank?",
          options: [
            "10 minutes",
            "15 minutes",
            "20 minutes",
            "25 minutes",
          ],
          correct: "15 minutes",
        },
        {
          id: "2",
          question: "If two pipes can fill a tank in 24 and 20 minutes respectively and another pipe can empty 3 gallons of water per minute from that tank. When all the three pipes are working together, it takes 15 minutes to fill the tank. What is the capacity of the tank? ",
          options: [
            "100 gallons",
            "120 gallons",
            "125 gallons",
            "130 gallons",
          ],
          correct: "120 gallons",
        },
        {
          id: "3",
          question: "It takes 20 minutes for pipe A to fill the tank completely and it takes 30  minutes for pipe B to fill the tank completely. If both the inlets are opened together, then how much time will be taken to fill the tank completely? ",
          options: [
            "15 minutes",
            "12 minutes",
            "10 minutes",
            "22 minutes",
          ],
          correct: "12 minutes",
        },
        {
          id: "4",
          question: "Pipe A can fill the tank 3 times faster in comparison to pipe B. It takes 36 minutes for pipe A and B to fill the tank together. How much time will pipe B alone take to fill the tank?",
          options: [
            "100 minutes",
            "124 minutes",
            "134 minutes",
            "144 minutes",
          ],
          correct: "144 minutes",
        },
        {
          id: "5",
          question: "An inlet pipe fills at the rate of 10 litre in one minute and an outlet pipe can empty the same tank in 42 minutes. If both the pipes are opened in a full tank then the tank will be empty in 63 minutes. What is the capacity of the tank (in litres)?",
          options: [
            "840",
            "1048",
            "1260",
            "1520",
          ],
          correct: "1260",
        },
        {
          id: "6",
          question: "Pipe A can fill a tank in 45 hr, pipe B is 50% more efficient than A and pipe C can fill the same tank in 7.5 hr less than B. A and B opened together for X hr and closed after that and pipe C fill remaining tank in (X + 9) hr, if the ratio between tank filled by (A + B) together to tank filled by pipe C is 1 : 2. Find the value of X ?",
          options: [
            "3 hr",
            "4 hr",
            "6 hr",
            "8 hr",
          ],
          correct: "6 hr",
        },
        {
          id: "7",
          question: "Two pipes can fill a tank in 15 hours and 20 hours respectively, while the third pipes can empty it in 30 hours. If all the pipes are opened simultaneously, the empty tank will be filled in",
          options: [
            "10 hours",
            "12 hours",
            "15 hours",
            "14 hours",
          ],
          correct: "12 hours",
        },
        {
          id: "8",
          question: "A cistern can be filled completely by pipe A and B together in 12 hours. If pipe A works with twice speed while pipe B work with 50% more speed than cistern can be filled completely in 7 hours. Find the capacity of cistern if flow of water through pipe A is 2.5ℓ/ minute.",
          options: [
            "2800 litres",
            "3150 litres",
            "3650 litres",
            "4200 litres",
          ],
          correct: "4200 litres",
        },
        {
          id: "9",
          question: "5 inlet pipes (same capacity) can fill a tank in same time in which 3 outlet pipes (same capacity) can empty it. If 2 inlet and one outlet pipe is opened for first minutes and 5 inlet and 2 outlet pipe open for 2nd minute and process continues till tank is completely filled in 30 minutes. Find the time in which 2 outlet pipe can empty the completely filled tank.",
          options: [
            "9 minutes",
            "12 minutes",
            "2 minutes",
            "10 minutes",
          ],
          correct: "9 minutes",
        },
      ];

    // PROFIT AND LOSS MCQ'S JSON
    case "profits":
      return [
        {
          id: "0",
          question: "A person sold a stove for Rs. 423 and incurred a loss of 6%. At what price would it be sold so as to earn a profit of 8%?",
          options: [
            "Rs. 525",
            "Rs. 500",
            "Rs. 490",
            "Rs. 486",
          ],
          correct: "Rs. 486",
        },
        {
          id: "1",
          question: "A fruit seller buys lemons at 2 for a rupee and sells then at 5 for three rupees. His gain percent is",
          options: [
            "10%",
            "15%",
            "20%",
            "25%",
          ],
          correct: "20%",
        },
        {
          id: "2",
          question: "A sells a car to B at 10% loss. If B sells it for Rs. 54000 and gains 20%, the cost price of the car for A was",
          options: [
            "Rs. 25000",
            "Rs. 50000",
            "Rs. 37500",
            "Rs. 60000",
          ],
          correct: "Rs. 50000",
        },
        {
          id: "3",
          question: "Ramesh sold a statue for a price 25% higher than the original price of the statue. He had however bought the statue at 20% discount on the original price. With the profit of Rs. 2025, find the original price of the statue.",
          options: [
            "Rs. 6000",
            "Rs. 7500",
            "Rs. 3500",
            "Rs. 4500",
          ],
          correct: "Rs. 4500",
        },
        {
          id: "4",
          question: "If selling price of 40 articles is equal to cost price of 50 articles, the loss or gain percent is",
          options: [
            "25% loss",
            "20% loss",
            "25% gain",
            "20% gain",
          ],
          correct: "25% gain",
        },
        {
          id: "5",
          question: "Two bicycles were sold for Rs. 3990 each, gaining 5% on one and losing 5% on the other. The gain or loss percent on the whole transaction is",
          options: [
            "Neither gain nor loss",
            "2.5% gain",
            "2.5% loss",
            "0.25% loss",
          ],
          correct: "0.25% loss",
        },
        {
          id: "6",
          question: "The ratio of cost price and selling price is 4:5. The profit percent is",
          options: [
            "10%",
            "20%",
            "25%",
            "30%",
          ],
          correct: "25%",
        },
        {
          id: "7",
          question: "If a person sells a ‘sari’ for Rs. 5200, making a profit of 30%, then the cost price of the sari is",
          options: [
            "Rs. 4420",
            "Rs. 4000",
            "Rs. 3900",
            "Rs. 3800",
          ],
          correct: "Rs. 4000",
        },
        {
          id: "8",
          question: "A shopkeeper earns a profit of 15% after selling a book at 20% discount on the printed price. The ratio of the cost price and printed price of the book is?",
          options: [
            "20:23",
            "23:20",
            "16:23",
            "23:16",
          ],
          correct: "16:23",
        },
        {
          id: "9",
          question: "Simran bought pet food worth Rs. 56000. She then sold 1/3rd of it incurring a loss of 40%. What profit she must earn on rest of the supplies to nullify this loss?",
          options: [
            "25%",
            "20%",
            "45%",
            "50%",
          ],
          correct: "20%",
        },
      ];

    default:
      return [];
  }
}


// REQUIRED VARIABLE DECLARATIONS
let timeLeft = document.querySelector(".time_left");
let quizContainer = document.getElementById("container");
let nextBtn = document.getElementById("next_button");
let countOfQuestion = document.querySelector(".number_of_question");
let displayContainer = document.getElementById("display_container");
let score = document.querySelector(".user_score");
const displayBtn = document.getElementById("display-btn");
let inputField = document.getElementById("username");
const errorMsgDiv = document.getElementById("errorMsg");
const sectionBtns = document.querySelectorAll(".section-btn");
let userName = document.getElementById("user_name");
let questionCount;
let scoreCount = 0;
let count = 11;
let countdown;
let selectedCategory;
let currentQuestionIndex;
var displayNext;
let quizData;
let startTime;
let wrong = 0;
let resultName;



// TEXT USER NAME INPUT
displayBtn.addEventListener("click", () => {
  var inputData = inputField.value.trim();
  resultName = inputData;
  if (inputData !== "") {
    userName.textContent = `Hello ${inputData}`;
    inputField.value = "";
    errorMsgDiv.textContent = "";
  } else {
    inputField.setAttribute("required", "true");
    errorMsgDiv.textContent = "Input field is required.";
  }
});

// SELECTED CATEGORY MCQ'S RETRIEVAL FUNCTION
function selectCategory(category) {
  selectedCategory = category;
  quizData = getQuizDataByCategory(category);

  currentQuestionIndex = 0;

  questionsAttempted = 0;
  correctAnswers = 0;
  document.getElementById("homeContainer").style.display = "none";
  document.getElementById("display_container").style.display = "block";
  displayQuiz(category);
}


// FUNCTION TO DISPLAY THE QUIZ PAGE
function displayQuiz() {
  document.getElementById("display_container").style.display = "block ";
  const cat = selectedCategory;
  console.log(cat);
  document.getElementById('title').innerHTML = cat;
  const quizArray = quizData;

  // Question number Count and Next button in the Quiz Page
  nextBtn.addEventListener("click", (displayNext = () => {
    questionCount += 1;
    if (questionCount == quizArray.length) {
      displayContainer.classList.add("hide");
      endQuiz();
    }
    else {
      countOfQuestion.innerHTML = questionCount + 1 + "/" + quizArray.length;
      quizDisplay(questionCount);
      count = 11;
      clearInterval(countdown);
      timerDisplay();

    }
  })
  );


  // timer Count down
  const timerDisplay = () => {
    countdown = setInterval(() => {
      count--;
      timeLeft.innerHTML = `${count}`;
      if (count == 0) {
        clearInterval(countdown);
        displayNext();
      }
    }, 1000);
  };


  // used to display the quiz 
  const quizDisplay = (questionCount) => {
    let quizCards = document.querySelectorAll(".container_mid");

    quizCards.forEach((card) => {
      card.classList.add("hide");
    });
    quizCards[questionCount].classList.remove("hide");
  };


  // used to create the quiz elements including options
  function quizCreator() {
    quizArray.sort(() => Math.random() - 0.5);

    for (let i of quizArray) {
      i.options.sort(() => Math.random() - 0.5);
      let div = document.createElement("div");
      div.classList.add("container_mid", "hide");

      let question_DIV = document.createElement("p");
      question_DIV.classList.add("question");
      question_DIV.innerHTML = i.question;
      div.appendChild(question_DIV);

      div.innerHTML += `
    <button class="option_div" onclick="checker(this)">${i.options[0]}</button> 
    <button class="option_div" onclick="checker(this)">${i.options[1]}</button> 
    <button class="option_div" onclick="checker(this)">${i.options[2]}</button> 
    <button class="option_div" onclick="checker(this)">${i.options[3]}</button> 
    `;

      quizContainer.appendChild(div);
    }
  }

  clearInterval(countdown);
  timerDisplay();
  quizCreator();
  quizDisplay(questionCount);

}


// used to check the answer is correct or wrong and manipulate the score accordingly
function checker(userOption) {
  let userSolution = userOption.innerText;
  let question = document.getElementsByClassName("container_mid")[questionCount];
  let options = question.querySelectorAll(".option_div");

  if (userSolution === quizData[questionCount].correct) {
    userOption.classList.add("correct");
    scoreCount += 10;
    score.innerHTML = scoreCount;
  }

  else {
    userOption.classList.add("incorrect");
    wrong += 1;
    options.forEach((element) => {
      if (element.innerText == quizData[questionCount].correct) {
        element.classList.add("correct");
      }
    });
  }

  clearInterval(countdown);
  options.forEach((element) => {
    element.disabled = true;
  });
}


// used to initialise 
function initial() {

  quizContainer.innerHTML = "";
  questionCount = 0;
  scoreCount = 0;
  count = 11;

}
displayContainer.classList.remove("hide");
initial();


// FUNCTION TO DISPLAY THE RESULTS PAGE
function endQuiz() {
  totalTimeTaken = Math.floor((Date.now() - startTime) / 1000); // Calculate total time taken

  document.getElementById("display_container").style.display = "none";
  document.getElementById("resultContainer").style.display = "block";

  const totalQuestions = quizData.length;
  const correctAnswers = scoreCount / 10;
  const attempted = correctAnswers + wrong;
  const percentage = ((correctAnswers / totalQuestions) * 100).toFixed(2);

  document.getElementById("name").textContent = resultName;
  document.getElementById("totalTimeTaken").textContent = countdown;
  document.getElementById("totalQuestions").textContent = totalQuestions;
  document.getElementById("attempted").textContent = attempted;
  document.getElementById("correctAnswers").textContent = correctAnswers;
  document.getElementById("wrongAnswers").textContent = wrong;
  document.getElementById("percentage").textContent = percentage;
}

// FUNCTION TO GO BACK TO THE HOME PAGE 
function returnHome() {
  document.getElementById("resultContainer").style.display = "none";
  document.getElementById("homeContainer").style.display = "block";
  location.reload();
}