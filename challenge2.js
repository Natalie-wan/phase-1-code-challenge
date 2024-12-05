//Speed detector

function checkSpeed(speed) {
    speed = parseInt(speed); //Ensures that the input is treated like a number

    if (isNaN(speed) || speed < 0) { //Checks if the speed entered is a number and not a negative
        console.log("Please enter a valid speed.");
        return; //Exits the function early if input is invalid
    }

    if (speed < 70) {
        console.log("Ok"); //Returns "Ok" if the speed is below 70
        return;
    }

    //Function that calculates demerit points for speeds above the limit
    const calculatePoints = (speed) => Math.floor((speed - 70) / 5); 

    let points = calculatePoints(speed); //Calculates demerit points
    console.log(`Points: ${points}`);

    if (points > 12) {
        console.log("License suspended"); //Suspension of license if points exceed 12
    }
}

checkSpeed(150);
