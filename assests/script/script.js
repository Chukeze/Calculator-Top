let numberOfButtons = 12;
const numberButtonContainer = document.querySelector('.number-container');
let count;

let calculator = {
    operators: {
        add() {

        },
        multiply() {},
        sum(){//use reduce here
        },
    },
    symbols : ['+', '-', '*', '/', '%', '='],
    numbers: ['7', '8', '9', '4', '5', '6', '1', '2', '3', '(', '0', ')'],
    specialOperators : {
        memory : {
            memoryClear: 'MC',
            memoryRecall: 'MR',
            memoryAdd: 'M+',
            memoryRemove: 'M-',
        },
        square : {
            symbol : 'x^2',
            square() {},
        },
        power : {
            symbol : 'x^y',
            power() {},
        },
        sin : {
            symbol : 'sin',
            sin() {},
        },
        cos : {
            symbol : 'cos',
            cos() {},
        },
        tan : {
            symbol : 'tan',
            tan() {},
        },
        squareroot : {
            symbol : '&#8730',
            sqroot() {},
        },
        log : {
            symbol : 'log',
            log() {},
        },
        Euler :{
            symbol : 'EXP',
            exp(){},
        }
    },
}
function fillOperation(){
    count = 0;
    const fillOperationButtons = document.querySelectorAll('.operation');
    [...fillOperationButtons].map(operator => operator.textContent = calculator.symbols[count++])
    //forEach(operator => operator.textContent = calculator.symbols[count]);
}
const createNumberButtons = (amount = numberOfButtons) => {
    count = 0;
    numberButtonContainer.style.setProperty("--repeat", amount/4);
    numberButtonContainer.append(
        ...Array.from({length: amount}, () => (length > 15) ? null : document.createElement("button"))
    );
    [...numberButtonContainer.children].forEach(el => el.classList.add('Numbers'));
    const numbers = document.querySelectorAll('.Numbers');
    numbers.forEach(el => el.textContent = calculator.numbers[count++]);
}
createNumberButtons(); 
fillOperation();