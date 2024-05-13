// Complete the BMI calculator with loop, so that when the BMI is calculated the user answers a question
//  "do you wish to continue?" If the response is yes, the BMI calculator should again ask for 
//  user's weight and height.

while(true){

    let mass=parseFloat(prompt(" Enter your mass in kg"))
    let height=parseFloat(prompt("Enter your height in cms"))
    let bmi=mass/((height)/100)**2
    
    if (bmi<18.5){
        alert("you are under weight")
    }
    else if (bmi<25){
        alert("you have normal bmi")
    }
    else if(bmi<30)
        {
            alert("you are over weight")
        }
        else{
            alert("you are obese")
        }
         let continuePrompt = prompt("Do you want to continue? (yes/no)");   
        if (continuePrompt.toLowerCase()!== 'yes') {
            break; // Exit the loop if the user doesn't want to continue
    }
        
    }
    
    
    