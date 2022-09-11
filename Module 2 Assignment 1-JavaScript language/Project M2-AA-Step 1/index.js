


//Do not repeat yourself(DRY)

const student = 'Mary Jane';
 

const greet = greetTheStudent(student);// argument 
console.log(greet);


//console.log(message+ ' ' + studentName);
//console.log(message+ ' ' + studentName2);
function greetTheStudent(studentName){// parameter
    return `Hello there ${studentName}`;

    //const greeting = `Hello there ${studentName}`;
    //const message = 'Hello there';
    //const greeting = message+ ' ' + studentName;
    //return greeting;
}