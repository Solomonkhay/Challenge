var johnMass, johnHeight , markMass , markHeight, johnBMI , markBMI;
johnMass = 50; //kg
johnHeight = 3.5; //meters
markMass =55; //kg
markHeight = 2.4; //meters
johnBMI = johnMass / (johnHeight * johnHeight);
markBMI = markMass / (markHeight * markHeight);
reality = johnBMI > markBMI
console.log( 'Is John\'s BMI greater than Mark\'s?  ' + reality );
