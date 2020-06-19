var questionNum = 0;													
var question = '<h1>Hello,what is your name?</h1>';				 

var output = document.getElementById('output');				
output.innerHTML = question;													

function bot() { 
    var input = document.getElementById("input").value;
    console.log(input);

    if (questionNum == 0) {
    output.innerHTML = '<h1>hello ' + input + '</h1>';
    document.getElementById("input").value = "";   		
    question = '<h1>Where do you come from?</h1>';			    		
    setTimeout(timedQuestion, 1000);									
    }
    
    else if (questionNum == 1) {
    output.innerHTML = '<h1>Wow!'+input+ ' is such a cool place </h1>';
    document.getElementById("input").value = "";   
    question = '<h1>In a scale of 1- 10, how would you rate HNG internship?</h1>';					      	
    setTimeout(timedQuestion, 2000);
    }   


     else if (questionNum == 2) {
     output.innerHTML = '<h1>Thank you, It was nice chatting with you </h1>';
       
    } 
            
}


function timedQuestion() {
    output.innerHTML = question;
}


$(document).keypress(function(e) {
  if (e.which == 13) {
    bot();																						
    questionNum++;																		
  }
});
