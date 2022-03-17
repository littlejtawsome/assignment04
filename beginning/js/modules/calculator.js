

// ADD FOUR PUBLIC FUNCTIONS BELOW

// ADD FUNCTION

// SUBTRACT FUNCTION

// MULTIPLY FUNCTION

// DIVIDE FUNCTION

// EXPORT THE FOUR PUBLIC FUNCTIONS
function calculator (x, y, o){
    switch (o) {
        case '+':
            return x + y;
            break
        case '-':
            return x + y;
            break
        case '*':
            return x + y;
            break
        case '/':
            return x + y;
            break
        default:
        return ('enter valid numbers');
    }
}

// ADD A PRIVATE FUNCTION CALLED CALCULATE
let cal_1 = calculator(2,3, '+');
let cal_2 = calculator(4,5, '-');
let cal_3 = calculator(6,7, '*');
let cal_4 = calculator(8,9, '/');

console.log(cal_1);
console.log(cal_2);
console.log(cal_3);
console.log(cal_4);
