//Set Timer Function to begin the game
var timeInSecs;
var ticker;

function startTimer(secs){
timeInSecs = parseInt(secs)-1;
ticker = setInterval("tick()",1000); // every second
}

function tick() {
	var secs = timeInSecs;
	if (secs>0) {
		timeInSecs--;
	}

else {	
clearInterval(ticker); window.alert("Sorry, time is up! Review score at bottom of screen") // stop counting at zero
// startTimer(60);  // remove forward slashes in front of startTimer to repeat if required
}

document.getElementById("counter").innerHTML = secs;
}

startTimer(60); // 60 seconds 

//Function to test all Quiz Questions

	document.getElementById("form1").onsubmit=function() { //Whenever this form is submitted - run this function
	cityvar = document.getElementsByName("city"); // For each question we creata a variable. Then we are going to say get elements by "name" from the HTML Document. It's going to capture the score of the variable. 
	for(i=0; i<cityvar.length; i++) { //For loop runs through each one of the elements in the length of the variable "var".  
		if (cityvar[i].checked) { //If it's "checked" then it passes the score as a value and converts it into an integer and then stores the new value in "vscore" (which will be used later).
			ascore = parseInt(cityvar[i].value);	
	}
	}//end for cityvar 

	hollywoodvar = document.getElementsByName("Hollywood"); // For each question we creata a variable. Then we are going to say get elements by "name" from the HTML Document. It's going to capture the score of the variable. 
	for(i=0; i<hollywoodvar.length; i++) { //For loop runs through each one of the elements in the length of the variable "var".  
		if (hollywoodvar[i].checked) { //If it's "checked" then it passes the score as a value and converts it into an integer and then stores the new value in "vscore" (which will be used later).
			bscore = parseInt(hollywoodvar[i].value);	
	}
	}//end for hollywoodvar 

	moneyvar = document.getElementsByName("money"); // For each question we creata a variable. Then we are going to say get elements by "name" from the HTML Document. It's going to capture the score of the variable. 
	for(i=0; i<moneyvar.length; i++) { //For loop runs through each one of the elements in the length of the variable "var".  
		if (moneyvar[i].checked) { //If it's "checked" then it passes the score as a value and converts it into an integer and then stores the new value in "vscore" (which will be used later).
			cscore = parseInt(moneyvar[i].value);	
	}
	}//end for moneyvar 

	megavar = document.getElementsByName("mega"); // For each question we creata a variable. Then we are going to say get elements by "name" from the HTML Document. It's going to capture the score of the variable. 
	for(i=0; i<megavar.length; i++) { //For loop runs through each one of the elements in the length of the variable "var".  
		if (megavar[i].checked) { //If it's "checked" then it passes the score as a value and converts it into an integer and then stores the new value in "vscore" (which will be used later).
			dscore = parseInt(megavar[i].value);	
	}
	}//end for megavar 

	capitalvar = document.getElementsByName("capital"); // For each question we creata a variable. Then we are going to say get elements by "name" from the HTML Document. It's going to capture the score of the variable. 
	for(i=0; i<capitalvar.length; i++) { //For loop runs through each one of the elements in the length of the variable "var".  
		if (capitalvar[i].checked) { //If it's "checked" then it passes the score as a value and converts it into an integer and then stores the new value in "vscore" (which will be used later).
			escore = parseInt(capitalvar[i].value);	
	}
	}//end for megavar

	bronzevar = document.getElementsByName("bronze"); // For each question we creata a variable. Then we are going to say get elements by "name" from the HTML Document. It's going to capture the score of the variable. 
	for(i=0; i<bronzevar.length; i++) { //For loop runs through each one of the elements in the length of the variable "var".  
		if (bronzevar[i].checked) { //If it's "checked" then it passes the score as a value and converts it into an integer and then stores the new value in "vscore" (which will be used later).
			fscore = parseInt(bronzevar[i].value);	
	}
	}//end for bronzevar 

	slotsvar = document.getElementsByName("slots"); // For each question we creata a variable. Then we are going to say get elements by "name" from the HTML Document. It's going to capture the score of the variable. 
	for(i=0; i<slotsvar.length; i++) { //For loop runs through each one of the elements in the length of the variable "var".  
		if (slotsvar[i].checked) { //If it's "checked" then it passes the score as a value and converts it into an integer and then stores the new value in "vscore" (which will be used later).
			gscore = parseInt(slotsvar[i].value);	
	}
	}//end for slotsvar  

	magicvar = document.getElementsByName("magic"); // For each question we creata a variable. Then we are going to say get elements by "name" from the HTML Document. It's going to capture the score of the variable. 
	for(i=0; i<magicvar.length; i++) { //For loop runs through each one of the elements in the length of the variable "var".  
		if (magicvar[i].checked) { //If it's "checked" then it passes the score as a value and converts it into an integer and then stores the new value in "vscore" (which will be used later).
			hscore = parseInt(magicvar[i].value);	
	}
	}//end for magicvar   

	luxorvar = document.getElementsByName("luxor"); // For each question we creata a variable. Then we are going to say get elements by "name" from the HTML Document. It's going to capture the score of the variable. 
	for(i=0; i<luxorvar.length; i++) { //For loop runs through each one of the elements in the length of the variable "var".  
		if (luxorvar[i].checked) { //If it's "checked" then it passes the score as a value and converts it into an integer and then stores the new value in "vscore" (which will be used later).
			iscore = parseInt(luxorvar[i].value);	
	}
	}//end for luxorvar 

	oceanvar = document.getElementsByName("ocean"); // For each question we creata a variable. Then we are going to say get elements by "name" from the HTML Document. It's going to capture the score of the variable. 
	for(i=0; i<oceanvar.length; i++) { //For loop runs through each one of the elements in the length of the variable "var".  
		if (oceanvar[i].checked) { //If it's "checked" then it passes the score as a value and converts it into an integer and then stores the new value in "vscore" (which will be used later).
			jscore = parseInt(oceanvar[i].value);	
	}
	}//end for oceanvar  

	result = ascore + bscore + cscore + dscore + escore + fscore + gscore + hscore + iscore +jscore; //This is taking the results of all the variables and then adding them together for a final score
	clearInterval(ticker);
	document.getElementById("grade").innerHTML = result; // Then pass this result into the page of the HTML to be displayed on the page.

	//Stops the game and displays the result 

	//Additional Functionality
	if (result == 0) {result2 = "I don't think you have ever been to Las Vegas!"};
	if (result == 10) {result2 = "You need to spend more time. Try again."};
	if (result == 20) {result2 = "You need to spend more time. Try again."};
	if (result == 30) {result2 = "You need to spend more time. Try again."};
	if (result == 40) {result2 = "You need to spend more time. Try again."};
	if (result == 50) {result2 = "You need to spend more time. Try again."};
	if (result == 60) {result2 = "I think you could do better. Try again."};
	if (result == 70) {result2 = "So close. Try again."};
	if (result == 80) {result2 = "Good Job!"};
	if (result == 80) {result2 = "Great Job!"};
	if (result == 100) {result2 = "Excellent! You are a real Las Vegas historian"};
	document.getElementById("grade2").innerHTML = result2; 

	return false; // required to not refresh the page; just leave this here 
	} //this ends the submit function

	
