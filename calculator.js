
let a = Number(prompt("write the 1st no?"))
let op = prompt("Enter operator = +,-,*,/")
let b = Number(prompt("write the 2nd no?"))

switch (op)
{
    case '+':
        console.log("a+b="+ (a+b));
        break;

        case '-':
        console.log("a-b="+ (a-b));
        break;

        case '*':
        console.log("a*b="+ (a*b));
        break;

        case '/':
            if( b!=0){

            
        console.log("a/b="+ (a/b));
            }
            else{
                alert("error:division by zero is not allowed.");
            }
        break;

    

    default:
        alert("invalid operator")
        break;
}



