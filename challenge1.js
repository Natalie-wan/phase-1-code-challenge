//Student grade generator

function getGrade(marks) {
    marks = parseInt(marks); //Ensures that the input is treated like a number

    if (marks < 0 || marks > 100 || isNaN(marks)) {
        console.log("Please enter a valid number between 0 and 100."); //Checks if the input is valid.
        return; 
    } 

    //Checks the grade based on the marks and returns the right grade
    if (marks > 79) {
        console.log("Grade: A");
    } else if (marks >= 60) {
        console.log("Grade: B");
    } else if (marks >= 50) {
        console.log("Grade: C");
    } else if (marks >= 40) {
        console.log("Grade: D");
    } else {
        console.log("Grade: E");
    }
}
getGrade(50); 
