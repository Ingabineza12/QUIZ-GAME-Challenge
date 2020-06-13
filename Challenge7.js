/////////////////////////////
// CODING CHALLENGE


/*
--- Let's build a fun quiz game in the console! ---

1. Build a function constructor called Question to describe a question. A question should include:
a) question itself
b) the answers from which the player can choose the correct one (choose an adequate data structure here, array, object, etc.)
c) correct answer (I would use a number for this)

2. Create a couple of questions using the constructor

3. Store them all inside an array

4. Select one random question and log it on the console, together with the possible answers (each question should have a number) (Hint: write a method for the Question objects for this task).

5. Use the 'prompt' function to ask the user for the correct answer. The user should input the number of the correct answer such as you displayed it on Task 4.

6. Check if the answer is correct and print to the console whether the answer is correct ot nor (Hint: write another method for this).

7. Suppose this code would be a plugin for other programmers to use in their code. So make sure that all your code is private and doesn't interfere with the other programmers code (Hint: we learned a special technique to do exactly that).


// ANSWER

(function(){
    
 function Question(question,answers,correctAns){
    
    this.question = question;
    this.answers = answers;
    this.correctAns = correctAns;
}


var question1 = new Question( 'what color do you love the most?',['green','blue','red'], 1);
var question2 = new Question('what is your marital status?',['single','married','divorced',] , 0);
var question3 = new Question('which day of the week you like the most?',['monday','friday','tuesday','saturday'], 3);

var qtnArray = [question1,question2,question3];
var ran = Math.floor(Math.random() * qtnArray.length );

Question.prototype.ShowQuestion = function(){
    console.log(this.question);
    for( var i = 0; i<= this.answers.length;i++){
    console.log(i + ': ' + this.answers[i])
    }
};

Question.prototype.checkAnswer = function(ans){
    if(ans === this.correctAns){
        console.log('the answer is correct!');
    }else{
        console.log('the answer is wrong');
    }
}

qtnArray[ran].ShowQuestion();

var answer = parseInt(prompt('Please select the correct answer from the given question.'));
qtnArray[ran].checkAnswer(answer);

    })();

*/

/*
--- Expert level ---

8. After you display the result, display the next random question, so that the game never ends (Hint: write a function for this and call it right after displaying the result)

9. Be careful: after Task 8, the game literally never ends. So include the option to quit the game if the user writes 'exit' instead of the answer. In this case, DON'T call the function from task 8.

10. Track the user's score to make the game more fun! So each time an answer is correct, add 1 point to the score (Hint: I'm going to use the power of closures for this, but you don't have to, just do this with the tools you feel more comfortable at this point).

11. Display the score in the console. Use yet another method for this.
*/


(function(){
    
 function Question(question,answers,correctAns){
    
    this.question = question;
    this.answers = answers;
    this.correctAns = correctAns;
}


var question1 = new Question( 'what color do you love the most?',['green','blue','red'], 1);
var question2 = new Question('what is your marital status?',['single','married','divorced',] , 0);
var question3 = new Question('which day of the week you like the most?',['monday','friday','tuesday','saturday'], 3);

//var qtnArray = [question1,question2,question3];
//var ran = Math.floor(Math.random() * qtnArray.length );

Question.prototype.ShowQuestion = function(){
    console.log(this.question);
    for( var i = 0; i< this.answers.length;i++){
    console.log(i + ': ' + this.answers[i])
    }
};

Question.prototype.checkAnswer = function(ans,callback){
    
    var round;
    
    if(ans === this.correctAns){
        console.log('the answer is correct!');
        
          round = callback(true);
        
    }else{
        console.log('the answer is wrong');
        
        round = callback(false);
    }
     
    
    this.showScore(round);
}


    
Question.prototype.showScore = function(score){
    
    console.log('your current score is ' + score);
}

//qtnArray[ran].();

//var answer = parseInt(prompt('Please select the correct answer from the given question.'));
//qtnArray[ran].checkAnswer(answer);
    
var qtnArray = [question1,question2,question3];
   
    
    function score(){
        
        var round = 0;
    return function(correct){
        
        if(correct){
            round++; 
        }
        return round;
    }
    }
    
    var scoreStore = score();
    
    
function nextQuestion(){
    var ran = Math.floor(Math.random() * qtnArray.length );
    
    qtnArray[ran].ShowQuestion();
    
    var answer = prompt('Please select the correct answer from the given question.');
    
  
    if(answer !== 'exit'){
        
        qtnArray[ran].checkAnswer(parseInt(answer), scoreStore);      //here we want a number! that's why we moved the parseInt
        nextQuestion();
    }
    
    
}
    
nextQuestion();
    
     })();
































