// --In the code--
// let a = "Project";

// -- User Input --
// let a = prompt("Write the input here:");

// --if else--
// if(a == "Assignment")
// {
//     document.write("You are allow to enter in class");
// }
// else
// {
//     document.write("Stand outside the class");
// }

// --if else if else--
// if(a == "Assignment")
// {
//     document.write("You are allow to enter in class");
// }
// else if(a == "Presentation")
// {
//     document.write("Choose the topic according to your preference");
// }
// else
// {
//     document.write("Stand outside the class");
// }

// -- Nested If: CONIDTION WITNIN COND --
// let Flavour = "Chocolate";
// let Topping = "Sprinkles";

// let Flavour = prompt("Write your Flavour:");
// let Topping = prompt("Write your Topping:");

// if(Flavour == "Chocolate")
// {
//    if(Topping == "Choch Chips")
//    {
//     document.write("Chocolate with Choco Chip topping on it");
//    }
//    else if(Topping == "Sprinkles")
//    {
//     document.write("Chocolate with Sprinkles topping on it");
//    }
//    else
//    {
//     document.write("Invalid");
//    }
// document.write("Please tell the flavour & topping")
// }
// else if(Flavour == "Strawberry")
// {
//     document.write("Flavour is Strawbeery")
// }
// else if(Flavour == "Vanilla")
// {
//     document.write("Flavour is Vanilla")
// }
// else
// {
//     document.write("Invalid")
// }

//2-switch 
let day =prompt("enter day");
switch (day) 
{
    case "monday":
        document.write("today is monday");
        break;
        case "tuesday":
                document.write("today is tuesday");
                break;
            case "wednesday":
                document.write("today is wednesday");
                break;
                case "thursday":
                    document.write("today is thursday");
                    break;
                        
    default:
        document.write("invalid");
        break;
}


//js datatypes
 //int 12345456 3.4
 //string  "ali"
 //boolean false true