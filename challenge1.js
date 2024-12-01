//Student grade generator

function getGrade() {
    let marks = prompt("Enter the student's marks(0-100):"); //Asks the user to input the student's marks
    marks = parseInt(marks);

    if (marks <0 || marks >100 || isNaN(marks)) {
        console.log("Please enter a valid number between 0 and 100."); //Checks if the input is valid.Number should be between 0 and 100
        return 
    } //Checks the grade based on the marks and returns the right grade
    if (marks >79) {
        console.log("Grade: A")
    } else if (marks >=60) {
        console.log("Grade: B")
    } else if (marks >=50) {
        console.log("Grade: C")
    } else if (marks >=40) {
        console.log("Grade: D")
    } else {
        console.log("Grade: E")
    }
    
}
getGrade();