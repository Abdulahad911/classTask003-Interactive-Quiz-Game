// javascript
var marks = 0;
var correct = 0;
var totalMarks = 0;
var inc = 0;
var questions = 0;
// question1 array 
var question1 = document.getElementById('question1');
question1.innerText = ['Question1: Full form of html is?']
var answers1 = document.getElementById('answers1');
answers1 = ['Cascading styling sheet', 'High markup language', 'Hypertext markup language', 'None of the above']
document.getElementById('answer1').innerText = answers1[0]
document.getElementById('answer2').innerText = answers1[1]
document.getElementById('answer3').innerText = answers1[2]
document.getElementById('answer4').innerText = answers1[3]
// question2 array 
var question2 = document.getElementById('question2');
question2.innerText = ['Question2: Full form of CSS is?']
var answers2 = document.getElementById('answers2');
answers2 = ['Cascading styling sheet', 'Computer Style Sheets', 'Hypertext markup language', 'Colorful Style Sheets']
document.getElementById('answer5').innerText = answers2[0]
document.getElementById('answer6').innerText = answers2[1]
document.getElementById('answer7').innerText = answers2[2]
document.getElementById('answer8').innerText = answers2[3]
// question3 array 
var question3 = document.getElementById('question3');
question3.innerText = ['Question3: Which language is mostly used for web development?']
var answer3 = document.getElementById('answer3');
answer3 = ['Python', 'Java', 'JavaScript', 'C++']
document.getElementById('answer9').innerText = answer3[0]
document.getElementById('answer10').innerText = answer3[1]
document.getElementById('answer11').innerText = answer3[2]
document.getElementById('answer12').innerText = answer3[3]
// question4 array 
var question4 = document.getElementById('question4');
question4.innerText = ['Question4: What is 2 + "2"?']
var answer4 = document.getElementById('answer3');
answer4 = ["3", "4", "22", "6"]
document.getElementById('answer13').innerText = answer4[0]
document.getElementById('answer14').innerText = answer4[1]
document.getElementById('answer15').innerText = answer4[2]
document.getElementById('answer16').innerText = answer4[3]
// question5 array 
var question5 = document.getElementById('question5');
question5.innerText = ['Question5: What is 2 - "2"?']
var answer5 = document.getElementById('answer5');
answer5 = ["3", "0", "22", "6"]
document.getElementById('answer17').innerText = answer5[0]
document.getElementById('answer18').innerText = answer5[1]
document.getElementById('answer19').innerText = answer5[2]
document.getElementById('answer20').innerText = answer5[3]
// question6 array 
var question6 = document.getElementById('question6');
question6.innerText = ['Question5: What is 2 * "2"?']
var answer6 = document.getElementById('answer6');
answer6 = ["3", "0", "22", "4"]
document.getElementById('answer21').innerText = answer6[0]
document.getElementById('answer22').innerText = answer6[1]
document.getElementById('answer23').innerText = answer6[2]
document.getElementById('answer24').innerText = answer6[3]
// question7 array 
var question7 = document.getElementById('question7');
question7.innerText = ['Question7: Which of the following is a correct way to declare a JavaScript variable? ']
var answer7 = document.getElementById('answer7');
answer7 = ["let x = 10;", "var x == 10;", "x := 10;", "int x = 10;"]
document.getElementById('answer25').innerText = answer7[0]
document.getElementById('answer26').innerText = answer7[1]
document.getElementById('answer27').innerText = answer7[2]
document.getElementById('answer28').innerText = answer7[3]
// question8 array 
var question8 = document.getElementById('question8');
question8.innerText = ['Question8: Which of the following is NOT a JavaScript data type?']
var answer8 = document.getElementById('answer8');
answer8 = ['String', 'Number', 'Character', 'Boolean']
document.getElementById('answer29').innerText = answer8[0]
document.getElementById('answer30').innerText = answer8[1]
document.getElementById('answer31').innerText = answer8[2]
document.getElementById('answer32').innerText = answer8[3]
// question9 array 
var question9 = document.getElementById('question9');
question9.innerText = ['Question9: What is the output of `console.log(typeof NaN);`?']
var answer9 = document.getElementById('answer9');
answer9 = ['number', 'NaN', 'undefined', 'object']
document.getElementById('answer33').innerText = answer9[0]
document.getElementById('answer34').innerText = answer9[1]
document.getElementById('answer35').innerText = answer9[2]
document.getElementById('answer36').innerText = answer9[3]
// question10 array 
var question10 = document.getElementById('question10');
question10.innerText = ['Question10: What is 6 / "2"?']
var answer10 = document.getElementById('answer10');
answer10 = ['4', '6 / 2', '2', '3']
document.getElementById('answer37').innerText = answer10[0]
document.getElementById('answer38').innerText = answer10[1]
document.getElementById('answer39').innerText = answer10[2]
document.getElementById('answer40').innerText = answer10[3]



function checkAnswer(button, correctAnswer) {
    var selectedAnswer = button.innerText;

    if (selectedAnswer === correctAnswer) {
        marks += 2;
        correct += 1;
        alert(`Correct! You have got ${marks}/20 marks`);
        alert(`you got correct answer ${correct}/10 and incorrect ${inc}`)
        button.style.backgroundColor = '#d4edda';

    } else {
        inc += 1;

        alert(`Incorrect Try again!`);


        button.style.backgroundColor = '#f8d7da';
    }
    questions = inc + correct;


    if (questions === 10) {

        var playAgain = prompt("Do you want to play again? Type 'yes' or 'no'");
        if (playAgain.toLowerCase() === 'yes') {

            alert("Restarting the game...");

        } else if (playAgain.toLowerCase() === 'no') {

            alert("Thanks for playing!");
        } else {

            alert("Please enter 'yes' or 'no'.");
        }

    }


}
