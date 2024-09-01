
function checkAnswer(button, correctAnswer) {
    const selectedAnswer = button.innerText;
    if (selectedAnswer === correctAnswer) {
        
        alert("That's correct!")
        button.style.backgroundColor = '#d4edda'; 
    } else {
        
        button.style.backgroundColor = '#f8d7da'; 
        alert("That's Incorrect")
    }
    
}

