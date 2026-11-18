//task-3 Given marks, print the grade: 90+ A, 75-89 B, 50-74 C, below 50 Fail.
let marks=49;

switch(marks>0){

    case(marks>=90):
        console.log("Your grade is A");
        break;

    case(marks>=75 && marks<=89):
        console.log("Your grade is B");
        break;

    case(marks>=50 && marks<=74):
        console.log("Your grade is C");
        break;

    case(marks<50):
        console.log("Better luck next time!!");
        break;

    default:
        console.log("Invalid Marks");
        break;
}
