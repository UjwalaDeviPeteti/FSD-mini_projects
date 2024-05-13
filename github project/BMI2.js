// [OPTIONAL TASK]: In India mostly people know thier height in feet and inches,
//  try to get input in feet and inches and then calculate the BMI.

while (true) {
    let mass = parseFloat(prompt("Enter your mass in kg"));
    let feet = parseInt(prompt("Enter your height in feet"));
    let inches = parseInt(prompt("Enter your height in inches"));
    let height = (feet * 12 + inches)*2.54; //1 feet=12 inches and 1 inch=2.54 centimeters
    let bmi = mass / ((height) / 100) ** 2;

    if (bmi < 18.5) {
        alert("You are underweight");
    } else if (bmi < 25) {
        alert("You have normal BMI");
    } else if (bmi < 30) {
        alert("You are overweight");
    } else {
        alert("You are obese");
    }

    let continuePrompt = prompt("Do you want to continue? (yes/no)");
    if (continuePrompt.toLowerCase() !== 'yes') {
        break; // Exit the loop if the user doesn't want to continue
    }
}
