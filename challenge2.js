//Speed detector

function checkSpeed() {
    let speed = prompt("Enter the speed of the car") //Asks the user to enter the speed of the car
    speed = parseInt(speed)

    if(isNaN(speed) || speed <0) { //Checks if the speed entered is a number
        console.log("Please enter a valid speed")
        return; //exits/stops the function early if the input is not correct
    }

    if(speed <70) {
        console.log("Ok"); //returns Ok if the speed is below 70 and stops running the code
        return;
    }

    const calculatePoints = (speed) => Math.floor(speed -70/5) //function that calculates the demerit points(above the speed limit)

    let points = calculatePoints(speed) // calculates the demerit points for the given speed and returns total number of demerit points
    console.log(`Points: ${points}`)

    if (points >12) {
        console.log("License suspended") //returns License suspended if the points exceed 12 points
    }    
}
checkSpeed(); //calls the function to check the car's speed