//Net salary calculator

function calculateNetSalary(basicSalary, benefits) {
    //Converts the inputs to numbers
    basicSalary = parseFloat(basicSalary);
    benefits = parseFloat(benefits);

    if (isNaN(basicSalary) || isNaN(benefits)) { //confirms that the inputs are numbers
        console.log("Please enter valid numbers for both basic salary and benefits.");
        return; //exits the function if the input is wrong
    }

    const grossSalary = basicSalary + benefits;

    //Calculation of tax (PAYE)
    let tax;
    if (grossSalary <= 24000) {
        tax = grossSalary * 0.1; // 10%
    } else if (grossSalary <= 32333) {
        tax = grossSalary * 0.25; // 25%
    } else if (grossSalary <= 500000) {
        tax = grossSalary * 0.3; // 30%
    } else if (grossSalary <= 800000) {
        tax = grossSalary * 0.325; // 32.5%
    } else {
        tax = grossSalary * 0.35; // 35%
    }

    //NHIF Deductions
    let nhif;
    if (grossSalary <= 5999) {
        nhif = 150;
    } else if (grossSalary <= 7999) {
        nhif = 300;
    } else if (grossSalary <= 11999) {
        nhif = 400;
    } else if (grossSalary <= 14999) {
        nhif = 500;
    } else if (grossSalary <= 19999) {
        nhif = 600;
    } else {
        nhif = 750;
    }

    //NSSF Deductions
    const nssf = 6000;

    //Calculate net salary
    const netSalary = grossSalary - (tax + nhif + nssf);

    console.log(`Gross Salary: ${grossSalary}`); //shows the gross salary (basic salary + benefits)
    console.log(`Tax: ${tax}`); //shows the tax amount 
    console.log(`NHIF: ${nhif}`); //shows the NHIF deduction
    console.log(`NSSF: ${nssf}`); //shows the NSSF deduction 
    console.log(`Net Salary: ${netSalary}`); //shows the net salary (minus all the deductions)
}

calculateNetSalary(80000, 15000); 
