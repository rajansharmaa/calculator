//     THE SCIENTIFIC CALCULATOR

//Declaring variables
var decimalPoint = enter = entered = operatorSign = rootNpower_Sign = flo = math = M = firstI = first = second = secondI = answer = theanswer = result = peSign = "";
var opsCheck = dotCounter = 0;
var removeFirstZero = "";

//To prevent printing more than one dot
function dot(b) {
    if (decimalPoint == "") {
        enter = entered = b;
        first+= enter;
        entered+= enter;
        decimalPoint = ".";
        dotCounter = 0;
        return first;
        } else {
        return first;
    }
}

//To control what happen when Pi and Euler is clicked
function PE(b) {
    decimalPoint = ".";
    dotCounter = 15;
    var cons = b;
    if (peSign == "") {
        if (operatorSign != "" && first == "" + operatorSign) {
            first = (cons = "PI") ? Math.PI: Math.E;
        } else if (operatorSign != "" && first > 0 || first < 0) {
            first = (cons == "PI") ? first + "" + Math.PI: first + "" + Math.E;
        } else if (first != "" && operatorSign != "") {
            first += (cons = "PI") ? Math.PI: Math.E;
        } else if (operatorSign == "" && first != "") {
            first = (cons == "PI") ? first + "" + Math.PI: first + "" + Math.E;
        } else {
            first = (cons == "PI") ? Math.PI: Math.E;
        }
    } else if (first !== "") {
        first = (cons == "PI") ? first + "" + Math.PI: first + "" + Math.E;
    } else {
        first = (cons == "PI") ? Math.PI:  Math.E;
    }
    return first;
}
function mp() {
    M = first;
    first = M;
    return first ;
}
function mr() {
    first = M;
    return first ;
}
//Cancel making all variable empty. All variable = ""
function c(c) {
    document.getElementById("display1").innerHTML = decimalPoint = operatorSign = rootNpower_Sign = entered = math = first = firstI = second = secondI = answer = theanswer = flo = M = "";
    return "";
}
//To calculate squares, cubes, factorials e.t.c. For calculations which use only one value. Variable 'firstI' was isolated by maths() function to be solved here

function mathematics() {
    if (math == "sqr") {
        result = firstI * firstI;
    } else if (math == "cube") {
        result = firstI * firstI * firstI;
    } else if (math == "Sqrt") {
        result = Math.sqrt(firstI);
    } else if (math == "cubert") {
        result = Math.cbrt(firstI);
    } else if (math == "negpos") {
        result = firstI * -1;
    } else if (math == "sine") {
        result = Math.sin(firstI);
    } else if (math == "cosine") {
        result = Math.cos(firstI);
    } else if (math == "tangent") {
        result = Math.tan(firstI);
    } else if (math == "ln") {
        result = Math.log(firstI);
    } else if (math == "logTen") {
        result = Math.log10(firstI);
    } else if (math == "rand") {
        result = Math.round(firstI);
    }else if (math == "res") {
        result = 1 / firstI;
    } else if (math == "fact") {
        n = firstI;
        firstI = 1;
        while (n > 1){
            firstI *= n;
            n -= 1;
        }
        result = firstI;
    } decimalPoint = (Math.round(result) == result) ? "": ".";
}
//To make variable 'first' and 'second' keep result of its values. e.g if it was 3 + 2 it must now be 5. This is done to prepare them for use in maths() function
function prep() {
    second = eval(second);
    first = eval(first);
}
//When sqr, cube e.t.c are clicked, this function, math(), does the following: 1. It extract the last number you entered from variable 'first' and keeps it as variable 'firstI'. 2. It calls mathematics function to work on the on variable 'firstI'. The answer is kept in 'result' variable. 3.It displays the answer of other previous numbers entered and the 'result' from mathematics e.g. 5 + 4 which was 3 + 2 + 2^2. Here 3 + 2 has become 5 and because of prep() function. 
function maths(a) {
    math = a;
    try {
        if (operatorSign == "+") {
            prep();
            firstI = first - second;
            mathematics();
            first = second + "+" + result;
        } else if (operatorSign == "-") {
            prep();
            firstI = second - first;
            mathematics();
            first = second + "-" + "(" + result + ")" ;
        } else if (operatorSign == "*") {
            prep();
            firstI = first / second;
            mathematics();
            first = second + "*" + result;
        } else if (operatorSign == "/") {
            prep();
            firstI = second / first;
            mathematics();
            first = second + "/" + result;
        } else {
            firstI = first;
            mathematics();
            first = result;
        }
        return first;
    } catch (first ) {
        first = second + operatorSign;
        return first;
    }
}
//This is just my notes:--> To remove first zero in second number zero must have its own function so that every entry of zero is checked to make sure that no number greater than zero should start with a zero
function digit(b) {
    opsCheck = 0;
    dotCounter++;
    if (first == Infinity || first == NaN) {
        first = 0;
    }
    peSign = "pes";
    entered = b;
    if (rootNpower_Sign != "") {
        first = (first === "0" && entered !== ".") ? entered: first + entered;
        return secondI + firstI + rootNpower_Sign + first;
    } else {
        first = (first === "0" && entered !== ".") ? entered: first + entered;
        theanswer = eval(first) + "";
        if (theanswer.length > 14) {
            theanswer = Math.abs((theanswer*1).toPrecision(14));
        }
          document.getElementById("display1").innerHTML = first;
        return theanswer;
    }
}
var thebase = "";
function base(a) {
    thebase = a;
    first *= 1;
    if (thebase == "bin") {
        firstII = first.toString(2);
    } else if (thebase == "oct") {
        firstII = first.toString(8);
    } else if (thebase == "hex") {
        firstII = first.toString(16);
    }
    return firstII;
}
//Four functions below are for themes
function themes(thm) {
    theme = thm;
    el = document.getElementsByClassName("div");
    if (theme == 1) {
        el[0].id="theme1";
    } else if (theme == 2) {
        el[0].id="theme2";
    } else if (theme == 3) {
        el[0].id="theme3";
    } else {
        el[0].id="theme4";
    }
}
//back space
function bsp() {
    first += "";
    dotCounter--;
    decimalPoint = dotCounter >= 0 ? ".": "";
    first = first.substr(0, first.length - 1);
    document.getElementById("display1").innerHTML = first;
    try{
        eval(first);
        return first;
    } catch(first) {
        eval(first);
    return "";
    }
}
//Two functions below calculate power and root
function pow() {
     first *= 1;
     result = Math.pow(firstI, first);
}
function roots() {
     first *= 1;
     result = Math.pow(first, 1 / firstI).toPrecision(12);
     result = Math.abs(result);
}
//When operators ,+ - / * are clicked op() function does a number of things. It checks if power or root were clicked. If yes, it calculates the previous numbers and the add the new operator. If not it add the operator clicked
function operators(b) {
    peSign = "";
    if (opsCheck == 0) {
    opsCheck = 1;
    document.getElementById("display1").innerHTML = first;
    try {
        if (rootNpower_Sign == "^") {
            if (operatorSign == "+") {
                pow();
                answer = result + second;
            } else if (operatorSign == "-") {
                pow();
                answer = second - result;
            } else if (operatorSign == "*") {
                pow();
                answer = result * second;
            } else if (operatorSign == "/") {
                pow();
                answer = second / result;
            } else {
                pow();
                answer = result;
            }
        } else if (rootNpower_Sign == "√") {
            if (operatorSign == "+") {
                roots();
                answer = second + result;
            } else if (operatorSign == "-") {
                roots();
                answer = second - result;
            } else if (operatorSign == "*") {
                roots();
                answer = result * second;
            } else if (operatorSign == "/") {
                roots();
                answer = second / result;
            } else {
                roots();
                answer = result;
            }
        } else if (a == "%") {
            answer = second % first;
        } else {
            operatorSign = b;
            first += operatorSign;
            decimalPoint = "";
        }
        rootNpower_Sign = "";
        operatorSign = b;
        firstI = "";
        second = answer;
        first = answer + operatorSign;
        decimalPoint = "";
document.getElementById("display1").innerHTML = first;
    return eval(second);
    } catch(x) {
        if (first != "<span class='red'>Press ON to start</span>") {
            operatorSign = b;
            second = eval(first);
            first += operatorSign;
            decimalPoint = "";
        } else {
            first = "<span class='red'>Press ON to start</span>" ;
        }
        document.getElementById("display1").innerHTML = first;
        return (second == undefined ) ? 0 : eval(second);
        }
    } else {
        operatorSign = b;
        first += "";
        first = first.substr(0, first.length - 1);
        first = first + operatorSign;
        document.getElementById("display1").innerHTML = first;
        return (second == undefined ) ? 0 : eval(second);
    }
}
function percent() {
    first = eval(first) * 100;
    return first + "%";
}
//toggles the negative sign
function negpos() {
    first = (operatorSign == "") ? first *= -1: first;
    return first ;
}
function power(b) {
    rootNpower_Sign = b;
    if (operatorSign == "+" && second != "") {
        prep();
        firstI = first - second;
        first = "";
        secondI = second + "+";
        return second + "+" + firstI + rootNpower_Sign;
    } else if (operatorSign == "-" && second != "") {
        prep();
        firstI = second - first;
        first = "";
        secondI = second + "-";
        return second + "-" + firstI + rootNpower_Sign;
    } else if (operatorSign == "*" && second != "") {
        prep();
        firstI = first / second;
        first = "";
        secondI = second + "*";
        return second + "*" + firstI + rootNpower_Sign;
    } else if (operatorSign == "/" && second != "") {
        prep();
        firstI = second / first;
        first = "";
        secondI = second + "/";
    return second + "/" + firstI + rootNpower_Sign;
    } else {
        rootNpower_Sign = b;
        firstI = first;
        first = "";
        return firstI + rootNpower_Sign;
    }
}
function equal() {
document.getElementById("display1").innerHTML = first;
    try {
        if (rootNpower_Sign == "^") {
            if (operatorSign == "+") {
                pow();
                first = result + second;
            } else if (operatorSign == "-") {
                pow();
                first = second - result;
            } else if (operatorSign == "*") {
                pow();
                answer = result * second;
                first = answer;
            } else if (operatorSign == "/") {
                pow();
                first = second / result;
            } else {
                pow();
                first = result;
            }
        } else if (rootNpower_Sign == "√") {
            if (operatorSign == "+") {
                roots();
                first = result + second;
            } else if (operatorSign == "-") {
                roots();
                first = second - result;
            } else if (operatorSign == "*") {
                roots();
                first = result * second;
            } else if (operatorSign == "/") {
                roots();
                first = second / result;
            } else {
                roots();
                first = result;
            }
        } else if (operatorSign == "%") {
            answer = second % first;
        } else {
            if (first == "") {
                first = first ;
            } else {
                try{
                    first = eval(first) + "";
                    if (first.length > 14)  {
                        first = Math.abs((first*1).toPrecision(14));
                    }
                } catch (first) {
                    first = "<small><small>Enter number or delete operator<!--Incorrect input. Click C to clear--></small></small>";
                    return first;
                    first = "";
                }
            }
        }
        rootNpower_Sign = operatorSign = answer = firstI = second = "";
        flo = first;
        flo = Math.floor(flo);
        decimalPoint = (flo == first) ? "": ".";
        return first;
    } catch(operatorSign) {
        operatorSign = "";
        first = eval(first) + "";
        if (first.length > 14) {
            first = Math.abs((first*1).toPrecision(14));
        }
        flo = first;
        flo = Math.floor(flo);
        decimalPoint = (flo == first) ? "": ".";
        return first;
    }
}
alert("Hello Dear,Follow us on Instagram as @CODEBYTEZ to support us.");
