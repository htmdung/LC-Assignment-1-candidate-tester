// Refer to the online book to access detailed instructions for this project.

// URL = https://education.launchcode.org/intro-to-professional-web-dev/assignments/candidateQuiz.html

// Welcome to your first assignment.
// Login and then fork this repl.it
// Add your code here. You can do it!

//Define variables for candidate's name, the candidate's response
//Ask for the candidate's name, a quiz question.
//Display the question and prompt the candidate for an answer. 
//Check the candidate's answer to see if it is correct. Provide basic feedback to the student. This should include their name and whether their answer was correct.

//Redefine your question and correct answer variables to be arrays. Fill these arrays with the questions and answers listed in the table below.

const input = require('readline-sync');
let fullName = input.question("Candidate Name: ");

let arrayQuestions = ["1) True or false: 5000 meters = 5 kilometers.", "2) (5 + 3)/2 * 10 = ?", "3) Given the array [8, \"Orbit\", \"Trajectory\", 45], what entry is at index 2?", "4) Who was the first American woman in space?", "5) What is the minimum crew size for the International Space Station (ISS)?"]
let arrayAnswers = ["true", "40", "trajectory", "sally ride", "3"]
let userAnswers = [];

let numberOfCorrectAnswers = 0;
let overallGrade = 0;

for (let i = 0; i < arrayQuestions.length; i++){
  userAnswers.push(input.question(arrayQuestions[i]+ "\nYour Answer: "));
  console.log(`Correct Answer: ${arrayAnswers[i]}\n`);
    
    //Checking for the correct answer should be case insensitive
    //Calculate numberOfCorrectAnswers
    if(userAnswers[i].toLowerCase() === arrayAnswers[i].toLowerCase()){
      numberOfCorrectAnswers++;
    }
}

//Calculate the candidate's score and print the results. 
//(Number of Correct Answers) / (Number of Questions) * 100
overallGrade = (numberOfCorrectAnswers / arrayQuestions.length)*100;

console.log(`>>> Overall Grade: ${overallGrade}% (${numberOfCorrectAnswers} of ${arrayQuestions.length} responses correct) <<<`);
if (overallGrade >= 80){
    console.log(`>>> Status: PASSED <<<`);
}else {
    console.log(`>>> Status: FAILED <<<`);
}
