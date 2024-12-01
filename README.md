# README.md

## Overview

This repository contains three JavaScript challenges.The challenges focus on practical applications, including grade calculation, speed detection, and salary computation.

## Week1 Code Challenge

### Challenge 1: Student Grade Generator

**Objective:** Create a program that accepts a student's marks and outputs their corresponding grade.

#### Requirements
- **Check the Input:** Make sure the user enters a number between 0 and 100.
- **Grade Calculation:** Create a function to assign grades based on the score.
- **Show the Result:** Display the grade to the user.

#### Key Steps
1. Ask the user to enter marks using prompt().
2. Check that the marks are between 0 and 100.
3. Use if-else statements to determine the grade.

---

### Challenge 2: Speed Detector

**Objective:** Develop a program that checks the speed of a vehicle and calculates demerit points.

#### Requirements
- **Check the Input:** Make sure the speed entered is a valid number.
- **Calculate Demerit Points:**
  - If the speed is below 70 km/h, show "Ok."
  - If the speed is above 70 km/h, give 1 demerit point for every 5 km/h over the limit.
- **Make a Decision:** If the driver has more than 12 points, show "License suspended."

#### Key Steps
1. Use prompt() to get the car's speed.
2. Check if the speed is below 70 km/h.
3. Calculate demerit points by dividing the extra speed by 5.
4. Use if-else to show the right message or decide if the license should be suspended.

---

### Challenge 3: Net Salary Calculator

**Objective:** Create a program that calculates an employee's net salary based on their basic salary and benefits.

#### Requirements
- **Enter Salary Details:** Get the basic salary and benefits from the user.
- **Apply Deductions:** Use tax rates from KRA, NHIF, and NSSF to figure out the deductions.
- **Find Gross and Net Salary:**
  - Gross salary = Basic Salary + Benefits
  - Net salary = Gross salary - (Tax + NHIF + NSSF deductions)

#### Key Steps
1. Get the basic salary and benefits from the user.
2. Create functions to calculate:
    * PAYE Tax based on income brackets.
    * NHIF Deductions depending on the gross salary.
    * NSSF Deductions following the latest contribution limits.
3. Calculate the net salary by subtracting all deductions from the gross salary.

## Getting Started
To run any of these challenges, clone this repository and execute the respective JavaScript files in your local environment. Ensure you have Node.js installed or use the browser's console for quick testing.To do this:
    ```bash
    git clone <repository-url>
    cd <repository-directory>
    node <script-name>.js

Copyright (©) — &copy; 2024 Natalie Wanjiku
